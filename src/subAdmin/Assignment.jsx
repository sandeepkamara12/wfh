import DashboardCard from "../components/assignment/DashboardCard"
import CreateRole from "./CreateRole";
import AssignTeacher from "../components/assignment/AssignTeacher";
import AssignStudent from "../components/assignment/AssignStudent";

const Assignment = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:grid-row-2 gap-4">
                <DashboardCard label="Total Teachers" count="72" id="teacher" />
                <DashboardCard label="Total Students" count="7200" id="student" />
                <DashboardCard label="Total Classrooms" count="12" id="classroom" />
                <DashboardCard label="Total Sections" count="5" id="section" />
                <DashboardCard label="Total Subjects" count="10" id="subject" />
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <div className="min-w-full align-middle grid grid-cols-6 gap-4">
                        <div className="col-span-2">
                            <AssignTeacher />
                        </div>

                        <div className="col-span-2">
                            <AssignStudent />                           
                        </div>

                        <div className="col-span-2">
                            <CreateRole />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment
