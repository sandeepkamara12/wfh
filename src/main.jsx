import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentList from './subAdmin/StudentList.jsx';
import Teacher from './subAdmin/TeacherList.jsx';
import SubAdmin from './SubAdmin.jsx';
import ClassList from './subAdmin/ClassList.jsx';
import SectionList from './subAdmin/SectionList.jsx';
import SubjectList from './subAdmin/SubjectList.jsx';
import Assignment from './subAdmin/Assignment.jsx';
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
    path: "/student",
    element: <StudentList />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
  {
    path: "/sub-admin",
    element: <SubAdmin />,
  },
  {
    path: "/ward",
    element: <ClassList />,
  },
  {
    path: "/section",
    element: <SectionList />,
  },
  {
    path: "/subject",
    element: <SubjectList />,
  },
  {
    path: "/assignment",
    element: <Assignment />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
