import { Link, useLocation } from "react-router-dom"
import { studentSidebarLinks, subAdminSidebarLinks, teacherSidebarLinks } from "../../const/constant";
import { Bell, ChevronDown, ChevronUp, KeyRound, LogOut, LogOutIcon, Settings, User, UserLock, UserRound, UserRoundCog, X } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar, handleLogout }) => {
    const base_url = import.meta.env.VITE_API_BASE_URL;
    const location = useLocation();
    let pathName = location.pathname;
    let user = useSelector(state => state.auth.user);
    let role = user?.role;


    let isMarried = !!user?.married;
    let paddedId = user?.id?.toString().padStart(5, '0');
    let userGeneratedId = user?.role[0] + isMarried + user?.gender[0] + user?.first_name[0] + user?.last_name[0] + paddedId;
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    // -translate-x-full xl:translate-x-0
    // ${isOpen ? "translate-x-0" : "-translate-x-full"}
    return (
        <aside id="hs-pro-sidebar" className={`fixed inset-y-0 left-0 z-50 w-64 h-full bg-navy border-r border-navy transform transition-transform duration-300 translate-x-0
            `}>

            <div className="flex flex-col h-full max-h-full">
                {/* <div className="block absolute top-2 inset-e-4">
                    <div className="inline-block">
                        <button onClick={() => toggleSidebar()} type="button" className="hs-tooltip-toggle relative w-9 h-9 inline-flex justify-center items-center gap-x-2 border border-white text-white hover:bg-surface-hover focus:bg-surface-hover rounded-full focus:outline-hidden">
                            <X className="size-5" />
                        </button>
                    </div>
                </div> */}

                <div className="p-5 text-center">
                    <div className="flex w-24 h-24 rounded-full mx-auto mb-2">
                        <img className="object-cover w-full h-full rounded-full" src={base_url + '/' + user?.profile_pic} alt="Avatar" />
                    </div>

                    <p className="lg:hidden font-semibold text-white">{user?.first_name + user?.last_name}</p>

                    <div className="hidden lg:block">
                        <div className="relative inline-flex">
                            <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-x-1 font-semibold rounded text-white hover:text-primary-hover focus:outline-hidden focus:primary-focus disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                {user?.first_name + ' ' + user?.last_name}
                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-white flex flex-wrap items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4  h-4 mr-1 lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                        <span className="uppercase">{user?.custom_id}</span>
                    </p>
                </div>



                <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <nav className="hs-accordion-group px-3 w-full flex flex-col flex-wrap h-full">
                        <ul className="space-y-1 flex flex-col h-full">
                            {
                                role === 'subadmin' ?
                                    subAdminSidebarLinks?.length > 0 && subAdminSidebarLinks?.map(link => {
                                        let Icon = link.icon;
                                        const isActive = ["/subadmin", "/subadmin/"].includes(pathName) && link.path === "/subadmin/assignments" ? true : pathName.startsWith(link.path);
                                        return (
                                            <li key={link.id}>
                                                <Link to={link.path} className={`${isActive ? 'bg-orange text-white' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-orange hover:text-white focus:outline-hidden focus:bg-orange focus:text-white`}>
                                                    <span className="w-5 mr-3">
                                                        <Icon className="size-5" />
                                                    </span>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })
                                    :
                                    role === 'teacher' ?
                                        teacherSidebarLinks?.length > 0 && teacherSidebarLinks?.map(link => {
                                            let Icon = link.icon;
                                            const isActive = ["/teacher", "/teacher/"].includes(pathName) && link.path === "/teacher/profile" ? true : pathName.startsWith(link.path);
                                            return (
                                                <li key={link.id}>
                                                    <Link to={link.path} className={`${isActive ? 'bg-orange text-white' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-orange hover:text-white focus:outline-hidden focus:bg-orange focus:text-white`}>
                                                        <span className="w-5 mr-3">
                                                            <Icon className="size-5" />
                                                        </span>
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                        :
                                        studentSidebarLinks?.length > 0 && studentSidebarLinks?.map(link => {
                                            let Icon = link.icon;
                                            const isActive = ["/subadmin", "/subadmin/"].includes(pathName) && link.path === "/subadmin/assignments" ? true : pathName.startsWith(link.path);
                                            return (
                                                <li key={link.id}>
                                                    <Link to={link.path} className={`${isActive ? 'bg-orange text-white' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-orange hover:text-white focus:outline-hidden focus:bg-orange focus:text-white`}>
                                                        <span className="w-5 mr-3">
                                                            <Icon className="size-5" />
                                                        </span>
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            )
                                        })

                            }
                            <li className="mt-auto mb-3 relative">
                                <span onClick={() => setIsProfileMenuOpen(prev => !prev)} className="flex items-center gap-2 bg-white p-2 rounded relative cursor-pointer">
                                    <span className="bg-orange text-white rounded p-2">
                                        <Settings className="size-5 shrink-0" />
                                    </span>
                                    <span className="flex flex-col gap-1 text-navy">
                                        <span className="leading-none font-bold text-sm">Sub Admin</span>
                                        <span className="leading-none font-semibold text-xs text-gray-700">ID: sdasdasasd</span>
                                    </span>
                                    <span className="absolute right-4 text-navy">
                                        {isProfileMenuOpen ? (
                                            <ChevronUp className="size-5 shrink-0" />
                                        ) : (
                                            <ChevronDown className="size-5 shrink-0" />
                                        )}
                                    </span>
                                </span>
                                {isProfileMenuOpen && (
                                    <div className="absolute bottom-full left-0 w-full mb-2 bg-white rounded overflow-hidden py-2">
                                        <Link className="flex items-center gap-x-2 py-2 px-3 text-sm text-navy font-medium hover:bg-orange hover:text-white no-underline" to="#">
                                            <UserRound className="size-5 shrink-0" />
                                            Profile
                                        </Link>
                                        <Link className="flex items-center gap-x-2 py-2 px-3 text-sm text-navy font-medium hover:bg-orange hover:text-white no-underline" to="#">
                                            <Bell className="size-5 shrink-0" />
                                            Notification
                                        </Link>
                                        <Link className="flex items-center gap-x-2 py-2 px-3 text-sm text-navy font-medium hover:bg-orange hover:text-white no-underline" to="#">
                                            <UserRoundCog className="size-5 shrink-0" />
                                            Settings
                                        </Link>
                                        <Link className="flex items-center gap-x-2 py-2 px-3 text-sm text-navy font-medium hover:bg-orange hover:text-white no-underline" to="#">
                                            <UserLock className="size-5 shrink-0" />
                                            Change Password
                                        </Link>
                                        <Link className="flex items-center gap-x-2 py-2 px-3 text-sm text-navy font-medium hover:bg-orange hover:text-white no-underline" onClick={handleLogout}>
                                            <LogOutIcon className="size-5 shrink-0" />
                                            Logout
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
