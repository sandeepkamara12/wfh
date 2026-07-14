import { useDispatch, useSelector } from "react-redux";
import TextField from "../../ui/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createClassroomThunk,
  getClassroomThunk,
  updateClassroomThunk,
} from "../../../features/subAdmin/classroomSlice";
import { toast } from "react-toastify";

const AddClassroom = ({
  handleClose,
  setClassrooms,
  setIsEdit,
  isEdit,
}) => {
  

  const dispatch = useDispatch();

  let user = useSelector((state) => state.auth.user);
  let loading = useSelector((state) => state.classroom.loading.classroom);

  const validationSchema = Yup.object({
    name: Yup.string().required("Classroom is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: isEdit?.name || "",
      sub_admin_id: user?.id || null,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let result;

        if (isEdit!==null) {
          result = await dispatch(
            updateClassroomThunk({
              id: isEdit?.id,
              data: values,
            }),
          ).unwrap();
          handleClose()
        } else {
          result = await dispatch(createClassroomThunk(values)).unwrap();
        }

        if (result?.success) {
          toast.dismiss();
          toast.success(result?.message);

          resetForm();
          setIsEdit(null);

          const refreshed = await dispatch(getClassroomThunk()).unwrap();
          if (refreshed?.success) {
            setClassrooms(refreshed.data);
          }
        } else {
          toast.dismiss();
          toast.warning(result.message);
        }
      } catch (error) {
        toast.dismiss();
        toast.error(error?.message || "Something went wrong");
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="h-full">
      <div className="flex flex-wrap gap-4 items-start px-4 py-6">
        <TextField
          placeholder="Classroom: 1st, 2nd etc."
          label="Classroom"
          id="name"
          {...formik.getFieldProps("name")}
          error={formik.touched.name && formik.errors.name}
          required={true}
        />
        <button
          type="submit"
          className="btn btn_with_text"
          disabled={loading || !(formik.isValid && formik.dirty)}
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Creating..."
            : isEdit
              ? "Update Classroom"
              : "Create Classroom"}
        </button>
      </div>
    </form>
  );
};

export default AddClassroom;
