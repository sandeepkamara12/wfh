import { Outlet } from 'react-router-dom';
import SidebarLayout from './layout/SidebarLayout';
import { useState } from 'react';

const SubAdmin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    return (
         <SidebarLayout isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <Outlet context={{ isSidebarOpen, toggleSidebar }} />
        </SidebarLayout>
    )
}

export default SubAdmin
