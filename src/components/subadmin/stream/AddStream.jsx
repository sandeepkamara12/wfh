import { useDispatch, useSelector } from 'react-redux';
import { createStreamThunk, updateStreamThunk } from '../../../features/subAdmin/streamSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import TextField from '../../ui/TextField';
import { Loader } from 'lucide-react';

const AddStream = ({ handleClose, setIsEdit, isEdit }) => {

  const dispatch = useDispatch();

  let user = useSelector((state) => state.auth.user);
  let loading = useSelector((state) => state.stream.loading.stream);

  const validationSchema = Yup.object({
    name: Yup.string().required("Stream is required"),
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

        if (isEdit) {
          result = await dispatch(
            updateStreamThunk({
              id: isEdit.id,
              data: values,
            }),
          ).unwrap();
          handleClose();
        } else {
          result = await dispatch(createStreamThunk(values)).unwrap();
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
          label="Stream"
          id="name"
          subHeading="Create streams for example Arts, Medical."
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
                ? "Update Stream"
                : "Create Stream"}
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddStream
