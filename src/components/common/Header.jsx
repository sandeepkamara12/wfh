import { Bell, LogOut, PanelLeftClose, Settings, UserLock, UserRound, UserRoundCog, UserStar, UserStarIcon, LogOutIcon } from "lucide-react"
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FloatingDropdown from "../ui/FloatingDropdown";

const Header = ({ isOpen, toggleSidebar }) => {
    const [open, setOpen] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const dropdownRef = useRef(null);
    const notificationRef = useRef(null);
    useOutsideClick(dropdownRef, () => setOpen(false));
    useOutsideClick(notificationRef, () => setOpenNotification(false));
    let user = useSelector(state => state.auth.user);

    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start bg-navy backdrop-blur text-sm px-4 py-2 text-white z-50">
            <nav className="flex basis-full items-center justify-between w-full mx-auto">
                <div className="me-5 lg:me-0 flex items-center">
                    <PanelLeftClose className="size-5 flex" onClick={toggleSidebar} />
                </div>
                {/* <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3"> */}
                {/* <div className="hidden md:block">

                        <div className="relative">
                            <div className="absolute inset-y-0 inset-s-0 flex items-center pointer-events-none z-20 ps-3.5">
                                <svg className="shrink-0 size-4 text-[#fbf9fa]-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <input type="text" className="py-2 ps-10 pe-16 block w-full bg-layer border border-navy rounded text-sm text-foreground placeholder:text-[#fbf9fa]-foreground focus:outline-hidden focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none placeholder:text-navy" placeholder="Search" />
                            <div className="hidden absolute inset-y-0 inset-e-0 flex items-center z-20 pe-1">
                                <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-[#fbf9fa]-foreground-1 hover:text-primary-hover focus:outline-hidden focus:text-primary-focus" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                </button>
                            </div>
                            <div className="absolute inset-y-0 inset-e-0 flex items-center pointer-events-none z-20 pe-3 text-[#fbf9fa]-foreground">
                                <svg className="shrink-0 size-3 text-[#fbf9fa]-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                                <span className="mx-1">
                                    <svg className="shrink-0 size-3 text-[#fbf9fa]-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </span>
                                <span className="text-xs">/</span>
                            </div>
                        </div>

                    </div> */}
                <div className="flex flex-row items-center gap-4">
                    <FloatingDropdown
                        trigger={
                            <Bell className="size-5 shrink-0 cursor-pointer hover:text-orange" onClick={() => setOpenNotification((prev) => !prev)} />
                        }
                    >
                        <div className={`max-h-72 overflow-hidden overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500`}>
                            <div className={`w-full h-full`}>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                                    <div className="flex items-center w-full">
                                        <div className="flex items-center justify-center rounded-full bg-gray-200 size-8 overflow-hidden me-2.5">
                                            <img className="shrink-0 object-cover object-center w-full h-full" src="post-1.jpeg" alt="Ella Lauda" />
                                        </div>
                                        <div className="flex flex-wrap items-start flex-col w-[calc(100%-42px)]">
                                            <span className="w-full font-medium text-md text-gray-800 dark:text-neutral-200 truncate">His mother had always taught him</span>
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">Elly muskon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="#" className="bottom-0 sticky text-sm text-center text-navy bg-white inset-x-0 block py-2 font-medium no-underline hover:text-orange">Mark as read</Link>
                        </div>
                    </FloatingDropdown>

                    <div className="relative inline-flex">
                        <FloatingDropdown
                            trigger={
                                <button onClick={() => setOpen((prev) => !prev)} type="button" className="size-10 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <img className="shrink-0 size-full rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                </button>
                            }
                        >
                            <div className="py-3 px-5 bg-navy/10 rounded-t">
                                <div className="text-sm font-medium text-black flex flex-wrap items-end gap-2">
                                    {/* <UserStarIcon className="size-5 shrink-0 text-navy" /> */}
                                    <div className="flex flex-wrap gap-0 w-[calc(100%-28px)]">
                                        <div className="flex flex-wrap items-center gap-0.5">
                                            <span>{user?.first_name + ' ' + user?.last_name}</span>
                                            <span className="text-xs">(Sub Admin)</span>
                                        </div>
                                        <p className="text-xs text-navy uppercase">ID: {user.custom_id}</p>
                                    </div>

                                </div>

                            </div>
                            <div className="p-1.5 space-y-0.5">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                    <UserRound className="size-5 shrink-0" />
                                    Profile
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                    <Bell className="size-5 shrink-0" />
                                    Notification
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                    <UserRoundCog className="size-5 shrink-0" />
                                    Settings
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                    <UserLock className="size-5 shrink-0" />
                                    Change Password
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-navy font-medium hover:bg-navy hover:text-white no-underline" to="#">
                                    <LogOutIcon className="size-5 shrink-0" />
                                    Logout
                                </Link>
                            </div>
                        </FloatingDropdown>
                    </div>

                </div>
                {/* </div> */}
            </nav>
        </header>
    )
}

export default Header
