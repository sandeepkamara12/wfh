import Header from "../components/common/Header"
import { useDispatch, useSelector } from "react-redux";
import BottomBar from "../components/common/BottomBar"
import Sidebar from "../components/common/Sidebar"
import { studentSidebarLinks, subAdminBottombarLinks, subAdminSidebarLinks, teacherSidebarLinks } from "../const/constant";
import { logout } from "../features/auth/loginSlice";
import { persistor } from "../store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SidebarLayout = ({ isOpen, toggleSidebar, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector(state => state.auth.user);

  let role = user?.role;
  
  const handleLogout = async () => {
    dispatch(logout());
    // persistor.purge();
    try {
      await persistor.purge();
      toast.success("You are logged out successfully!");
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error, 'error')
    }
  };

  return (
    <>
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} 
        links={
          role === "subadmin"
            ? subAdminSidebarLinks
            : role === "teacher"
              ? teacherSidebarLinks
              : studentSidebarLinks
        }
      handleLogout={handleLogout} />

      <BottomBar
        links={
          role === "subadmin"
            ? subAdminBottombarLinks
            : role === "teacher"
              ? teacherSidebarLinks
              : studentSidebarLinks
        }
        handleLogout={handleLogout}
      />
      {/* <div className="w-full xl:ps-65 bg-navy/10 h-[calc(100dvh-68px)]"> */}
      <div className="w-full bg-navy/10 h-[calc(100dvh-68px)]">
        <div className="p-4 sm:p-6 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  )
}

export default SidebarLayout
