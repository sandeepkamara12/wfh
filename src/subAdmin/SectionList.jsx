import Table from "../components/common/Table";
import { Clock, LayoutGrid, Pencil, Trash2 } from "lucide-react";
import { sectionData } from "../const/constant";
import { useIsMobile } from "../hooks/useIsMobile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSectionThunk,
  deleteSectionThunk,
  getSectionThunk,
  updateSectionThunk,
} from "../features/subAdmin/sectionSlice";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import Drawer from "../components/common/Drawer";
import TextField from "../components/ui/TextField";

const SectionList = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [sections, setSections] = useState([]);
  const { isBelow640 } = useIsMobile();

  const dispatch = useDispatch();

  let user = useSelector((state) => state.auth.user);
  let loading = useSelector((state) => state.section.loading.section);

  // Get Sections on component mount
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const result = await dispatch(getSectionThunk()).unwrap();
        if (result?.success) {
          setSections(result?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSections();
  }, []);

  const handleUpdateSection = (row) => {
    if (loading) return;
    setIsEdit(true);
    setSelectedSection(row);

    formik.setValues({
      name: row.name,
      sub_admin_id: user?.id || null,
    });

    handleOpen();
  };

  const handleDeleteSection = async (row) => {
    if (loading) return;
    try {
      const result = await dispatch(
        deleteSectionThunk({ id: row.id }),
      ).unwrap();
      if (result?.success) {
        toast.dismiss();
        toast.success(result?.message);
        const refreshed = await dispatch(getSectionThunk()).unwrap();
        if (refreshed?.success) {
          setSections(refreshed.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          setOpen(false);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setSelectedSection(null);
    formik.resetForm();
  };

  const columns = [
    {
      name: "Section",
      cell: (row) => (
        <div className="flex md:items-center flex-col md:flex-row gap-1 md:gap-2">
          <span className="text-sm font-semibold text-navy leading-4">
            {row.name}
          </span>
          <span className="tracking-wide pt-0.5 pb-1 px-2 rounded-full text-xs font-semibold bg-navy/10 text-navy">
            {row.id}
          </span>
        </div>
      ),
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "Created At",
      omit: isBelow640,
     cell: (row) => {
        const date = new Date(row.created_at);

        const formatted = date.toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        return (
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            {formatted}
          </div>
        );
      },
      selector: (row) => row.created_at,
    },
    {
      name: "",
      cell: (row) => {
        const date = new Date(row.created_at);

        const formatted = date.toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        return (
        <div className="flex flex-col gap-3 w-full items-end">
          <div className="flex flex-col gap-0 items-end sm:hidden">
            <span>Account Created At:</span>
            <div className="flex items-center gap-1">
              <Clock className="size-4" />
              {formatted}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end w-full gap-1">
            <button
              type="button"
              className="btn icon_btn"
              onClick={() => handleDeleteSection(row)}
              disabled={loading}
            >
              <Trash2 className="size-5 mx-auto" />
            </button>
            <button
              type="button"
              className="btn icon_btn"
              onClick={() => handleUpdateSection(row)}
              disabled={loading}
            >
              <Pencil className="size-5 mx-auto" />
            </button>
          </div>
        </div>
        );
      }
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
        <div className="min-w-full inline-block align-middle">
          <div className="">
            <Table
              id="sections"
              columns={columns}
              handleOpen={handleOpen}
              isButtonDisabled={loading}
              data={sections}
              btnText="Add Section"
              btnIcon={<LayoutGrid className="w-5 h-5 mx-auto" />}
              label="Sections"
              subLabel="Add Section, edit and more."
            />

            {/* <Drawer handleClose={handleClose} open={open}>
              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 gap-4 items-start">
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
            </Drawer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
