import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// Main Routes
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import PublicRoute from './routes/PublicRoute.jsx';

// Public Routes
import Login from './components/auth/Login.jsx';

// Subadmin Routes
import SubAdmin from './SubAdmin.jsx';
import StudentList from './subAdmin/StudentList.jsx';
import TeacherList from './subAdmin/TeacherList.jsx';
import SectionList from './subAdmin/SectionList.jsx';
import SubjectList from './subAdmin/SubjectList.jsx';
import Assignment from './subAdmin/Assignment.jsx';
import StreamList from './subAdmin/StreamList.jsx';
import ClassRoomList from './subAdmin/ClassRoomList.jsx';
import Homework from './subAdmin/Homework.jsx';

// Teacher Route
import Teacher from './Teacher.jsx';
import Profile from './teacher/Profile.jsx';
import UploadDocument from './teacher/UploadDocument.jsx';

// Student Routes
// import Student from './student/Student.jsx';
import Unauhtorized from './components/common/Unauhtorized.jsx';
import Partners from './components/future/Partners.jsx';

import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Role from './subAdmin/Role.jsx';
import Dashboard from './subAdmin/Dashboard.jsx';
// import { getToken } from './features/auth/loginSlice.js';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>,
  },
  {
    path: "/partners",
    element: <PublicRoute><Partners /></PublicRoute>,
  },

  // 🛡️ Role-based (ONLY subadmin)
  {
    path: "/subadmin",
    element: (
      <ProtectedRoute allowedRoles={["subadmin"]}>
        <SubAdmin />
        
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: (<Dashboard />) },
      { path: "create-role", element: (<Role />) },
      { path: "assignments", element: (<Assignment />) },
      { path: "teachers", element: (<TeacherList />) },
      { path: "students", element: (<StudentList />) },
      { path: "classrooms", element: (<ClassRoomList />) },
      { path: "streams", element: (<StreamList />) },
      { path: "sections", element: (<SectionList />) },
      { path: "subjects", element: (<SubjectList />) },
      { path: "homework", element: (<Homework />) },
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
      { index: true, element: <Profile /> },
      { path: "profile", element: (<Profile />) },
      { path: "upload-document", element: (<UploadDocument />) },
      { path: "students", element: (<Homework />) },
      { path: "homework", element: (<Homework />) },
    ]
  },
  // {
  //   path: "/student",
  //   element: (
  //     <ProtectedRoute allowedRoles={["student"]}>
  //       <Student />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "/unauthorized",
    element: <Unauhtorized />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
