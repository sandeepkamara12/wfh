import { Link, useOutletContext } from "react-router-dom";
import { dashboardCardData } from "../const/constant";
import DashboardCard from "../components/subadmin/dashboard/DashboardCard";
import Table from "../components/common/Table";
import { useIsMobile } from "../hooks/useIsMobile";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarDays,
  Copy,
  EllipsisVertical,
  Eye,
  GripVertical,
  Loader,
  Mail,
  Pencil,
  Phone,
  Plus,
  Trash2,
  UserRound,
  UserRoundPen,
} from "lucide-react";
import TextField from "../components/ui/TextField";
import { useEffect, useRef, useState } from "react";
import {
  deleteClassroomThunk,
  getClassroomThunk,
} from "../features/subAdmin/classroomSlice";
import { toast } from "react-toastify";
import {
  deleteSectionThunk,
  getSectionThunk,
} from "../features/subAdmin/sectionSlice";
import {
  deleteStreamThunk,
  getStreamThunk,
} from "../features/subAdmin/streamSlice";
import FloatingDropdown from "../components/ui/FloatingDropdown";

const Dashboard = () => {
  const { handleOpen, setIsEdit } =
    useOutletContext();
  const { isBelow640, isBelow1024, isBelow1280 } = useIsMobile();
  const teachers = useSelector((state) => state.teachers);
  const filterSearchInchargeRef = useRef(null);
  //   const [openIncharge, setOpenIncharge] = useState(false);

  const dispatch = useDispatch();
  //   useOutsideClick(filterSearchInchargeRef, () => setOpenIncharge(false));

  let classrooms = useSelector((state) => state.classroom.classrooms);
  let sections = useSelector((state) => state.section.sections);
  let streams = useSelector((state) => state.stream.streams);

  const [loadingId, setLoadingId] = useState(null);

  // Get Classrooms on component mount
  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        await dispatch(getClassroomThunk()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSections = async () => {
      try {
        await dispatch(getSectionThunk()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchStreams = async () => {
      try {
        await dispatch(getStreamThunk()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    fetchClassrooms();
    fetchSections();
    fetchStreams();
  }, []);

  const handleDeleteClassroom = async (id) => {
    if (id == "") return;
    try {
      setLoadingId(id);
      const result = await dispatch(deleteClassroomThunk({ id })).unwrap();
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

  const handleDeleteSection = async (id) => {
    if (id == "") return;
    try {
      setLoadingId(id);
      const result = await dispatch(deleteSectionThunk({ id })).unwrap();
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

  const handleDeleteStream = async (id) => {
    if (id == "") return;
    try {
      setLoadingId(id);
      const result = await dispatch(deleteStreamThunk({ id })).unwrap();
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
      grow: 2,
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
              <span className="text-sm font-semibold text-navy leading-4">
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
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Contact",
      minWidth: "200px",
      omit: isBelow1024,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-1">
          <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
            <Mail className='size-4' />
            {row.email}
          </a>
          <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
            <Phone className="size-4" />
            {row.phone}
          </a>
        </div>
      ),
      selector: row => row.contact
    },
    {
      name: "Class In charge",
      minWidth: "200px",
      omit: isBelow640,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-1 text-navy">
          <span
            className="flex items-center gap-1"
          >
            <UserRoundPen className="size-4 shrink-0 " />
            {row.inchargeOf} {row.section}
          </span>
          <span>Non Medical Maths</span>
        </div>
      )
    },
    {
      name: 'Teach Other Classes',
      grow: 3,
      omit: isBelow1280,
      cell: row => (
        <div className="flex flex-wrap gap-1 items-start">
          {groupClasses(row.classesTeach).map((c, i) => (
            <span
              key={i}
              className="inline-block text-sm font-medium leading-4 rounded bg-gray-100 px-2 py-1.5"
            >
              {c.class} {c.section}
              {c.stream && ` • ${c.stream}`}
              {" • "}
              {c.subjects.join(", ")}
            </span>
          ))}
        </div>
      ),
    },
    {
      name: "",
      minWidth: "50px",
      maxWidth: "50px",
      cell: () => (
        <div className="flex flex-col gap-3 w-full items-end">
          <div className="relative inline-flex">
            <FloatingDropdown
              trigger={
                <button className="p-2">
                  <EllipsisVertical className="size-5 shrink-0" />
                </button>
              }
            >
              <div className="flex items-center gap-1 p-1">
                <button className="btn icon_btn_small">
                  <Eye className="size-4 mx-auto" />
                </button>
                <button className="btn icon_btn_small">
                  <Trash2 className="size-4 mx-auto" />
                </button>
                <button className="btn icon_btn_small">
                  <Pencil className="size-4 mx-auto" />
                </button>
              </div>
            </FloatingDropdown>
          </div>
        </div>
      ),
    }
  ];

  const groupClasses = (data) => {
    const map = new Map();

    data.forEach((item) => {
      const key = `${item.class}-${item.section}-${item.stream || ""}`;

      if (!map.has(key)) {
        map.set(key, {
          class: item.class,
          section: item.section,
          stream: item.stream,
          subjects: new Set(),
        });
      }

      map.get(key).subjects.add(item.subject);
    });

    return Array.from(map.values()).map((item) => ({
      ...item,
      subjects: Array.from(item.subjects),
    }));
  };

  const ExpandedComponent = ({ data }) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-4 justify-between gap-3 xxs:gap-2 lg:gap-1 text-sm font-medium w-full items-center">

      <div className="col-span-1 flex lg:hidden flex-wrap flex-col gap-0">
        <a className="flex items-center gap-1 text-navy font-medium hover:no-underline hover:text-orange" href={`mailto:${data.email}`}>
          <Mail className='size-4' />
          {data.email}
        </a>
        <a className="flex items-center gap-1 text-navy font-medium hover:no-underline hover:text-orange" href={`tel:${data.phone}`}>
          <Phone className="size-4" />
          {data.phone}
        </a>
      </div>

      <div className="col-span-1 flex flex-wrap flex-col gap-0">
        <span className="flex items-center gap-1 text-gray-400">
          <UserRound className="size-4 shrink-0 " />
          Spouse Name:
        </span>
        <span className="flex items-center gap-1 text-navy font-medium">
          {data.spouseName}
        </span>
      </div>

      <div className="col-span-1 flex flex-wrap flex-col gap-0">
        <span className="flex items-center gap-1 text-gray-400">
          <CalendarDays className="size-4 shrink-0" /> Joined At:
        </span>
        <span
          className="text-navy font-medium"
        >
          {data.createdAt}
        </span>
      </div>


      <div className="col-span-1 flex sm:hidden flex-wrap flex-col gap-0 text-navy ">
        <span className="flex items-center gap-1 text-gray-400">
          <UserRoundPen className="size-4 shrink-0 " />
          In charge:
        </span>
        <span className="font-medium">{data.inchargeOf} {data.section} Non Medical Maths</span>
      </div>

      <div className="col-span-2 lg:col-span-4 flex xl:hidden flex-col gap-1">
        <span className="flex items-center gap-1 text-gray-400">
          <UserRoundPen className="size-4 shrink-0 " />
          Teach Other Classes:
        </span>
        <div className="flex flex-wrap gap-1">
          {groupClasses(data.classesTeach).map((c, i) => (
            <span
              key={i}
              className="inline-block font-medium leading-4 rounded bg-gray-200 px-2 py-1.5"
            >
              {c.class} {c.section}
              {c.stream && ` • ${c.stream}`}
              {" • "}
              {c.subjects.join(", ")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid gap-4">
      <h2 className="font-bold text-lg">Dashboard</h2>

      {/* Dashbaord Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 3xl:gap-4">
        {dashboardCardData.map((item, index) => (
          <DashboardCard
            key={index}
            label={item.label}
            count={item.count}
            link={item.link}
            onPlusClick={handleOpen}
            id={item.id}
          />
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4">
        {/* Classroom In charge */}
        <div className="col-span-6 w-full flex flex-col bg-white rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
          <div className="bg-navy py-2.5 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white flex items-center justify-between">
            Classroom In Charge
            <div className="flex gap-4 items-center relative">
              <TextField
                inputClassName="py-1.5!"
                label=""
                name="search_incharge"
                id="search_incharge"
                ref={filterSearchInchargeRef}
              />
              {/* <div className={`${openIncharge ? "opacity-100" : "opacity-0 hidden"} divide-y divide-dropdown-divider absolute transition-[opacity,margin] duration min-w-60 rounded top-8 -right-3 z-50 bg-white border border-white shadow-lg before:content-[''] before:absolute before:-top-1.5 before:right-4 before:w-0 before:h-0 before:border-l-[6px] before:border-r-[6px] before:border-b-[6px] before:border-l-transparent before:border-r-transparent before:border-b-white`}>
                                <div className="p-1.5 space-y-0.5 border-gray-200">
                                    <span className="block pt-2 pb-1 px-3 text-xs font-medium uppercase text-gray-400">
                                        Personal info
                                    </span>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <IdCardLanyard className="size-5 shrink-0" />
                                        ID
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <UserRound className="size-5 shrink-0" />
                                        Name
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <Phone className="size-5 shrink-0" />
                                        Phone
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <Mail className="size-5 shrink-0" />
                                        Email
                                    </Link>
                                </div>
                                <div className="p-1.5 space-y-0.5">
                                    <span className="block pt-2 pb-1 px-3 text-xs font-medium uppercase text-gray-400">
                                        Other info
                                    </span>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <GalleryThumbnails className="size-5 shrink-0" />
                                        Classroom
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <Network className="size-5 shrink-0" />
                                        Stream
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <LayoutGrid className="size-5 shrink-0" />
                                        Section
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                        <BookOpenText className="size-5 shrink-0" />
                                        Subject
                                    </Link>
                                </div>
                            </div>
                            <FunnelPlus className='size-5 shrink-0 text-white' onClick={() => setOpenIncharge((prev) => !prev)} /> */}
            </div>
          </div>
          <Table
            needHeader={true}
            id="teachers"
            columns={columns}
            data={teachers}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            handleOpen={handleOpen}
          />
        </div>

        {/* Classrooms */}
        <div className="col-span-6 md:col-span-2 2xl:col-span-1 rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
          <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white flex justify-between items-center">
            Classerooms
            <div className="btn icon_btn_small cursor-pointer">
              <Plus onClick={() => handleOpen('classroom')} className="size-5 shrink-0" />
            </div>
          </div>

          <div className="bg-white md:h-86 overflow-y-auto">
            {classrooms?.length > 0 ? (
              classrooms.map((room) => {
                return (
                  <div
                    key={room?.id}
                    className="border-gray-200 flex items-center justify-between p-2 border-b last:border-b-0"
                  >
                    <div className="flex items-center gap-2 w-3/5">
                      <GripVertical className="size-5 shrink-0 opacity-50 cursor-grab" />
                      <Link
                        to="#"
                        className="inline-block text-sm font-medium no-underline text-navy ml-2"
                      >
                        {room?.name}
                      </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-1">
                      <button
                        type="button"
                        className="btn icon_btn"
                        onClick={() => handleDeleteClassroom(room?.id)}
                        disabled={loadingId === room?.id}
                      >
                        {loadingId === room?.id ? (
                          <Loader className="size-5 shrink-0 animate-spin [animation-duration:2s]" />
                        ) : (
                          <Trash2 className="size-5 mx-auto" />
                        )}
                      </button>

                      <button
                        type="button"
                        className="btn icon_btn"
                        onClick={() => {
                          setIsEdit(room);
                          handleOpen("classroom");
                        }}
                        disabled={loadingId === room?.id}
                      >
                        <Pencil className="size-5 mx-auto" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-4 flex items-center justify-center h-full text-gray-400 text-sm capitalize font-medium leading-4">
                No classroom found
              </div>
            )}
          </div>
        </div>

        {/* Streams */}
        <div className="col-span-6 md:col-span-2 2xl:col-span-1 rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
          <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white flex justify-between items-center">
            Streams
            <div className="btn icon_btn_small cursor-pointer">
              <Plus onClick={() => handleOpen('stream')} className="size-5 shrink-0" />
            </div>
          </div>
          <div className="bg-white md:h-86 overflow-y-auto">
            {streams?.length > 0 ? (
              streams.map((stream) => {
                return (
                  <div
                    key={stream?.id}
                    className={
                      "border-gray-200 flex items-center justify-between p-2 border-b last:border-b-0"
                    }
                  >
                    <div className="flex items-center gap-2 w-3/5">
                      <GripVertical className="size-5 shrink-0 opacity-50 cursor-grab" />
                      <Link
                        to="#"
                        className="inline-block text-sm font-medium no-underline text-navy"
                      >
                        {stream?.name}
                      </Link>
                    </div>
                    <div className="inline-flex flex-wrap items-center justify-end gap-1">
                      <button
                        type="button"
                        className="btn icon_btn"
                        onClick={() => handleDeleteStream(stream?.id)}
                        disabled={loadingId === stream?.id}
                      >
                        {loadingId === stream?.id ? (
                          <Loader className="size-5 shrink-0 animate-spin [animation-duration:2s]" />
                        ) : (
                          <Trash2 className="size-5 mx-auto" />
                        )}
                      </button>
                      <button
                        type="button"
                        className="btn icon_btn"
                        onClick={() => {
                          setIsEdit(stream);
                          handleOpen("stream");
                        }}
                        disabled={loadingId === stream?.id}
                      >
                        <Pencil className="size-5 mx-auto" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-4 flex items-center justify-center h-full text-gray-400 text-sm capitalize font-medium leading-4">
                No stream found
              </div>
            )}
          </div>
        </div>

        {/* Sections */}
        <div className="col-span-6 md:col-span-2 2xl:col-span-1 rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
          <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white flex justify-between items-center">
            Sections
            <div className="btn icon_btn_small cursor-pointer">
              <Plus onClick={() => handleOpen('section')} className="size-5 shrink-0" />
            </div>
          </div>
          <div className="bg-white md:h-86 overflow-y-auto">
            {sections?.length > 0 ? (
              sections.map((section) => {
                return (
                  <div
                    key={section?.id}
                    className={
                      "border-gray-200 flex items-center justify-between p-2 border-b last:border-b-0"
                    }
                  >
                    <div className="flex items-center gap-2 w-3/5">
                      <GripVertical className="size-5 shrink-0 opacity-50 cursor-grab" />
                      <Link
                        to="#"
                        className="inline-block text-sm font-medium no-underline text-navy"
                      >
                        {section?.name}
                      </Link>
                    </div>
                    <div className="inline-flex flex-wrap items-center justify-end gap-1">
                      <button
                        type="button"
                        className="btn icon_btn"
                        onClick={() => handleDeleteSection(section?.id)}
                        disabled={loadingId === section?.id}
                      >
                        {loadingId === section?.id ? (
                          <Loader className="size-5 shrink-0 animate-spin [animation-duration:2s]" />
                        ) : (
                          <Trash2 className="size-5 mx-auto" />
                        )}
                      </button>
                      <button
                        type="button"
                        className="btn icon_btn"
                        onClick={() => {
                          setIsEdit(section);
                          handleOpen("section");
                        }}
                        disabled={loadingId === section?.id}
                      >
                        <Pencil className="size-5 mx-auto" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-4 flex items-center justify-center h-full text-gray-400 text-sm capitalize font-medium leading-4">
                No section found
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;

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