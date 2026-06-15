import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentList from './subAdmin/StudentList.jsx';
import TeacherList from './subAdmin/TeacherList.jsx';
import SubAdmin from './SubAdmin.jsx';
import SectionList from './subAdmin/SectionList.jsx';
import SubjectList from './subAdmin/SubjectList.jsx';
import Assignment from './subAdmin/Assignment.jsx';
import StreamList from './subAdmin/StreamList.jsx';
import ClassRoomList from './subAdmin/ClassRoomList.jsx';
import Homework from './subAdmin/Homework.jsx';
// import CreateSection from './CreateSection.jsx';
// import About from './About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SubAdmin />,
    // children: [
    //   {
    //     path: "student",
    //     element: <Student />,
    //   },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    // ],
  },
  {
    path: "/students",
    element: <StudentList />,
  },
  {
    path: "/teachers",
    element: <TeacherList />,
  },
  {
    path: "/sub-admin",
    element: <SubAdmin />,
  },
  {
    path: "/classrooms",
    element: <ClassRoomList />,
  },
  {
    path: "/sections",
    element: <SectionList />,
  },
  {
    path: "/streams",
    element: <StreamList />,
  },
  {
    path: "/subjects",
    element: <SubjectList />,
  },
  {
    path: "/assignments",
    element: <Assignment />,
  },
  {
    path: "/homework",
    element: <Homework />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
