import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
    const location = useLocation();
    let pathName = location.pathname;

    return (
        <aside id="hs-pro-sidebar" className="hs-overlay [--auto-close:lg]
            hs-overlay-open:translate-x-0
            -translate-x-full transition-all duration-300 transform
            w-65 h-full
            hidden
            fixed inset-y-0 inset-s-0 z-60
            bg-navy border-e border-navy
            lg:block lg:translate-x-0 lg:inset-e-auto lg:bottom-0" tabIndex="-1" aria-label="Sidebar">

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
                        <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1724037231939-c4fa9bd69a84?q=80&amp;w=180&amp;h=180&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                    </div>

                    <p className="lg:hidden font-semibold text-white">Isabella Cruz</p>

                    <div className="hidden lg:block">
                        <div className="relative inline-flex">
                            <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-x-1 font-semibold rounded text-white hover:text-primary-hover focus:outline-hidden focus:primary-focus disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Isabella Cruz
                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-white flex flex-wrap items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4  h-4 mr-1 lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                        M2389310259
                    </p>
                </div>



                <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <nav className="hs-accordion-group px-3 w-full flex flex-col flex-wrap">
                        <ul className="space-y-1">
                            <li>
                                <Link to="/assignment" className={`${pathName === '/assignment' ? 'bg-white text-navy' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-white hover:text-navy focus:outline-hidden focus:bg-navy focus:text-white`}>
                                    <span className="w-5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" w-5 h-5 mx-auto lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>
                                    </span>
                                    Assignment
                                </Link>
                            </li>
                            <li>
                                <Link to="/teacher" className={`${pathName === '/teacher' ? 'bg-white text-navy' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-white hover:text-navy focus:outline-hidden focus:bg-navy focus:text-white`}>
                                    <span className="w-5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" w-5 h-5 mx-auto lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>
                                    </span>
                                    Teacher
                                </Link>
                            </li>                            
                            <li>
                                <Link to="/student" className={`${pathName === '/student' ? 'bg-white text-navy' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-white hover:text-navy focus:outline-hidden focus:bg-navy focus:text-white`}>
                                    <span className="w-5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mx-auto lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                                    </span>
                                    Student
                                </Link>
                            </li>
                            <li>
                                <Link to="/ward" className={`${pathName === '/ward' ? 'bg-white text-navy' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-white hover:text-navy focus:outline-hidden focus:bg-navy focus:text-white`}>
                                    <span className="w-5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mx-auto lucide lucide-gallery-thumbnails-icon lucide-gallery-thumbnails"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1"/><path d="M9 21h1"/><path d="M14 21h1"/><path d="M19 21h1"/></svg>
                                    </span>
                                    Ward
                                </Link>
                            </li>
                            <li>
                                <Link to="/section" className={`${pathName === '/section' ? 'bg-white text-navy' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-white hover:text-navy focus:outline-hidden focus:bg-navy focus:text-white`}>
                                    <span className="w-5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mx-auto lucide lucide-layout-grid-icon lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                                    </span>
                                    Section
                                </Link>
                            </li>
                            <li>
                                <Link to="/subject" className={`${pathName === '/subject' ? 'bg-white text-navy' : 'text-white'} flex no-underline transition-all duration-300 ease-in-out py-2 px-3 text-sm rounded hover:bg-white hover:text-navy focus:outline-hidden focus:bg-navy focus:text-white`}>
                                    <span className="w-5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mx-auto lucide lucide-book-open-text-icon lucide-book-open-text"><path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/><path d="M6 12h2"/><path d="M6 8h2"/></svg>
                                    </span>
                                    Subject
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
