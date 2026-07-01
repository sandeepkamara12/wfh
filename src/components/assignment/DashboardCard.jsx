import { BookOpenText, GalleryThumbnails, GraduationCap, LayoutGrid, Plus, UserRoundPen } from "lucide-react";

const DashboardCard = ({ label, count, id }) => {
    let icon = id === 'teacher' ?
                <UserRoundPen /> :
                id === 'student' ?
                <GraduationCap /> :
                id === 'classroom' ?
                <GalleryThumbnails /> :
                id === 'section' ?
                <LayoutGrid /> :
                id === 'subject' ?
                <BookOpenText /> : '';
    return (
        <div className="flex flex-wrap items-center justify-between bg-white border border-white shadow-sm hover:shadow-lg rounded p-4 md:p-5 transition-all duration-300 ease-in-out relative">
            <span className="absolute -right-[1px] -top-[1px] bg-navy text-white pb-2.5 ps-2.5 pe-1 pt-1 rounded-bl-full flex flex-wrap items-center justify-center"><Plus className="size-4" /></span>
            <div className="flex flex-wrap items-center justify-between gap-3">
                {icon}
                <p className="text-xs uppercase text-navy font-semibold">{label}</p>
            </div>
            <h3 className="text-xl sm:text-lg font-bold text-orange">{count}</h3>
        </div>
    )
}

export default DashboardCard
