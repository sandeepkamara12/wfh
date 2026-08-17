import { Eye, Loader, Pencil, Plus, SlidersHorizontal, Trash2 } from 'lucide-react'
import { useIsMobile } from '../../../hooks/useIsMobile';
import { Link } from 'react-router-dom';
import Table from '../../common/Table';

const ViewTeacher = () => {
    const { isBelow640, isBelow768, isBelow1024, isBelow480 } = useIsMobile();
    const columns = [
        {
            name: "Classrooms",
            cell: (row) => (
                <Link to={`${row?.id}`} className="text-sm font-semibold text-navy leading-4 capitalize no-underline hover:text-orange">{row?.class}</Link>
            ),
            selector: (row) => row.class,
        },
        {
            name: "Streams",
            omit: isBelow768,
            cell: (row) => (
                <span>{row?.stream ?? 5}</span>
            ),
            selector: (row) => row.stream,
        },
        {
            name: "Sections",
            omit: isBelow480,
            cell: (row) => (
                <span>{row?.section ?? 80}</span>
            ),
            selector: (row) => row.section,
        },
        {
            name: "Subjects",
            omit: isBelow640,
            cell: (row) => (
                <span>{row?.subjects ?? 8}</span>
            ),
            selector: (row) => row.subjects,
        },
        {
            name: "Incharge",
            omit: isBelow1024,
            minWidth: '200px',
            cell: (row) => (
                <div className="flex flex-wrap flex-col gap-0.5">
                    {row.incharge}
                </div>
            ),
            selector: (row) => row.incharge,
        },
        {
            name: "",
            minWidth: '150px',
            cell: (row) => {
                let loadingId = '';
                return (
                    <div className="flex flex-col gap-3 w-full items-end">
                        <div className="flex flex-wrap items-center justify-end w-full gap-1">
                            <button className="btn icon_btn navy-btn">
                                <Eye className="own-icon" />
                            </button>
                            <button type="button" className="btn icon_btn btn_with_text navy-btn"
                            //   onClick={() => handleDelete(row?.id)}
                            //     disabled={loadingId === row?.id}
                            >
                                {loadingId === row?.id ? (<Loader className="loader own-icon" />) : (<Trash2 className="own-icon" />)}
                            </button>
                            <button
                                type="button"
                                className="btn icon_btn btn_with_text navy-btn"
                            // onClick={() => {
                            //   setIsEdit(row);
                            //   handleOpen('classroom');
                            // }
                            // }
                            // disabled={loadingId === row?.id}
                            >
                                <Pencil className="size-5 mx-auto" />
                            </button>
                        </div>
                    </div>
                );
            },
        },

    ];
    const teacherClassrooms = [
        {
            "id": 1,
            "class": "XI",
            "stream": "Medical",
            "section": "A",
            "subjects": "Physics, Chemistry",
            "incharge": "Yes"
        },
        {
            "id": 2,
            "class": "XI",
            "stream": "Medical",
            "section": "B",
            "subjects": "Physics",
            "incharge": "No"
        },
        {
            "id": 3,
            "class": "XII",
            "stream": "Medical",
            "section": "A",
            "subjects": "Mathematics",
            "incharge": "No"
        },
    ]

    return (
        <div className='text-navy'>
            <div className=' bg-gray-100 p-5 rounded'>
                <div className='grid grid-cols-2 font-medium item-start'>
                    <div className='flex flex-wrap items-center gap-4'>
                        <div className='relative rounded-full bg-amber-400'>
                            <div className="teacher-image size-24 rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/teachers.jpg" alt="teacher" className='w-full object-cover object-center' />
                                <span className='size-3 bg-green rounded-full inline-block absolute top-3 right-1'></span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold text-xl'>Sandeep Kaur</span>
                            <span className='mb-1'>#1247896305</span>
                            <span className=''>sandeepkaur@gmail.com</span>
                            <span className=''>7986680522</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <Pencil className='size-5 shrink-0' />
                    </div>
                </div>
            </div>
            <div className='teacher-bio mt-6 mb-10'>
                <p>
                    <span className="font-medium">Sandeep Kaur</span> is a dedicated and responsible teacher known for her calm and supportive nature. She joined the institution on <span className="font-medium">25 July, 2018</span> and currently serves as the <span className="font-medium">Class Incharge of XI Medical A</span>. She also teaches <span className="font-medium">Physics, Chemistry, and Maths</span> across <span className="font-medium">Classes X, XI, and XII</span>. She is <span className="font-medium">married</span> to <span className="font-medium">Mr. Madan Lal</span> and comes from a close-knit family, with <span className="font-medium">Mr. Sunil Dett</span> as her father and <span className="font-medium">Mrs. Sunita Rai</span> as her mother. Born on <span className="font-medium">25 September 1990</span>, she brings maturity, compassion, and a strong sense of responsibility to her role as an educator.
                </p>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="table-wrapper">
                    <div className="table-inner-wrapper">
                        All Classrooms
                        <div className="flex flex-wrap items-center gap-2">
                            <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
                            <Trash2 className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" disabled />
                        </div>
                    </div>
                    <Table
                        needHeader={true}
                        id="classrooms"
                        columns={columns}
                        data={teacherClassrooms}
                        paginationPerPage={10}
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewTeacher
