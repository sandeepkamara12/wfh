import { BookOpenText, GalleryThumbnails, GraduationCap, LayoutGrid, UserRoundPen } from "lucide-react";

const Card = ({ label, count, id }) => {
    let icon = id === 'teacher' ?
                <UserRoundPen /> :
                id === 'student' ?
                <GraduationCap /> :
                id === 'ward' ?
                <GalleryThumbnails /> :
                id === 'section' ?
                <LayoutGrid /> :
                id === 'subject' ?
                <BookOpenText /> : '';
    return (
        <div className="flex flex-wrap items-center justify-between bg-white border border-white shadow-sm hover:shadow-lg rounded p-4 md:p-5 transition-all duration-300 ease-in-out">
            <div className="flex flex-wrap items-center justify-between gap-3">
                {icon}
                <p className="text-xs uppercase text-navy font-semibold">{label}</p>
            </div>
            <h3 className="text-xl sm:text-lg font-bold">{count}</h3>
        </div>
    )
}

export default Card
