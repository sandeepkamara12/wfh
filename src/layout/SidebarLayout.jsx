// import Header from "../components/common/Header"
import { useLocation } from "react-router-dom";
import Sidebar from "../components/common/Sidebar"

const SidebarLayout = ({ children }) => {
  const location = useLocation();
    let pathName = location.pathname;
  return (
    <>
      {/* <Header /> */}
      <Sidebar pathName={pathName} />
      <div className="w-full xl:ps-65 h-screen bg-navy/10">
        <div className="p-4 sm:p-10 space-y-4 sm:space-y-6">
          <div className="flex  items-center">
            {/* <button type="button" className="size-8 flex justify-center items-center gap-x-2 bg-navy border border-navy text-white hover:text-layer-foreground-hover rounded-sm focus:outline-hidden focus:text-layer-foreground-focus disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
              <span className="sr-only">Toggle Navigation</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
              </button> */}


            <ol className="flex items-center whitespace-nowrap">
              <li className="flex items-center text-sm text-foreground">
                Isabella Cruz
                <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-[#fbf9fa]-foreground" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </li>
              <li className="text-sm font-semibold text-orange truncate" aria-current="page">
                {pathName.slice(1).toUpperCase()}
              </li>
            </ol>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default SidebarLayout
