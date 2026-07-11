import { useOutletContext } from 'react-router-dom';
import { dashboardCardData, romanNumbers, sectionData, streamData } from '../const/constant'
import DashboardCard from '../components/subadmin/dashboard/DashboardCard';
import Table from '../components/common/Table';
import { useIsMobile } from '../hooks/useIsMobile';
import { useSelector } from 'react-redux';
import { Clock, Copy, Eye, Mail, Pencil, Phone, Plus, Trash2, UserRound } from 'lucide-react';
const Dashboard = () => {
    const { handleOpen } = useOutletContext();
    const { isBelow1440, isBelow640, isBelow1024, isAbove1024 } = useIsMobile();
    const teachers = useSelector((state) => state.teachers);

    const columns = [
        {
            name: "Name",
            grow: 2,
            cell: row => (
                <div className='flex items-start flex-col gap-2'>
                    <div className='flex items-center gap-3'>
                        <span className='inline-flex items-center justify-center size-12 aspect-square rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full aspect-square' /></span>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-navy leading-4">{row.name}</span>
                            <span className="inline-flex items-center tracking-wide gap-x-1.5 rounded text-xs text-gray-400">
                                {row.id}
                                <Copy className='size-3 text-gray-500 mt-0.5' />
                            </span>
                    <span className="inline-block text-xs sm:hidden">{row.inchargeOf} {row.stream} {row.section} Maths</span>
                        </div>
                    </div>
                </div>
            ),
            selector: row => row.name,
        },
        {
            name: "Contact",
            grow: 2,
            cell: row => (
                <div className="flex flex-wrap flex-col gap-1">

                    <a className="flex items-center gap-1 text-sm text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
                        <Mail className='size-4 shrink-0 ' />
                        {row.email}
                    </a>
                    <a className="flex items-center gap-1 text-sm text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                        <Phone className="size-4 shrink-0" />
                        {row.phone}
                    </a>
                </div>
            ),
            selector: row => row.contact
        },
        {
            name: "In Charge",
            omit: isBelow640,
            // grow: 2,
            cell: row => (
                <span className="inline-block bg-navy/10 text-sm rounded py-1 px-2">{row.inchargeOf} {row.stream} {row.section} Maths</span>
            ),
            selector: row => row.contact
        },

        {
            name: '',
            minWidth: "200px",
             omit: isBelow1024,
            cell: row => (
                <div className="w-full flex flex-wrap flex-col items-end text-sm">
                    <span>Joined At: </span>
                    {/* <span className=''>{row.createdAt}</span> */}
                    <span className=''>{'25 Dec 2026 12:25 PM'}</span>
                </div>
            ),
        },
    ];

    return (
        <div className="grid gap-4">
            {/* Dashbaord Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 3xl:gap-4">
                {
                    dashboardCardData.map((item, index) => (
                        <DashboardCard key={index}
                            label={item.label}
                            count={item.count}
                            link={item.link}
                            onPlusClick={handleOpen}
                            id={item.id} />
                    ))
                }
            </div>
            <div className="grid grid-cols-6 gap-4">

                {/* Classrooms */}
                <div className="col-span-6 rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                    <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white">Classerooms</div>
                    <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 bg-white">
                        {romanNumbers.map((roman, index) => {
                            const isLastColMobile = (index + 1) % 3 === 0;
                            const isLastColSm = (index + 1) % 6 === 0;
                            const isLastColLg = (index + 1) % 12 === 0;

                            return (
                                <div
                                    key={roman}
                                    className={`col-span-1 text-center border-gray-200 
                                        ${!isLastColMobile ? "border-e" : ""}
                                        ${!isLastColSm ? "sm:border-e" : "sm:border-e-0"}
                                        ${!isLastColLg ? "lg:border-e" : "lg:border-e-0"}

                                        ${index < romanNumbers.length - 3 ? "border-b" : ""}
                                        ${index < romanNumbers.length - 6 ? "sm:border-b" : "sm:border-b-0"}
                                        lg:border-b-0
                                    `}
                                >
                                    <a
                                        href="#"
                                        className="inline-block py-3 px-4 text-sm font-medium no-underline text-navy"
                                    >
                                        {roman}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Streams */}
                <div className="col-span-6 2xl:col-span-3 rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                    <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white">Streams</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 bg-white">
                        {streamData.map((stream, index) => {
                            const isLastColMobile = (index + 1) % 2 === 0;
                            const isLastColSm = (index + 1) % 4 === 0;
                            return (
                                <div
                                    key={stream.id}
                                    className={`
                                        col-span-1
                                        text-center
                                        border-gray-200

                                        ${!isLastColMobile ? "border-e" : ""}
                                        ${!isLastColSm ? "sm:border-e" : "sm:border-e-0"}
                                        
                                        ${index < streamData.length - 2 ? "border-b" : ""}
                                        ${index < streamData.length - 4 ? "sm:border-b" : "sm:border-b-0"}
                                        `}
                                >
                                    <a
                                        href="#"
                                        className="inline-block py-3 px-4 text-sm font-medium no-underline text-navy"
                                    >
                                        {stream.stream}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Sections */}
                <div className="col-span-6 2xl:col-span-3 rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                    <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white">Sections</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-white">
                        {sectionData.map((section, index) => {
                            const isLastColMobile = (index + 1) % 2 === 0;
                            const isLastColSm = (index + 1) % 3 === 0;
                            const isLastColLg = (index + 1) % 6 === 0;

                            return (
                                <div
                                    key={section.id}
                                    className={`
                                        col-span-1
                                        text-center
                                        border-gray-200

                                        ${!isLastColMobile ? "border-e" : ""}
                                        ${!isLastColSm ? "sm:border-e" : "sm:border-e-0"}
                                        ${!isLastColLg ? "lg:border-e" : "lg:border-e-0"}

                                        ${index < sectionData.length - 2 ? "border-b" : ""}
                                        ${index < sectionData.length - 3 ? "sm:border-b" : "sm:border-b-0"}
                                        ${index < sectionData.length - 6 ? "lg:border-b" : "lg:border-b-0"}
                                    `}
                                >
                                    <a
                                        href="#"
                                        className="inline-block py-3 px-4 text-sm font-medium no-underline text-navy"
                                    >
                                        {section.section}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Classroom In charge */}
                <div className="col-span-6 w-full flex flex-col bg-white rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                    <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white">Classroom In Charge</div>
                    <Table id="teachers" needHeader={false} columns={columns} data={teachers} handleOpen={handleOpen} btnText="Add Teacher" btnIcon={<Plus className="w-5 h-5 mx-auto" />} label="Teachers" subLabel="Add, edit, delete and search a teacher." />
                </div>
            </div>

        </div>
    )
}

export default Dashboard
