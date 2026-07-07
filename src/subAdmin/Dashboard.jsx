import DashboardCard from '../components/assignment/DashboardCard'
import { dashboardCardData } from '../const/constant'

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 3xl:gap-4">
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
