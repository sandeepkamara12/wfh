import { Outlet } from "react-router-dom";
import SidebarLayout from "./layout/SidebarLayout";

const Teacher = () => {
    return (
        <SidebarLayout>
            <Outlet />
        </SidebarLayout>
    )
}

export default Teacher