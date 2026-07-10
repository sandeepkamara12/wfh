import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSectionThunk, getSectionThunk, updateSectionThunk } from '../../../features/subAdmin/sectionSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import TextField from '../../ui/TextField';

const AddSection = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [sections, setSections] = useState([]);

    const dispatch = useDispatch();

    let user = useSelector((state) => state.auth.user);
    let loading = useSelector((state) => state.section.loading.section);

     const validationSchema = Yup.object({
    name: Yup.string().required("Classroom is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      sub_admin_id: user?.id || null,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let result;

        if (isEdit) {
          result = await dispatch(
            updateSectionThunk({
              id: selectedSection.id,
              data: values,
            }),
          ).unwrap();
        } else {
          result = await dispatch(createSectionThunk(values)).unwrap();
        }

        if (result?.success) {
          toast.dismiss();
          toast.success(result?.message);

          resetForm();
          setIsEdit(false);
          setSelectedSection(null);

          const refreshed = await dispatch(getSectionThunk()).unwrap();
          if (refreshed?.success) {
            setSections(refreshed.data);
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
                    placeholder="Section: A, B, Rose, Milton etc."
                    label="Section"
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
                            ? "Update Section"
                            : "Create Section"}
                </button>
            </div>
        </form>
    )
}

export default AddSection
