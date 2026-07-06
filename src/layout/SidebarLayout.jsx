// import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const SidebarLayout = ({ isOpen, toggleSidebar, children }) => {
  return (
    <>
      {/* <Header /> */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="w-full xl:ps-65 bg-navy/10 min-h-screen">
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </>
  )
}

export default SidebarLayout
