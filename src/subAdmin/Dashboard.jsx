import { useOutletContext } from 'react-router-dom';
import { dashboardCardData, romanNumbers } from '../const/constant'
import DashboardCard from '../components/subadmin/dashboard/DashboardCard';
import Table from '../components/common/Table';
import { useIsMobile } from '../hooks/useIsMobile';
import { useSelector } from 'react-redux';
import { Clock, Copy, Eye, Mail, Pencil, Phone, Plus, Trash2, UserRound } from 'lucide-react';
const Dashboard = () => {
    const { handleOpen } = useOutletContext();
    const { isBelow1440, isBelow1024, isAbove1024 } = useIsMobile();
    const teachers = useSelector((state) => state.teachers);

    const columns = [
        {
            name: "Name",
            grow: 2,
            cell: row => (
                <div className='flex items-start flex-col gap-2'>
                    <div className='flex items-center gap-3'>
                        <span className='inline-flex items-center justify-center size-12 rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full ' /></span>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-navy leading-4">{row.name}</span>
                            <span className="inline-flex items-center tracking-wide gap-x-1.5 rounded text-xs text-gray-400">
                                {row.id}
                                <Copy className='size-3 text-gray-500 mt-0.5' />
                            </span>

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
            name: '',
            minWidth: "160px",
            cell: row => (
                <div className="w-full flex flex-wrap flex-col items-end text-sm">
                    <span>Joined At: </span>
                    <span className=''>{row.createdAt}</span>
                </div>
            ),
        },
    ];
    return (
        <div className="grid gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 3xl:gap-4">
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
                <div className="col-span-1 w-full flex flex-col bg-white rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                    <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white">Classerooms</div>
                    {romanNumbers.map((roman, index) => (
                        <a
                            key={roman}
                            href="#"
                            className=" py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-navy -mt-px"
                        >
                            {roman}
                        </a>
                    ))}
                </div>
                <div className="col-span-3 w-full flex flex-col bg-white rounded border border-white shadow-sm hover:shadow-lg custom_transition overflow-hidden">
                    <div className="bg-navy py-3 px-4 text-sm font-medium border-b last:border-none border-gray-200 no-underline text-white">Classroom In Charge</div>
                    <Table id="teachers" needHeader={false} columns={columns} data={teachers} handleOpen={handleOpen} btnText="Add Teacher" btnIcon={<Plus className="w-5 h-5 mx-auto" />} label="Teachers" subLabel="Add, edit, delete and search a teacher." />
                </div>
            </div>

        </div>
    )
}

export default Dashboard
