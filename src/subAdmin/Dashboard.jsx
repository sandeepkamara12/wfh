import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";

// Custom Hooks
import { useIsMobile } from "../hooks/useIsMobile";

// Utils
import { dateFormat } from '../utils/dateUtils';
import { getDisplayName } from '../utils/displayUtil';

//Constants
import { dashboardCardData, classesTeach } from "../const/constant";

//Components
import Table from "../components/common/Table";
// import TextField from "../components/ui/TextField";
// import Cards from "../components/subadmin/dashboard/Cards";
import FloatingDropdown from "../components/ui/FloatingDropdown";
import DashboardCard from "../components/subadmin/dashboard/DashboardCard";

//Slices
import { getTeacherThunk } from "../features/subAdmin/teacherSlice";
// import { deleteStreamThunk, getStreamThunk } from "../features/subAdmin/streamSlice";
// import { deleteSectionThunk, getSectionThunk } from "../features/subAdmin/sectionSlice";
import { deleteClassroomThunk, getClassroomThunk } from "../features/subAdmin/classroomSlice";

//Icons
import { CalendarDays, Copy, EllipsisVertical, Eye, Loader, Mail, Pencil, Phone, Plus, SlidersHorizontal, Trash2, UserRound, UserRoundPen } from "lucide-react";
import { groupClasses } from "../utils/classUtility";
import { toast } from "react-toastify";
import TextField from "../components/ui/TextField";

