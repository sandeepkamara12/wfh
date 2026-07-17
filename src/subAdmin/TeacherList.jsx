import { CalendarDays, Copy, EllipsisVertical, Eye, Mail, Pencil, Phone, Plus, Search, Trash2, UserRound, UserRoundPen } from "lucide-react";
import Table from "../components/common/Table";
import { useIsMobile } from "../hooks/useIsMobile";
import { useDispatch } from "react-redux";
import { addTeacher } from "../features/teachers/teachersSlice";
import { useSelector } from "react-redux";
import TextField from "../components/ui/TextField";
import { useOutletContext } from "react-router-dom";
import FloatingDropdown from "../components/ui/FloatingDropdown";
import { useEffect } from "react";
import { getTeacherThunk } from "../features/subAdmin/teacherSlice";
import { format } from "date-fns";

const TeacherList = () => {
    const base_url = import.meta.env.VITE_API_BASE_URL;

    const classesTeach = [
      { class: "3rd", section: "A", stream: "", subject: "Maths" },
      { class: "3rd", section: "A", stream: "", subject: "Science" },

      { class: "12th", section: "C", stream: "Medical", subject: "Biology" },
      { class: "12th", section: "C", stream: "Medical", subject: "English" },

      {
        class: "12th",
        section: "C",
        stream: "Non Medical",
        subject: "Physics",
      },
      { class: "12th", section: "C", stream: "Non Medical", subject: "Maths" },
    ];

    const { isBelow768, isBelow1280 } = useIsMobile();
    const { handleOpen } = useOutletContext();
    const allTeachers = useSelector((state) => state.teachers.teachers);
    const dispatch = useDispatch();
    
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

    const handleAdd = () => {
        dispatch(
            addTeacher({
                id: Date.now(),
                name: "John Doe",
                subject: "Math"
            })
        );
    };

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

    const getDisplayName = (data) => {
        if (data?.married) {
            if (!data?.spouse_name) return "";
            return `${data.gender === "male" ? "Mrs." : "Mr."} ${data.spouse_name}`;
        }

        const father = data?.father_name ? `Mr. ${data.father_name}` : "";
        const mother = data?.mother_name ? `Mrs. ${data.mother_name}` : "";

        if (father && mother) return `${father}, ${mother}`;
        return father || mother || "";
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
                            <span className="text-sm font-semibold text-navy leading-4">
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
            minWidth: "200px",
            omit: isBelow1280,
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
        },
        {
            name: "Class In charge",
            minWidth: "200px",
            omit: isBelow1280,
            cell: row => (
                <div className="flex flex-wrap flex-col gap-1 text-navy">
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
            omit: isBelow768,
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
                                <button className="btn icon_btn">
                                    <Eye className="size-4 mx-auto" />
                                </button>
                                <button className="btn icon_btn">
                                    <Trash2 className="size-4 mx-auto" />
                                </button>
                                <button className="btn icon_btn">
                                    <Pencil className="size-4 mx-auto" />
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

                <div className="col-span-1 flex xl:hidden flex-wrap flex-col gap-0">
                    <a className="flex items-center gap-1 text-navy font-medium hover:no-underline hover:text-orange" href={`mailto:${data.email}`}>
                        <Mail className='size-4' />
                        {data.email}
                    </a>
                    <a className="flex items-center gap-1 text-navy font-medium hover:no-underline hover:text-orange" href={`tel:${data.phone}`}>
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
                            <span className="flex items-center gap-1 text-navy font-medium">
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
                        className="text-navy font-medium"
                    >
                        {format(data.created_at, "dd-MMMM-yyyy")}
                    </span>
                </div>


                <div className="col-span-1 flex xl:hidden flex-wrap flex-col gap-0 text-navy ">
                    <span className="flex items-center gap-1 text-gray-400">
                        <UserRoundPen className="size-4 shrink-0 " />
                        In charge:
                    </span>
                    {/* <span className="font-medium">{data.inchargeOf} {data.section} Non Medical Maths</span> */}
                </div>

                <div className="col-span-2 flex md:hidden flex-col gap-1">
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
                        <p className="text-sm text-navy font-medium">Browse teachers by ID, Name, Classroom, Stream, Section, Subject, Email, and Phone.</p>
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
