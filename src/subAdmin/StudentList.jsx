import { BookOpenText, CalendarDays, Copy, EllipsisVertical, Eye, GalleryThumbnails, Loader, Pencil, Phone, Plus, Search, SlidersHorizontal, Trash2, UserRound, UserRoundPen } from "lucide-react";
import Table from "../components/common/Table";
import { useIsMobile } from "../hooks/useIsMobile";
import FloatingDropdown from "../components/ui/FloatingDropdown";
import { useOutletContext } from "react-router-dom";
import TextField from "../components/ui/TextField";
import Switch from "../components/ui/Switch";
import CustomSelect from "../components/ui/CustomSelect";
import { familyOptions, statusOptions } from "../const/constant";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { dateFormat } from "../utils/dateUtils";
import { useDispatch, useSelector } from "react-redux";
import { getStudentThunk } from "../features/subAdmin/studentSlice";

const StudentList = () => {
  const { handleOpen, setIsEdit } = useOutletContext();
  const { isBelow640, isBelow768, isBelow1024, isBelow1280, isBelow1440 } = useIsMobile();
  const [loadingId, setLoadingId] = useState(null);

  const dispatch = useDispatch();

  //Fetch Teachers on load
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        await dispatch(getStudentThunk()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeachers();
  }, [])

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

  const columns = [
    {
      name: "Name",
      cell: row => (
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center size-9 aspect-square rounded-full overflow-hidden bg-navy/10 shrink-0">
              <img
                src={row.photo}
                alt=""
                className="h-full w-full rounded-full max-w-full aspect-square"
              />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-navy leading-4 capitalize">
                {row.first_name} {row.last_name}
              </span>
              <span className="inline-flex items-center tracking-wide gap-x-1 text-xs font-medium text-gray-400 uppercase">
                {row.id}
                <Copy className="size-3 text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      ),
      // selector: row => row.name,
      // sortable: true
    },

    {
      name: "Classroom",
      omit: isBelow768,
      cell: row => (
        <>
          {row.classroom ?? 'III'} {row.section ?? 'A'}
        </>
      )
    },
    {
      name: "Classroom in Charge",
      omit: isBelow640,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-0.5">
          <span>
            {row.classIncharge ?? 'Mr. Taranjeet Singh'}
          </span>
          <span>{row.classInchargePhone ?? '8524697310'}</span>
        </div>
      )
    },
    {
      name: "Parent Contact",
      omit: isBelow1024,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <span className="text-orange font-medium">F:</span> {row.fatherPhone ?? '7986680517'}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-orange font-medium">M:</span> {row.motherPhone ?? '8488750518'}
          </div>
        </div>
      ),
      selector: row => row.contact
    },
    {
      name: "Joined At",
      omit: isBelow1440,
      cell: (row) => (
        <div className="flex flex-wrap items-center gap-1">
          <CalendarDays className="size-4 shrink-0 text-orange -mt-1" />
          {dateFormat(row.createdAt ?? '2026-08-13', "dd MMMM, yyyy")}
        </div>
      )
    },
    {
      name: "",
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

  const data = [
    { id: "#2154879630", classroom: "3rd", stream: "", section: "A", subject: null, name: 'Aria Chen', photo: "/public/student.jpg", fatherEmail: 'christina@site.com', motherEmail: 'christina@site.com', fatherPhone: 7986602514, motherPhone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
    { id: "#2154879631", classroom: "4th", stream: "", section: "B", subject: null, name: 'Marcus Webb', photo: "/public/student.jpg", fathEmail: 'christina@site.com', motherEmail: 'christina@site.com', fatherPhone: 7986602514, motherPhone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
    { id: "#2154879632", classroom: "12th", stream: "Non Medical", section: "C", subject: ["Physics", "Chemistry", "Mathematics", "English"], name: 'Marcus Webb', photo: "/public/student.jpg", fatherEmail: 'christina@site.com', motherEmail: 'christina@site.com', fatherPhone: 7986602514, motherPhone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
  ];

  const allStudents = useSelector((state) => state.students.students);

  return (
    <div className="grid gap-4">
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <h2 className='font-bold text-xl capitalize text-navy'>All Students</h2>
          <p className="text-sm text-gray-500">Filter student via id, name, classroom, stream, section, phone & joined at.</p>
        </div>
        <div className="flex items-center lg:justify-end">
          <TextField icon="search" label="" placeholder="Search Student" className="w-full lg:w-2/3" />
        </div>
      </div>
      {/* <div className="mb-4">
            <h2 className='font-bold text-lg'>Search Students</h2>
            <p className="text-sm text-black font-medium">Browse students by ID, Name, Classroom, Stream, Section, Email, & Phone.</p>
            <div className="flex items-center justify-between">
              <div>
                <TextField icon="search" label="Search Teacher via First Name, Last Name, Email, Phone & Teacher Id." placeholder="Search Teacher" />
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
            </div>
          </div> */}
      <div className="grid grid-cols-6 gap-4">
        <div className="table-wrapper">
          <div className="table-inner-wrapper">
            All Students
            <div className="flex flex-wrap items-center gap-2">
              <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={() => handleOpen('student')} />
              <Trash2 className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" disabled />
              <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
            </div>
          </div>
          <Table
            id="students"
            columns={columns}
            data={allStudents}
            needHeader={true}
            expandableRows={false}
            paginationPerPage={10}
          />
        </div>
      </div>
    </div>
  )
}

export default StudentList
