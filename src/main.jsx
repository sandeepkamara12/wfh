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
import { Provider } from 'react-redux';
import { store } from './store.js';
import Teacher from './Teacher.jsx';

import ProtectedRoute from './routes/ProtectedRoute.jsx';
import UploadDocument from './teacher/UploadDocument.jsx';
import Profile from './teacher/Profile.jsx';
import Login from './components/auth/Login.jsx';
import CreateRole from './subAdmin/CreateRole.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SubAdmin />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  // 🛡️ Role-based (ONLY sub-admin)
  {
    path: "/sub-admin",
    element: (
      <ProtectedRoute allowedRoles={["sub-admin"]}>
        <SubAdmin />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Assignment /> },
      { path: "assignments", element: (<Assignment />) },
      { path: "teachers", element: (<TeacherList />) },
      { path: "students", element: (<StudentList />) },
      { path: "classrooms", element: (<ClassRoomList />) },
      { path: "streams", element: (<StreamList />) },
      { path: "sections", element: (<SectionList />) },
      { path: "subjects", element: (<SubjectList />) },
      {path: "homework", element: (<Homework />)},
    ]
  },
  {
    path: "/teacher",
    element: (
      <ProtectedRoute allowedRoles={["teacher"]}>
        <Teacher />
      </ProtectedRoute>
    ),
    children: [
      {index: true, element: <Profile />},
      {path: "profile", element: (<Profile />)},
      {path: "upload-document", element: (<UploadDocument />)},
      {path: "students", element: (<Homework />)},
      {path: "homework", element: (<Homework />)},
    ]
  },
  {
    path: "/unauthorized",
    element: <h1>Unauthorized</h1>,
  },
]);
if (!localStorage.getItem("role")) {
  // localStorage.setItem("role", "teacher");
  localStorage.setItem("role", "sub-admin");
  localStorage.setItem("isAuth", "true");
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
