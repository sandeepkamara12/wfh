// import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const SidebarLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <div className="w-full xl:ps-65 h-screen bg-navy/10">
        <div className="p-4 sm:p-10 space-y-4 sm:space-y-6">
          {children}
        </div>
      </div>
    </>
  )
}

export default SidebarLayout
