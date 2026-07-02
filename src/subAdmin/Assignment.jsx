import DashboardCard from "../components/assignment/DashboardCard"
import AssignTeacher from "../components/assignment/AssignTeacher";
import AssignStudent from "../components/assignment/AssignStudent";
import CreateRole from "../components/assignment/CreateRole";
import { dashboardCardData } from "../const/constant";

const Assignment = () => {
    return (
        <>
            {/* <div className="grid sm:grid-cols-2 lg:grid-cols-6 lg:grid-row-2 gap-4">
                {
                    dashboardCardData.map((item, index) => (
                        <DashboardCard key={index}
                            label={item.label}
                            count={item.count}
                            id={item.id} />
                    ))
                }
            </div> */}

            <div className="flex flex-col">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <div className="min-w-full align-middle grid grid-cols-4 gap-4">
                        {/* <div className="col-span-2">
                            <CreateRole />
                        </div> */}

                        <div className="col-span-4">
                            <AssignTeacher />
                        </div>

                        {/* <div className="col-span-2">
                            <AssignStudent />
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment
