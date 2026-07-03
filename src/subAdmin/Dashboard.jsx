import DashboardCard from '../components/assignment/DashboardCard'
import { dashboardCardData } from '../const/constant'

const Dashboard = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 lg:grid-row-2 gap-4">
                {
                    dashboardCardData.map((item, index) => (
                        <DashboardCard key={index}
                            label={item.label}
                            count={item.count}
                            id={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard
