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
    const [classrooms, setClassrooms] = useState([]);
    const [sections, setSections] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    
    const handleOpen = (type) => {
        setOpen(type);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <SidebarLayout isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            {
                open !== null &&
                <Drawer handleClose={handleClose} open={open}>
                    {
                        open === 'teachers' ? <AddTeacher role="teacher" open={open} handleClose={handleClose} />
                            : open === 'students' ? <AddTeacher role="student" open={open} handleClose={handleClose} />
                                : open === 'classrooms' ? <AddClassroom handleClose={handleClose} setClassrooms={setClassrooms} setIsEdit={setIsEdit} isEdit={isEdit} />
                                    : open === 'sections' ? <AddSection handleClose={handleClose} setSections={setSections} setIsEdit={setIsEdit} isEdit={isEdit} />
                                        : null
                    }

                </Drawer>
            }
            <Outlet context={{ isSidebarOpen, toggleSidebar, handleClose, handleOpen, open, setOpen, setClassrooms, setIsEdit, setSections }} />
        </SidebarLayout>
    )
}

export default SubAdmin
