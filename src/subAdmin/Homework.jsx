import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import CustomSelect from '../components/ui/CustomSelect';
import CustomDatePicker from '../components/ui/CustomDatePicker';
import { teacherOptions, classOptions, streamOptions, sectionOptions, subjectOptions, homeworkData } from '../const/constant';
import Table from '../components/common/Table';
import { ArrowDownToLine, CalendarDays, Clock, Copy, EllipsisVertical, Eye, Mail, Pencil, Phone, SlidersHorizontal, Trash2, UserRoundPen } from 'lucide-react';
import Switch from '../components/ui/Switch';
import { useIsMobile } from '../hooks/useIsMobile';
import { dateFormat } from '../utils/dateUtils';
import FloatingDropdown from '../components/ui/FloatingDropdown';

const base_url = import.meta.env.VITE_API_BASE_URL;
const Homework = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const dateChangeHandler = (date) => {
        setSelectedDate(date);
    };
    const { isBelow640, isBelow1024, isBelow1280 } = useIsMobile();

    const columnss = [
        {
            name: "Name",
            cell: row => (
                <div className='flex items-center gap-2'>
                    <span className='inline-flex items-center justify-center size-9 rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full ' /></span>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-black leading-4">{row.name}</span>
                        <a className="flex items-center gap-1 text-black text-xs hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                            <Phone className="size-3" />
                            {row.phone}
                        </a>
                    </div>
                </div>
            ),
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Classroom",
            cell: row => (
                <span className="flex items-center gap-1">
                    {row.inchargeOf} {row.section}
                </span>
            ),
            selector: row => row.inchargeOf, sortable: true
        },
        { name: "Stream", selector: row => row.stream },
        { name: "Subject", selector: row => row.subject },
        {
            name: "Notes",
            cell: row => (
                <div className='flex flex-wrap items-center gap-1'>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded overflow-hidden border border-navy bg-navy/10 relative cursor-pointer group hover:border-orange'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                </div>
            ),
            selector: row => row.note
        },
        {
            name: "Created At",
            cell: row => (
                <div className="flex items-center gap-1">
                    <Clock className='size-4' />
                    {row.createdAt}
                </div>
            ),
            selector: row => row.createdAt
        },
        {
            name: '',
            cell: () => (
                <div className="flex flex-wrap items-center justify-end w-full gap-1">
                    <button type="button" className="btn icon_btn">
                        <ArrowDownToLine className="size-5 mx-auto" />
                    </button>
                    <button type="button" className="btn icon_btn">
                        <Trash2 className="size-5 mx-auto" />
                    </button>
                    <button type="button" className="btn icon_btn">
                        <Pencil className="size-5 mx-auto" />
                    </button>
                </div>
            ),
        },
    ];

    const columns = [
        {
            name: "Name",
            cell: row => (
                <div className="flex justify-between w-full">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center size-9 aspect-square rounded-full overflow-hidden bg-navy/10">
                            <img
                                src={`${row.photo}`}
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
        },
        {
            name: "Classroom",
            omit: isBelow640,
            cell: () => (
                <div className="flex flex-wrap flex-col gap-1 text-black">
                    <span
                        className="flex items-center gap-1"
                    >
                        <UserRoundPen className="size-4 shrink-0 " />
                        III B
                    </span>
                    <span>Non Medical | Maths</span>
                </div>
            )
        },
        {
            name: "Notes",
            cell: row => (
                <div className='flex flex-wrap items-center gap-1'>
                    <span className='size-9 rounded-full overflow-hidden relative cursor-pointer group'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded-full overflow-hidden relative cursor-pointer group'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded-full overflow-hidden relative cursor-pointer group'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded-full overflow-hidden relative cursor-pointer group'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span className='size-9 rounded-full overflow-hidden relative cursor-pointer group'>
                        <span className='absolute top-0 bottom-0 left-0 right-0 bg-orange opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out flex items-center justify-center'>
                            <ArrowDownToLine className='size-4 text-white' />
                        </span>
                        <img src={row.photo} alt="" className='h-full max-w-full transition-all duration-300 ease-in-out group-hover:scale-125' />
                    </span>
                    <span class="px-4 font-medium text-layer-foreground">9+ Download</span>
                </div>
            ),
            selector: row => row.note
        },
        {
            name: "Joined At:",
            omit: isBelow1280,
            cell: (row) => (
                <div className="flex flex-wrap items-center gap-1">
                    <CalendarDays className="size-4 shrink-0" />
                    {row.createdAt}
                </div>
            )
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

    return (

        <div className="flex flex-col">
            <div className='bg-white p-4 rounded mb-4'>
                <h2 className='font-bold text-lg'>Filter Homework</h2>
                <p className="text-sm text-black font-medium">Browse homework by teacher, class, stream, section, subject, or date</p>
                <div className='grid grid-cols-6 gap-4 mt-4'>
                    <CustomSelect
                        options={teacherOptions}
                        selectType="teacher"
                        label="Teacher"
                        placeholder="Search Teacher"
                    />
                    <CustomSelect
                        options={classOptions}
                        selectType="classroom"
                        label="Classroom"
                        placeholder="Search Classroom"
                    />
                    <CustomSelect
                        options={streamOptions}
                        selectType="stream"
                        label="Stream"
                        placeholder="Search Stream"
                    />
                    <CustomSelect
                        options={sectionOptions}
                        selectType="section"
                        label="Section"
                        placeholder="Search Section"
                    />
                    <CustomSelect
                        options={subjectOptions}
                        selectType="subject"
                        label="Subject"
                        placeholder="Search Subject"
                    />

                    <CustomDatePicker
                        selectedDate={selectedDate}
                        handler={dateChangeHandler}
                    />
                </div>
            </div>

            {/* <div className='bg-white rounded p-10 text-center'>
                <h2 className='mb-3'>All Homework</h2>
                <p className='text-sm text-black font-medium'>Showing homework across all teachers, classes, and subjects etc.<br /> Use filters to narrow down results.</p>
            </div> */}
            <div className="mt-4 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                <div className="min-w-full inline-block align-middle">
                    <div className="col-span-6 2xl:col-span-3 w-full flex flex-col bg-white rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                        <div className="bg-navy py-3.5 px-4 text-sm font-medium text-white flex justify-between items-center">
                            Homework
                            <div className="flex gap-6">
                                <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0" />
                            </div>
                        </div>
                        {/* <Table
                            id="teachers"
                            columns={columnss}
                            data={homeworkData}
                            needHeader={true}
                            expandableRowsComponent={ExpandedComponent}
                        /> */}
                        <Table
                            id="teachers"
                            columns={columns}
                            data={homeworkData}
                            needHeader={true}
                        // expandableRowsComponent={ExpandedComponent}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homework
