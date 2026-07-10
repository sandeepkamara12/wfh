import Table from "../components/common/Table";
import { Clock, Pencil, Plus, Trash2 } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useIsMobile } from "../hooks/useIsMobile";
import Drawer from "../components/common/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TextField from "../components/ui/TextField";
import {
  createClassroomThunk,
  deleteClassroomThunk,
  getClassroomThunk,
  updateClassroomThunk,
} from "../features/subAdmin/classroomSlice";
import { toast } from "react-toastify";
// import { classroomData } from "../const/constant";

const ClassRoomList = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const [classrooms, setClassrooms] = useState([]);
  const { isBelow640 } = useIsMobile();
  const dispatch = useDispatch();

  let user = useSelector((state) => state.auth.user);
  let loading = useSelector((state) => state.classroom.loading.classroom);

  
  // Get Classrooms on component mount
  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const result = await dispatch(getClassroomThunk()).unwrap();
        if (result?.success) {
          setClassrooms(result?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchClassrooms();
  }, []);

  const handleUpdateClassroom = (row) => {
     if (loading) return;
    setIsEdit(true);
    setSelectedClassroom(row);

    formik.setValues({
      name: row.name,
      sub_admin_id: user?.id || null,
    });

    handleOpen();
  };

  const handleDeleteClassroom = async (row) => {
    if (loading) return;
    try {
      const result = await dispatch(deleteClassroomThunk({ id: row.id })).unwrap();
      if (result?.success) {
        toast.dismiss();
        toast.success(result?.message);
        const refreshed = await dispatch(getClassroomThunk()).unwrap();
        if (refreshed?.success) {
          setClassrooms(refreshed.data);
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
            updateClassroomThunk({
              id: selectedClassroom.id,
              data: values,
            })
          ).unwrap();
        } else {
          result = await dispatch(createClassroomThunk(values)).unwrap();
        }

        if (result?.success) {
          toast.dismiss();
          toast.success(result?.message);

          resetForm();
          setOpen(false);
          setIsEdit(false);
          setSelectedClassroom(null);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setSelectedClassroom(null);
    formik.resetForm();
  };
  // useEffect(() => {
  //   if (!open) {
  //     formik.resetForm();
  //     setIsEdit(false);
  //     setSelectedClassroom(null);
  //   }
  // }, [open]);

  const columns = [
    {
      name: "Classrooms",
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
      selector: (row) => row.name,
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
              <button type="button" className="btn icon_btn" onClick={() => handleDeleteClassroom(row)} disabled={loading}>
                <Trash2 className="size-5 mx-auto" />
              </button>
              <button
                type="button"
                className="btn icon_btn"
                onClick={() => handleUpdateClassroom(row)}
                disabled={loading}
              >
                <Pencil className="size-5 mx-auto" />
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
        <div className="min-w-full inline-block align-middle">
          <div className="">
            <Table
              id="classrooms"
              columns={columns}
              handleOpen={handleOpen}
              isButtonDisabled={loading}
              data={classrooms}
              btnText="Add Classroom"
              btnIcon={<Plus className="w-5 h-5 mx-auto" />}
              label="Classrooms"
              subLabel="Add Classroom, edit and more."
            />

            {/* <Drawer handleClose={handleClose} open={open}>
              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 gap-4 items-start">
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
                    disabled={loading  || !(formik.isValid && formik.dirty)}
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
            </Drawer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoomList;
