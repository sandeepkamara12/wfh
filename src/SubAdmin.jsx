import { Outlet } from 'react-router-dom';
import SidebarLayout from './layout/SidebarLayout';
import { useState } from 'react';
import Drawer from './components/common/Drawer';
import AddClassroom from './components/subadmin/classroom/AddClassroom';
import AddSection from './components/subadmin/section/AddSection';
import AddTeacher from './components/subadmin/teacher/AddTeacher';
import AddStream from './components/subadmin/stream/AddStream';
import Modal from './components/ui/Modal';

const SubAdmin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    const [open, setOpen] = useState(null);
    const [classrooms, setClassrooms] = useState([]);
    const [streams, setStreams] = useState([]);
    const [sections, setSections] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    
    const handleOpen = (type) => {
        setOpen(type);
    };

    const handleClose = () => {
        setOpen(null);
        setIsEdit(null);
    };
console.log(open, 'open');
    return (
        <SidebarLayout isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            {
                // open !== null &&
                <>
                <Drawer handleClose={handleClose} open={open}>
                    {
                        open === 'teacher' ? <AddTeacher role="teacher" open={open} handleClose={handleClose} />
                        : open === 'student' ? <AddTeacher role="student" open={open} handleClose={handleClose} />
                        : null
                    }

                </Drawer>
                <Modal handleClose={handleClose} open={open} isEdit={isEdit}>
                    {
                        open === 'stream' ? <AddStream setIsEdit={setIsEdit} isEdit={isEdit} handleClose={handleClose} />
                        : open === 'classroom' ? <AddClassroom setIsEdit={setIsEdit} isEdit={isEdit} handleClose={handleClose} />                                
                        : open === 'section' ? <AddSection setIsEdit={setIsEdit} isEdit={isEdit} handleClose={handleClose} />
                        : null
                    }
                </Modal>
                </>
            }
            <Outlet context={{ isSidebarOpen, toggleSidebar, handleClose, handleOpen, open, setOpen, setClassrooms, setIsEdit, setSections, setStreams }} />
        </SidebarLayout>
    )
}

export default SubAdmin
