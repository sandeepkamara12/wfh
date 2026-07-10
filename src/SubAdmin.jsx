import { Outlet } from 'react-router-dom';
import SidebarLayout from './layout/SidebarLayout';
import { useState } from 'react';
import Drawer from './components/common/Drawer';
import AddClassroom from './components/subadmin/classroom/AddClassroom';
import AddSection from './components/subadmin/section/AddSection';
import AddTeacher from './components/subadmin/teacher/AddTeacher';

const SubAdmin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    const [open, setOpen] = useState(null);
    const handleOpen = (type) => {
        setOpen(type);
    };

    const handleClose = () => {
        setOpen(null);
    };

console.log(open, 'open');

    return (
        <SidebarLayout isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <Drawer handleClose={handleClose} open={open}>
                {
                    open === 'teachers' ? <AddTeacher role="teacher" open={open} handleClose={handleClose} />
                        : open === 'students' ? <AddTeacher role="student" open={open} handleClose={handleClose} />
                        : open === 'classrooms' ? <AddClassroom role="classrooms" open={open} handleClose={handleClose} />
                        // : open === 'streams' ? <AddStream role="streams" open={open} handleClose={handleClose} />
                        : open === 'sections' ? <AddSection role="sections" open={open} handleClose={handleClose} />
                        // : open === 'subjects' ? <AddSubject role="subjects" open={open} handleClose={handleClose} />
                            : null
                }

            </Drawer>
            <Outlet context={{ isSidebarOpen, toggleSidebar, handleClose, handleOpen, open, setOpen }} />
        </SidebarLayout>
    )
}

export default SubAdmin
