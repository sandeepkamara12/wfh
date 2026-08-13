import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Custom Hooks
import { useIsMobile } from "../hooks/useIsMobile";

// Utils
import { groupClasses } from "../utils/classUtility";
import { getDisplayName } from "../utils/displayUtil";
import { dateFormat } from "../utils/dateUtils";

import { classesTeach, familyOptions, statusOptions } from "../const/constant";

//Slices
import { addTeacher } from "../features/teachers/teachersSlice";
import { getTeacherThunk } from "../features/subAdmin/teacherSlice";

//Components
import Table from "../components/common/Table";
import TextField from "../components/ui/TextField";
import FloatingDropdown from "../components/ui/FloatingDropdown";

//Icons
import { CalendarDays, Copy, EllipsisVertical, Eye, Loader, Mail, Pencil, Phone, Plus, SlidersHorizontal, Trash2, UserRound, UserRoundPen } from "lucide-react";
import Switch from "../components/ui/Switch";
import CustomSelect from "../components/ui/CustomSelect";
// import { deleteClassroomThunk } from "../features/subAdmin/classroomSlice";
import { toast } from "react-toastify";


const base_url = import.meta.env.VITE_API_BASE_URL;

const TeacherList = () => {
  const { handleOpen, setIsEdit } = useOutletContext();

  const dispatch = useDispatch();
  const allTeachers = useSelector((state) => state.teachers.teachers);

  const { isBelow640, isBelow1024, isBelow1280 } = useIsMobile();
  const [loadingId, setLoadingId] = useState(null);

  //Fetch Teachers on load
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        await dispatch(getTeacherThunk()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeachers();
  }, [])

  //Add a new Teachers
  const handleAdd = () => {
    dispatch(
      addTeacher({
        id: Date.now(),
        name: "John Doe",
        subject: "Math"
      })
    );
  };

  const handleDelete = async (id) => {
    if (id == "") return;
    try {
      setLoadingId(id);
      let result = null;
      // result = await dispatch(deleteClassroomThunk({ id })).unwrap()
      if (result?.success) {
        toast.dismiss();
        toast.success(result?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId(null);
    }
  };

  // Table Columns
  const columns = [
    {
      name: "Name",
      cell: row => (
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center size-9 aspect-square rounded-full overflow-hidden bg-navy/10">
              <img
                src={`${base_url}/${row.profile_pic}`}
                alt=""
                className="h-full w-full rounded-full max-w-full aspect-square"
              />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-navy leading-4">
                {row.first_name} {row.last_name}
              </span>
              <span className="inline-flex items-center tracking-wide gap-x-1 text-xs font-medium text-gray-400 uppercase">
                {/* {row.id} */}
                123f54s6aa
                <Copy className="size-3 text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Contact",
      minWidth: "250px",
      omit: isBelow1024,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-2">
          {/* <a className="flex items-center gap-1 text-black hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
            <Mail className='size-4' />
            {row.email}
          </a> */}
          <a className="flex items-center gap-1 text-black hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
            {/* <Phone className="size-4" /> */}
            {row.phone}
          </a>
        </div>
      ),
    },
    {
      name: "Class In charge",
      omit: isBelow640,
      cell: () => (
        <div className="flex flex-wrap flex-col gap-0.5 text-black">
          <span
            className="flex items-center gap-1"
          >
            {/* <UserRoundPen className="size-4 shrink-0 " /> */}
            III B
          </span>
          <span>Non Medical | Maths</span>
        </div>
      )
    },
    {
      name: "Joined At:",
      omit: isBelow1280,
      cell: (row) => (
        <div className="flex flex-wrap items-center gap-1">
          {/* <CalendarDays className="size-4 shrink-0" /> */}
          {dateFormat(row.created_at, "dd MMMM, yyyy")}
        </div>
      )
    },
    {
      name: "",
      // minWidth: "50px",
      // maxWidth: "50px",
      cell: (row) => (
        <div className="flex flex-col gap-3 w-full items-end">
          <div className="flex flex-wrap items-center justify-end w-full gap-1">
            <button className="btn icon_btn navy-btn">
              <Eye className="own-icon" />
            </button>
            <button type="button" className="btn icon_btn btn_with_text navy-btn" onClick={() => handleDelete(row?.id)}
              disabled={loadingId === row?.id}>
              {loadingId === row?.id ? (<Loader className="loader own-icon" />) : (<Trash2 className="own-icon" />)}
            </button>
            <button
              type="button"
              className="btn icon_btn btn_with_text navy-btn"
              onClick={() => {
                setIsEdit(row);
                handleOpen('classroom');
              }
              }
              disabled={loadingId === row?.id}
            >
              <Pencil className="size-5 mx-auto" />
            </button>
          </div>
          {/* <div className="relative inline-flex">
            <FloatingDropdown
              trigger={
                <button className="p-2">
                  <EllipsisVertical className="size-5 shrink-0" />
                </button>
              }
            >
              <div className="flex items-center gap-1 p-1">
                <button className="btn icon_btn navy-btn">
                  <Eye className="own-icon" />
                </button>
                <button className="btn icon_btn navy-btn">
                  <Trash2 className="own-icon" />
                </button>
                <button className="btn icon_btn navy-btn">
                  <Pencil className="own-icon" />
                </button>
              </div>
            </FloatingDropdown>
          </div> */}
        </div>
      ),
    }
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
        <div className="min-w-full inline-block align-middle">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <h2 className='font-bold text-xl capitalize text-navy'>All Teachers</h2>
              <p className="text-sm text-gray-500">Filter Teacher via first name, last name, phone, teacher id & joined at.</p>
            </div>
            <div className="flex items-center justify-end">
               <TextField icon="search" label="" placeholder="Search Teacher" className="w-1/2" />
            </div>

            {/* <div className="flex items-end justify-between">
              <div>
                <TextField icon="search" label="" placeholder="Search Teacher" />
              </div>
              <div className="flex items-end gap-4">
                <CustomSelect
                  options={familyOptions}
                  selectType="classroom"
                  label="Family Filter"
                  isSearchable={false}
                  placeholder="Has parent or spouse?"
                />
                <CustomSelect
                  options={statusOptions}
                  selectType="classroom"
                  label="Status Filter"
                  isSearchable={false}
                  placeholder="Active, Inactive or Leave"
                />
              </div>
            </div> */}
          </div>
          <div className="col-span-6 2xl:col-span-3 w-full flex flex-col bg-white rounded overflow-hidden">
            <div className="bg-navy py-3 px-4 font-medium text-fifteen text-white flex justify-between items-center">
              All Teachers
              <div className="flex flex-wrap items-center gap-2">
                <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={() => handleOpen('teacher')} />
                <Trash2 className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" disabled />
                <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
              </div>
            </div>
            <Table
              id="teachers"
              columns={columns}
              data={allTeachers}
              needHeader={true}
              expandableRows={false}
              paginationPerPage={50}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherList
