import { Link } from "react-router-dom";
import { iconMap } from "../../../const/iconMap";

const DashboardCard = ({ label, count, id, link, onPlusClick }) => {
    const Icon = iconMap[id] || null;
    const PlusIcon = iconMap['plus'];

    return (
        <div className="flex flex-wrap items-end justify-between bg-white border border-white shadow-sm hover:shadow-lg rounded p-4 3xl:p-5 transition-all duration-300 ease-in-out relative overflow-hidden">
            <Link to={link} className="absolute inset-x-0 inset-y-0" />
            <div onClick={()=>onPlusClick(id.toLowerCase())}
                className="plus-animate cursor-pointer absolute -right-px -top-px bg-navy text-white pb-2.5 ps-2.5 pe-1 pt-1 rounded-bl-full flex flex-wrap items-center justify-center custom_transition hover:bg-orange">
                <PlusIcon className="size-4 shrink-0" />
            </div>
            <div className="flex flex-col flex-wrap justify-between gap-2">
                {Icon && <Icon className="size-6 shrink-0 text-navy" />}
                <p className="text-sm capitalize font-medium text-black leading-4 wrap-break-words whitespace-pre-line">{label}</p>
            </div>
            <h3 className="text-lg font-bold text-orange leading-5">{count}</h3>
        </div>
    )
}

export default DashboardCard
