import { useDispatch, useSelector } from "react-redux";
import TextField from "../../ui/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createClassroomThunk,
  updateClassroomThunk,
} from "../../../features/subAdmin/classroomSlice";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

const AddClassroom = ({
  handleClose,
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
      <div className="flex flex-wrap gap-2 items-start">
        <TextField
        {...formik.getFieldProps("name")}
          label="Classroom"
          id="name"
          subHeading="Create / Update classrooms for example IV, V, VI."
          error={formik.touched.name && formik.errors.name}
          required={true}
        />
        <div className="w-full">

        <button
          type="submit"
          className="btn btn_with_text navy-btn w-full"
          disabled={loading || !(formik.isValid && formik.dirty)}
        >
          {loading
            ? isEdit
            ? <><Loader className="size-5 shrink-0 animate-spin [animation-duration:2s]" /> Updating</>
            : <><Loader className="size-5 shrink-0 animate-spin [animation-duration:2s]" /> Creating</>
            : isEdit
            ? "Update Classroom"
            : "Create Classroom"}
        </button>
            </div>
      </div>
    </form>
  );
};

export default AddClassroom;
