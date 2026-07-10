import { useOutletContext } from 'react-router-dom';
import { dashboardCardData } from '../const/constant'
import DashboardCard from '../components/subadmin/dashboard/DashboardCard';
const Dashboard = () => {
    const { handleOpen } = useOutletContext();
    return (
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
    )
}

export default Dashboard
