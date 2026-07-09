import { Outlet } from 'react-router-dom';
import SidebarLayout from './layout/SidebarLayout';
import { useState } from 'react';
import AddTeacher from './components/teacher/AddTeacher';
import Drawer from './components/common/Drawer';

const SubAdmin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    const [open, setOpen] = useState(null);
    const handleOpen = (type) => {
        console.log(type, 'state is')
        setOpen(type);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <SidebarLayout isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <Drawer handleClose={handleClose} open={open}>
                {
                    open === 'teachers' ? <AddTeacher role="teacher" open={open} />
                        : open === 'students' ? <AddTeacher role="student" />
                            : null
                }

            </Drawer>
            <Outlet context={{ isSidebarOpen, toggleSidebar, handleClose, handleOpen, open, setOpen }} />
        </SidebarLayout>
    )
}

export default SubAdmin
