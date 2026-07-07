import { iconMap } from "../../const/iconMap";

const DashboardCard = ({ label, count, id }) => {
    const Icon = iconMap[id] || null;
    const PlusIcon = iconMap['plus'];
    return (
        <div className="flex flex-wrap items-end justify-between bg-white border border-white shadow-sm hover:shadow-lg rounded p-4 3xl:p-5 transition-all duration-300 ease-in-out relative">
            <span className="cursor-pointer absolute -right-px -top-px bg-navy text-white pb-2.5 ps-2.5 pe-1 pt-1 rounded-bl-full flex flex-wrap items-center justify-center custom_transition hover:bg-orange">
                <PlusIcon className="size-4" />
            </span>
            <div className="flex flex-col  flex-wrap justify-between gap-3">
                {Icon && <Icon />}
                <p className="text-xs uppercase text-navy font-semibold">{label}</p>
            </div>
            <h3 className="text-xl sm:text-lg font-bold text-orange leading-5">{count}</h3>
        </div>
    )
}

export default DashboardCard