const base_url = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const dispatch = useDispatch();

  const allTeachers = useSelector((state) => state.teachers.teachers);
  // let classrooms = useSelector((state) => state.classroom.classrooms);
  // let sections = useSelector((state) => state.section.sections);
  // let streams = useSelector((state) => state.stream.streams);

  const { handleOpen, setIsEdit } = useOutletContext();
  const { isBelow640, isBelow1024, isBelow1280 } = useIsMobile();

  // const filterSearchInchargeRef = useRef(null);
  const [loadingId, setLoadingId] = useState(null);
  let user = useSelector(state => state.auth.user);

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

  // Get Classrooms, Streams and Sections on component mount
  // useEffect(() => {
  //   const fetchClassrooms = async () => {
  //     try {
  //       await dispatch(getClassroomThunk()).unwrap();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const fetchSections = async () => {
  //     try {
  //       await dispatch(getSectionThunk()).unwrap();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const fetchStreams = async () => {
  //     try {
  //       await dispatch(getStreamThunk()).unwrap();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchClassrooms();
  //   fetchSections();
  //   fetchStreams();
  // }, []);

  // Delete function to delete classroom, stream and section.
  const handleDelete = async (id, deleteType = "") => {
    if (id == "" || deleteType == "") return;
    try {
      setLoadingId(id);
      let result = null;
      // result = deleteType == 'classroom' && await dispatch(deleteClassroomThunk({ id })).unwrap()
      // result = deleteType == 'stream' && await dispatch(deleteStreamThunk({ id })).unwrap()
      // result = deleteType == 'section' && await dispatch(deleteSectionThunk({ id })).unwrap()
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
            <span className="inline-flex items-center justify-center size-9 aspect-square rounded-full overflow-hidden bg-navy/10 shrink-0">
              <img
                src={`${base_url}/${row.profile_pic}`}
                alt=""
                className="h-full w-full rounded-full max-w-full aspect-square"
              />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-navy leading-4 capitalize">
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
      omit: isBelow1024,
      cell: row => (
        <>{row.phone}</>
      ),
    },
    {
      name: "Class In charge",
      omit: isBelow640,
      cell: () => (
        <div className="flex flex-wrap flex-col gap-0.5">
          <span>III B</span>
          <span>Non Medical | Maths</span>
        </div>
      )
    },
    {
      name: "Joined At",
      omit: isBelow1280,
      cell: (row) => (
        <div className="flex flex-wrap items-center gap-1">
          <CalendarDays className="size-4 shrink-0 text-orange -mt-1" />
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
            <button type="button" className="btn icon_btn btn_with_text navy-btn"
              onClick={() => handleDelete(row?.id)}
              disabled={loadingId === row?.id}
            >
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
    <div className="grid gap-4">
      <div className="grid lg:grid-cols-2 gap-4 mb-3">
        <div>
          <h2 className='font-bold text-xl lowercase first-letter:capitalize text-navy'>Welcome to dashboard Sandeep K.</h2>
          <p className="text-sm text-gray-500">You can do everything like search, create, update, delete a teacher or student, pending fees & attendance of teacher & students, homework & notes.</p>
        </div>
        <div className="flex items-center lg:justify-end">
          <TextField icon="search" label="" placeholder="Search..." className="w-full lg:w-2/3" />
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
      {/* <div>
        <h2 className="font-bold text-lg capitalize">Welcome {user?.first_name + ' ' + user?.last_name}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus.</p>
      </div> */}
      {/* <h2 className="font-bold text-lg">Dashboard</h2> */}

      {/* Dashbaord Cards */}
      <div className="dashboard-main-card-wrapper">
        {dashboardCardData.map((item, index) => (
          <DashboardCard
            key={index}
            label={item.label}
            count={item.count}
            link={item.link}
            onPlusClick={handleOpen}
            id={item.id}
            hideAddBtn={item.hideAddBtn}
          />
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4">

        {/* Classroom In charge */}
        <div className="table-wrapper">
          <div className="table-inner-wrapper">
              Classroom In Charge
              <div className="flex flex-wrap items-center gap-2">
                <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={() => handleOpen('teacher')} />
                <Trash2 className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" disabled />
                <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
              </div>
          </div>
          <Table
            needHeader={true}
            id="teachers"
            columns={columns}
            data={allTeachers}
            expandableRows={false}
          // expandableRowsComponent={ExpandedComponent}
          />
        </div>

        {/* Classrooms */}
        {/* <Cards handleOpen={handleOpen} label="classroom" data={classrooms} handleDelete={handleDelete} loadingId={loadingId} setIsEdit={setIsEdit} /> */}

        {/* Streams */}
        {/* <Cards handleOpen={handleOpen} label="stream" data={streams} handleDelete={handleDelete} loadingId={loadingId} setIsEdit={setIsEdit} /> */}

        {/* Sections */}
        {/* <Cards handleOpen={handleOpen} label="section" data={sections} handleDelete={handleDelete} loadingId={loadingId} setIsEdit={setIsEdit} /> */}

      </div>
    </div>
  );
};

export default Dashboard;


// const teachers = useSelector((state) => state.teachers);
//   const [openIncharge, setOpenIncharge] = useState(false);
//   useOutsideClick(filterSearchInchargeRef, () => setOpenIncharge(false));

// import {
//   DndContext,
//   closestCenter
// } from "@dnd-kit/core";

// import {
//   SortableContext,
//   verticalListSortingStrategy,
//   arrayMove
// } from "@dnd-kit/sortable";
// <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//   <SortableContext
//     items={sections.map((s) => s.id)}
//     strategy={verticalListSortingStrategy}
//   >
//     {sections.map((section) => (
//       <SortableItem key={section.id} section={section} />
//     ))}
//   </SortableContext>
// </DndContext>


{/* <div className={`${openIncharge ? "opacity-100" : "opacity-0 hidden"} divide-y divide-dropdown-divider absolute transition-[opacity,margin] duration min-w-60 rounded top-8 -right-3 z-50 bg-white border border-white shadow-lg before:content-[''] before:absolute before:-top-1.5 before:right-4 before:w-0 before:h-0 before:border-l-[6px] before:border-r-[6px] before:border-b-[6px] before:border-l-transparent before:border-r-transparent before:border-b-white`}>
    <div className="p-1.5 space-y-0.5 border-gray-200">
        <span className="block pt-2 pb-1 px-3 text-xs font-medium uppercase text-gray-400">
            Personal info
        </span>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <IdCardLanyard className="size-5 shrink-0" />
            ID
        </Link>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <UserRound className="size-5 shrink-0" />
            Name
        </Link>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <Phone className="size-5 shrink-0" />
            Phone
        </Link>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <Mail className="size-5 shrink-0" />
            Email
        </Link>
    </div>
    <div className="p-1.5 space-y-0.5">
        <span className="block pt-2 pb-1 px-3 text-xs font-medium uppercase text-gray-400">
            Other info
        </span>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <GalleryThumbnails className="size-5 shrink-0" />
            Classroom
        </Link>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <Network className="size-5 shrink-0" />
            Stream
        </Link>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <LayoutGrid className="size-5 shrink-0" />
            Section
        </Link>
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-black font-medium hover:bg-navy hover:text-white no-underline" to="#">
            <BookOpenText className="size-5 shrink-0" />
            Subject
        </Link>
    </div>
</div>
<FunnelPlus className='size-5 shrink-0 text-white' onClick={() => setOpenIncharge((prev) => !prev)} /> */}