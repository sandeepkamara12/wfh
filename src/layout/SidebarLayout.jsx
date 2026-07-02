// import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const SidebarLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <div className="w-full xl:ps-65 bg-navy/10 min-h-screen">
        <div className="p-4 sm:p-4 space-y-4">
          {children}
        </div>
      </div>
    </>
  )
}

export default SidebarLayout
