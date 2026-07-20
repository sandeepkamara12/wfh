import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Custom Hooks
import { useIsMobile } from "../hooks/useIsMobile";

// Utils
import { groupClasses } from "../utils/classUtility";
import { getDisplayName } from "../utils/displayUtil";

import { classesTeach } from "../const/constant";

//Slices
import { addTeacher } from "../features/teachers/teachersSlice";
import { getTeacherThunk } from "../features/subAdmin/teacherSlice";

//Components
import Table from "../components/common/Table";
import TextField from "../components/ui/TextField";
import FloatingDropdown from "../components/ui/FloatingDropdown";

//Icons
import { CalendarDays, Copy, EllipsisVertical, Eye, Mail, Pencil, Phone, Plus, Search, Trash2, UserRound, UserRoundPen } from "lucide-react";


const base_url = import.meta.env.VITE_API_BASE_URL;

const TeacherList = () => {

    
    const { handleOpen } = useOutletContext();

    const dispatch = useDispatch();
    const allTeachers = useSelector((state) => state.teachers.teachers);

    const {isBelow640, isBelow1024, isBelow1280 } = useIsMobile();

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
                        <div className="flex flex-col gap-0">
                            <span className="text-sm font-semibold text-black leading-4">
                                {row.first_name}   {row.last_name}
                            </span>
                            <span className="inline-flex items-center tracking-wide gap-x-1.5 rounded text-xs text-gray-400">
                                {row.id}
                                <Copy className="size-3 text-gray-500 mt-0.5" />
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
                <div className="flex flex-wrap flex-col gap-1">
                    <a className="flex items-center gap-1 text-black hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
                        <Mail className='size-4' />
                        {row.email}
                    </a>
                    <a className="flex items-center gap-1 text-black hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                        <Phone className="size-4" />
                        {row.phone}
                    </a>
                </div>
            ),
        },
        {
            name: "Class In charge",
            minWidth: "200px",
            omit: isBelow640,
            cell: row => (
                <div className="flex flex-wrap flex-col gap-1 text-black">
                    <span
                        className="flex items-center gap-1"
                    >
                        <UserRoundPen className="size-4 shrink-0 " />
                        III A
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
                    {groupClasses(classesTeach).map((c, i) => (
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
                    </div>
                </div>
            ),
        }
    ];

    const ExpandedComponent = ({ data }) => {
        const displayName = getDisplayName(data); // 👈 define here
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 py-4 justify-between gap-3 text-sm font-medium w-full items-center">

                <div className="col-span-2 sm:col-span-1 flex lg:hidden flex-wrap flex-col gap-0">
                    <a className="flex items-center gap-1 text-black font-medium hover:no-underline hover:text-orange" href={`mailto:${data.email}`}>
                        <Mail className='size-4' />
                        {data.email}
                    </a>
                    <a className="flex items-center gap-1 text-black font-medium hover:no-underline hover:text-orange" href={`tel:${data.phone}`}>
                        <Phone className="size-4" />
                        {data.phone}
                    </a>
                </div>

                {
                    displayName &&
                    <div className="col-span-1 flex flex-wrap flex-col gap-0">
                        <>
                            <span className="flex items-center gap-1 text-gray-400">
                                <UserRound className="size-4 shrink-0 " />
                                {
                                    data?.married ? 'Spouse Nmae:' : 'Parent Name:'
                                }
                            </span>
                            <span className="flex items-center gap-1 text-black font-medium">
                                {displayName}
                            </span>
                        </>
                    </div>
                }

                <div className="col-span-1 flex flex-wrap flex-col gap-0">
                    <span className="flex items-center gap-1 text-gray-400">
                        <CalendarDays className="size-4 shrink-0" /> Joined At:
                    </span>
                    <span
                        className="text-black font-medium"
                    >
                        {format(data.created_at, "dd-MMMM-yyyy")}
                    </span>
                </div>


                <div className="col-span-1 flex sm:hidden flex-wrap flex-col gap-0 text-black ">
                    <span className="flex items-center gap-1 text-gray-400">
                        <UserRoundPen className="size-4 shrink-0 " />
                       Class in Charge:
                    </span>
                    <span>III A</span>
                    <span className="font-medium">{data.inchargeOf} {data.section} Non Medical Maths</span>
                </div>

                <div className="col-span-2 lg:col-span-4 flex xl:hidden flex-col gap-1">
                    <span className="flex items-center gap-1 text-gray-400">
                        <UserRoundPen className="size-4 shrink-0 " />
                        Teach Other Classes:
                    </span>
                    <div className="flex flex-wrap gap-1">
                        {groupClasses(classesTeach).map((c, i) => (
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
        )
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                <div className="min-w-full inline-block align-middle">
                    <div className="mb-4">
                        <h2 className='font-bold text-lg' onClick={handleAdd}>Search Teachers</h2>
                        <p className="text-sm text-black font-medium">Browse teachers by ID, Name, Classroom, Stream, Section, Subject, Email, and Phone.</p>
                    </div>
                    <div className="col-span-6 2xl:col-span-3 w-full flex flex-col bg-white rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                        <div className="bg-navy py-3 px-4 text-sm font-medium text-white flex justify-between items-center">
                            All Teachers
                            <div className="flex gap-2 ">
                                <div className="flex gap-2">
                                    <TextField id="search_teacher" inputClassName="border-white py-1" placeholder="" />
                                    <button className="btn icon_btn_small active "><Search className="size-5 shrink-0" /></button>
                                </div>
                                <button className="btn icon_btn_small active">
                                    <Plus onClick={() => handleOpen('teacher')} className="size-5 shrink-0" />
                                </button>
                            </div>
                        </div>
                        <Table
                            id="teachers"
                            columns={columns}
                            data={allTeachers}
                            needHeader={true}
                            expandableRowsComponent={ExpandedComponent}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherList
