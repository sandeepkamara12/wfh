import { Link, useLocation, useNavigate } from "react-router-dom"
import { studentSidebarLinks, subAdminSidebarLinks, teacherSidebarLinks } from "../../const/constant";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../store";
import { toast } from "react-toastify";
// import { logout } from "../../features/auth/loginSlice";

const Sidebar = () => {
    const base_url = import.meta.env.VITE_API_BASE_URL;
    const location = useLocation();
    let pathName = location.pathname;
    let user = useSelector(state => state.auth.user);
    let role = user?.role;
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleLogout = () => {
        // dispatch(logout());
        // persistor.purge();
        persistor.purge().then((res) => {
            console.log(res, 'res')
            navigate("/login");
            toast.success("You are logged out successfully!");
        });
    };

    let isMarried = !!user?.married;
    let paddedId = user?.id?.toString().padStart(5, '0');
    let userGeneratedId = user?.role[0] + isMarried + user?.gender[0] + user?.first_name[0] + user?.last_name[0] + paddedId;

    return (
        <aside id="hs-pro-sidebar" className="hs-overlay [--auto-close:lg]
            hs-overlay-open:translate-x-0
            -translate-x-full transition-all duration-300 transform
            w-65 h-full
            hidden
            fixed inset-y-0 inset-s-0 z-60
            bg-navy border-e border-navy
            lg:block xl:translate-x-0 lg:inset-e-auto lg:bottom-0" tabIndex="-1" aria-label="Sidebar">

            <div className="flex flex-col h-full max-h-full">
                <div className="hidden lg:block absolute top-2 inset-e-4">
                    <div className="hs-tooltip [--placement:bottom] inline-block">
                        <button type="button" className="hs-tooltip-toggle relative w-9 h-9 inline-flex justify-center items-center gap-x-2 border border-white text-white hover:bg-surface-hover focus:bg-surface-hover rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <svg className="shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                            </svg>
                        </button>
                    </div>
                </div>

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
                            <li className="mt-auto mb-3">
                                <Link
                                    onClick={handleLogout}
                                    className={`bg-orange text-white flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-orange hover:text-white focus:outline-hidden focus:bg-navy focus:text-white`}>
                                    <span className="w-5 mr-3">
                                        <LogOut className="size-5" />
                                    </span>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
