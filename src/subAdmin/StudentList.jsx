import { BookOpenText, CalendarDays, Copy, EllipsisVertical, Eye, GalleryThumbnails, Loader, Pencil, Phone, Plus, Search, SlidersHorizontal, Trash2, UserRound, UserRoundPen} from "lucide-react";
import Table from "../components/common/Table";
import { useIsMobile } from "../hooks/useIsMobile";
import FloatingDropdown from "../components/ui/FloatingDropdown";
import { useOutletContext } from "react-router-dom";
import TextField from "../components/ui/TextField";
import Switch from "../components/ui/Switch";
import CustomSelect from "../components/ui/CustomSelect";
import { familyOptions, statusOptions } from "../const/constant";
import { useState } from "react";
import { toast } from "react-toastify";

const StudentList = () => {
  const { handleOpen, setIsEdit } = useOutletContext();
  const { isBelow640, isBelow768, isBelow1024, isBelow1280 } = useIsMobile();
  const [loadingId, setLoadingId] = useState(null);

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
      // grow: 2,
      cell: row => (
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center size-9 aspect-square rounded-full overflow-hidden bg-navy/10">
              <img
                src={row.photo}
                alt=""
                className="h-full w-full rounded-full max-w-full aspect-square"
              />
            </span>
            <div className="flex flex-col gap-0">
              <span className="text-sm font-semibold text-black leading-4">
                {row.name}
              </span>
              <span className="inline-flex items-center tracking-wide gap-x-1.5 rounded text-xs text-gray-400">
                {row.id}
                <Copy className="size-3 text-gray-500 mt-0.5" />
              </span>
            </div>
          </div>
        </div>
      ),
      // selector: row => row.name,
      // sortable: true
    },
    {
      name: "Parent Contact",
      minWidth: "200px",
      omit: isBelow1280,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-1">
          <a className="flex items-center gap-1 text-black hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
            F: {row.fatherPhone}
          </a>
          <a className="flex items-center gap-1 text-black hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
            M: {row.motherPhone}
          </a>
        </div>
      ),
      selector: row => row.contact
    },
    {
      name: "Classroom",
      minWidth: "200px",
      omit: isBelow768,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-1 text-black">
          <span
            className="flex items-center gap-1"
          >
            {/* <UserRoundPen className="size-4 shrink-0 " /> */}
            {row.classroom} {row.section}
          </span>
          {/* <span>Non Medical</span> */}
        </div>
      )
    },
    {
      name: "Classroom in Charge",
      minWidth: "200px",
      omit: isBelow640,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-1 text-black">
          <span
            className="flex items-center gap-1"
          >
            <UserRoundPen className="size-4 shrink-0 " />
            {row.classIncharge}
          </span>
          <a className="flex items-center gap-1 text-black hover:no-underline hover:text-orange" href={`tel:${row.classInchargePhone}`}>
            <Phone className="size-4 shrink-0" />
            {row.classInchargePhone}
          </a>
        </div>
      )
    },
    {
      name: "Joined At",
      minWidth: "200px",
      omit: isBelow1024,
      cell: (row) => (
        <div className="flex gap-1">
          <CalendarDays className="size-4 shrink-0" />
          <span
            className="text-black font-medium"
          >
            {row.createdAt}
          </span>
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

  const data = [
    { id: "#2154879630", classroom: "3rd", stream: "", section: "A", subject: null, name: 'Aria Chen', photo: "/public/student.jpg", fatherEmail: 'christina@site.com', motherEmail: 'christina@site.com', fatherPhone: 7986602514, motherPhone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
    { id: "#2154879631", classroom: "4th", stream: "", section: "B", subject: null, name: 'Marcus Webb', photo: "/public/student.jpg", fathEmail: 'christina@site.com', motherEmail: 'christina@site.com', fatherPhone: 7986602514, motherPhone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
    { id: "#2154879632", classroom: "12th", stream: "Non Medical", section: "C", subject: ["Physics", "Chemistry", "Mathematics", "English"], name: 'Marcus Webb', photo: "/public/student.jpg", fatherEmail: 'christina@site.com', motherEmail: 'christina@site.com', fatherPhone: 7986602514, motherPhone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
  ];


  // const ExpandedComponent = ({ data }) => (
  //   <div className="grid grid-cols-2 lg:grid-cols-4 py-4 justify-between gap-3 text-sm font-medium w-full">

  //     <div className="col-span-1 flex flex-col text-black">
  //       <span className="flex items-center gap-1 text-gray-400 font-medium">
  //         <UserRound className="size-4 shrink-0 " />
  //         Father Info:
  //       </span>
  //       <span>{data.fatherName}</span>
  //       <span>{data.fatherEmail}</span>
  //       <span>{data.fatherPhone}</span>
  //     </div>

  //     <div className="col-span-1 flex flex-col text-black">
  //       <span className="flex items-center gap-1 text-gray-400 font-medium">
  //         <UserRound className="size-4 shrink-0 " />
  //         Mother Info:
  //       </span>
  //       <span>{data.motherName}</span>
  //       <span>{data.motherEmail}</span>
  //       <span>{data.motherPhone}</span>
  //     </div>

  //     <div className="col-span-1 lg:hidden">
  //       <span className="flex items-center gap-1 text-gray-400">
  //         <CalendarDays className="size-4 shrink-0" /> Joined At:
  //       </span>
  //       <span
  //         className="text-black font-medium"
  //       >
  //         {data.createdAt}
  //       </span>
  //     </div>

  //     <div className="col-span-1 flex md:hidden flex-wrap flex-col gap-0 text-black">
  //       <span className="flex items-center gap-1 text-gray-400">
  //         <GalleryThumbnails className="size-4 shrink-0 " />
  //         Classroom:
  //       </span>
  //       <span>
  //         {data.classroom} {data.section}
  //       </span>
  //       <span>Non Medical</span>
  //     </div>

  //     <div className="col-span-1 flex sm:hidden flex-wrap flex-col gap-0 text-black ">
  //       <span className="flex items-center gap-1 text-gray-400">
  //         <UserRoundPen className="size-4 shrink-0 " />
  //         Classroom in Charge:
  //       </span>
  //       <span>
  //         {data.classIncharge}
  //       </span>
  //       <span className="text-black" href={`tel:${data.classInchargePhone}`}>
  //         {data.classInchargePhone}
  //       </span>
  //     </div>

  //     <div className="col-span-2 flex flex-col gap-1">
  //       <span className="flex items-center gap-1 text-gray-400">
  //         <BookOpenText className="size-4 shrink-0 " />
  //         Subjects:
  //       </span>
  //       <div className="flex flex-wrap gap-1">
  //         {data.subject?.length > 0 &&
  //           data.subject.map((sub, index) => (
  //             <span key={index} className="inline-block font-medium leading-4 rounded bg-gray-200 px-2 py-1.5">{sub}</span>
  //           ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
        <div className="min-w-full inline-block align-middle">
          <div className="mb-4">
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
          </div>
          <div className="col-span-6 2xl:col-span-3 w-full flex flex-col bg-white rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
            <div className="bg-navy py-3 px-4 text-sm font-medium text-white flex justify-between items-center">
              All Students
              
              {/* <div className="flex gap-2 ">
                <div className="flex gap-2">
                  <TextField id="search_teacher" inputClassName="border-white py-1" placeholder="" />
                  <button className="btn icon_btn_small active "><Search className="size-5 shrink-0" /></button>
                </div>
              </div> */}
              <div className="flex gap-2">
                {/* <Switch type="small" label="Missing Phone" id="phone_existence" />
                <Switch type="small" label="Missing Email" id="email_existence" /> */}
                <Search className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
                <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
                <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={() => handleOpen('student')} />
              </div>
            </div>
            <Table
              id="students"
              columns={columns}
              data={data}
              needHeader={true}
              expandableRows={false}
              // expandableRowExpanded={() => isBelow640}
              // expandableRowsComponent={ExpandedComponent}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentList
