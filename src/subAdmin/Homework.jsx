import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import CustomSelect from '../components/ui/CustomSelect';
import CustomDatePicker from '../components/ui/CustomDatePicker';
import { teacherOptions, classOptions, streamOptions, sectionOptions, subjectOptions, homeworkData } from '../const/constant';
import Table from '../components/common/Table';
import { ArrowDownToLine, Clock, Pencil, Phone, Trash2 } from 'lucide-react';

const Homework = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const dateChangeHandler = (date) => {
        setSelectedDate(date);
    };

    const columns = [
        {
            name: "Name",
            cell: row => (
                <div className='flex items-center gap-2'>
                    <span className='inline-flex items-center justify-center size-9 rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full ' /></span>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-navy leading-4">{row.name}</span>
                        <a className="flex items-center gap-1 text-navy text-xs hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
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
            name: "Class / Section",
            cell: row => (
                <div className="flex flex-col gap-1">
                    <div className='flex items-center gap-1.5'>
                        <span className="text-navy">
                            {row.inchargeOf}
                        </span>
                        <span className="text-navy bg-navy/10 size-6 rounded-full flex items-center justify-center pb-0.5">
                            {row.section}
                        </span>
                    </div>
                    <span className="text-xs text-orange flex items-center uppercase font-semibold">
                        Incharge
                    </span>
                </div>
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
                    <button type="button" className="icon-btn">
                        <ArrowDownToLine className="size-5 mx-auto" />
                    </button>
                    <button type="button" className="icon-btn">
                        <Trash2 className="size-5 mx-auto" />
                    </button>
                    <button type="button" className="icon-btn">
                        <Pencil className="size-5 mx-auto" />
                    </button>
                </div>
            ),
        },
    ];

    return (

        <div className="flex flex-col">
            <div className='bg-white p-4 rounded mb-4'>
                <h2 className='font-bold text-lg'>Filter Homework</h2>
                <p className="text-sm text-navy font-medium">Browse homework by teacher, class, stream, section, subject, or date</p>
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

            <div className='bg-white rounded p-10 text-center'>
                <h2 className='mb-3'>All Homework</h2>
                <p className='text-sm text-navy font-medium'>Showing homework across all teachers, classes, and subjects etc.<br /> Use filters to narrow down results.</p>
            </div>
            <div className="mt-4 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                <div className="min-w-full inline-block align-middle">
                    <div className="">
                        <Table columns={columns} data={homeworkData} btnText="" btnIcon="" label="Homework" subLabel="Showing homework filtered by teacher, class, stream, section, subject, and date." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homework
