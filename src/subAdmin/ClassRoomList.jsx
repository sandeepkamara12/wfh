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
  getClassroomThunk,
} from "../features/subAdmin/classroomSlice";
import { toast } from "react-toastify";
// import { classroomData } from "../const/constant";

const ClassRoomList = () => {
  const [open, setOpen] = useState(false);
  const [classrooms, setClassrooms] = useState([]);
  const { isBelow640 } = useIsMobile();
  let user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const result = await dispatch(getClassroomThunk()).unwrap();
        console.log(result, "get classroom");
        if (result?.success) {
          setClassrooms(result?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchClassrooms();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Classroom name is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      sub_admin_id: user?.id || null,
    },
    // enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await dispatch(createClassroomThunk(values)).unwrap();
        console.log(result);
        if (result.success) {
          toast.success(result?.message);
          resetForm({ name: "", sub_admin_id: null });
          setOpen(false);
        } else {
          toast.warning(result.message);
        }
      } catch (error) {
        toast.error(error?.message || "Something went wrong");
      }
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <button type="button" className="icon-btn">
                <Trash2 className="size-5 mx-auto" />
              </button>
              <button type="button" className="icon-btn">
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
              data={classrooms}
              btnText="Add Classroom"
              btnIcon={<Plus className="w-5 h-5 mx-auto" />}
              label="Classrooms"
              subLabel="Add Classroom, edit and more."
            />

            <Drawer handleClose={handleClose} open={open}>
              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 gap-4 items-start">
                  <TextField
                    label="Classroom"
                    id="name"
                    {...formik.getFieldProps("name")}
                    error={formik.touched.name && formik.errors.name}
                    required={true}
                  />

                  <button type="submit" className="btn">
                    Create Classroom
                  </button>
                </div>
              </form>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoomList;
