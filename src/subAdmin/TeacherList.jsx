import { useState } from "react";
import SubAdmin from "../SubAdmin";

const TeacherList = () => {
    const teachers = [
        {
            id: 1,
            name: "John",
            classes: ["Math", "Physics"]
        },
        {
            id: 2,
            name: "Sara",
            classes: ["Biology", "Chemistry"]
        }
    ];
    const [createSection, setCreateSection] = useState(false);
    const [createClass, setCreateClass] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenSection = () => {
        setCreateSection(true);
    };

    const handleCloseSection = () => {
        setCreateSection(false);
    };

    const handleOpenClass = () => {
        setCreateClass(true);
    };

    const handleCloseClass = () => {
        setCreateClass(false);
    };
    const drawerStyle = {
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100%",
        background: "#f4f4f4",
        padding: "20px",
        zIndex: "999",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.3)"
    };
    return (
        <SubAdmin>
            <div className="flex flex-col">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <div className="min-w-full inline-block align-middle">
                        <div className="bg-layer border border-[#ebe6e7] rounded-xl shadow-2xs overflow-hidden">

                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-[#ebe6e7]">
                                <div>
                                    <h2 className="text-xl font-semibold text-foreground">
                                        Teachers
                                    </h2>
                                    <p className="text-sm text-[#fbf9fa]-foreground-2">
                                        Add teacher, edit and more.
                                    </p>
                                </div>
                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-[#ebe6e7] text-layer-foreground shadow-2xs hover:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus" href="#">
                                            View all
                                        </a>
                                        <a onClick={() => handleOpen()} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-[#ebe6e7] text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                            Add teacher
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <table className="min-w-full divide-y divide-[#ebe6e7]">
                                <thead className="bg-[#fbf9fa]">
                                    <tr>
                                        <th scope="col" className="ps-6 pe-3 py-3 text-start">
                                            <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-main" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </th>
                                        <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-foreground">
                                                    Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-foreground">
                                                    Contact
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-foreground">
                                                    Class Incharge
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-foreground">
                                                    Other Classes
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-foreground">
                                                    Spouse Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-foreground">
                                                    Created
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-end"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#ebe6e7]">
                                    {teachers.map((teacher) => (
                                        <tr key={teacher.id} style={{ marginBottom: "10px" }}>
                                            <td className="size-px whitespace-nowrap">
                                                <div className="ps-6 pe-3 py-3">
                                                    <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                        <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-1" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="size-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                                        <div className="grow">
                                                            <span className="block text-sm font-semibold text-foreground">{teacher.name}
                                                                <span className="text-white text-xs font-medium bg-red-400 rounded-full px-2 py-1">28 Years</span>
                                                            </span>
                                                            <span id="dismiss-badge" className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 rounded-full text-xs font-medium bg-gray-300 text-primary-800 dark:bg-primary-500/20 dark:text-primary-400">
                                                                #0215487963
                                                                <button type="button" className="shrink-0 size-3 inline-flex items-center justify-center rounded-full hover:bg-primary-200 focus:outline-hidden focus:bg-primary-200 dark:hover:bg-primary-900 dark:focus:bg-primary-900" data-hs-remove-element="#dismiss-badge">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">christina@site.com</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">7986685426</span>
                                                </div>
                                            </td>

                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-foreground">3rd A</span>
                                                </div>
                                            </td>
                                            <td className="size-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    {/* <div className="see-more-classes" onClick={() => handleOpen(teacher)}>See More</div> */}
                                                    <div className="see-more-classes">3rd A | 5th B | 6th C | 7th D</div>
                                                </div>
                                            </td>
                                            <td className="size-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-[#fbf9fa]-foreground-1">Mr. Charanjeet Singh</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="size-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-[#fbf9fa]-foreground-1">28 Dec, 12:12</span>
                                                </div>
                                            </td>
                                            <td className="size-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                                    </a>
                                                    <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {open && (
                                <div style={drawerStyle}>
                                    <button onClick={handleClose}>Close</button>
                                    <form>
                                        <div className="grid gap-y-4 h-screen overflow-auto">
                                            <div className="grid gap-y-4">

                                                <div>
                                                    <label htmlFor="teacher-name" className="block text-sm mb-2 text-foreground">Teacher Name</label>
                                                    <div className="relative">
                                                        <input type="text" id="teacher-name" name="teacher-name" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="teacher-error" />
                                                        <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="hidden text-xs text-red-600 mt-2" id="teacher-error">Please include a valid email address so we can get back to you</p>
                                                </div>



                                                <div>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <label htmlFor="email" className="block text-sm mb-2 text-foreground">Email</label>
                                                    </div>
                                                    <div className="relative">
                                                        <input type="email" id="email" name="email" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                                                        <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Email required</p>
                                                </div>

                                                <div>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <label htmlFor="phone" className="block text-sm mb-2 text-foreground">phone</label>
                                                    </div>
                                                    <div className="relative">
                                                        <input type="tel" id="phone" name="phone" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="phone-error" />
                                                        <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="hidden text-xs text-red-600 mt-2" id="phone-error">10+ characters required</p>
                                                </div>


                                                <div>
                                                    <label htmlFor="spouse-name" className="block text-sm mb-2 text-foreground">Spouse Name</label>
                                                    <div className="relative">
                                                        <input type="text" id="spouse-name" name="spouse-name" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="spouse-error" />
                                                        <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="hidden text-xs text-red-600 mt-2" id="spouse-error">Please include a valid email address so we can get back to you</p>
                                                </div>


                                                <label htmlFor="class" className="block text-sm text-foreground">Class Incharge</label>
                                                <div className="grid sm:grid-cols-2 sm:grid-row-2 gap-2">
                                                    <label htmlFor="3" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-form" id="3" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">3rd</span>
                                                    </label>

                                                    <label htmlFor="4" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-form" id="4" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">4th</span>
                                                    </label>

                                                    <label htmlFor="5" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-form" id="5" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">5th</span>
                                                    </label>

                                                    <label htmlFor="6" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-form" id="6" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">6th</span>
                                                    </label>
                                                </div>

                                                <label htmlFor="section" className="block text-sm text-foreground">Section</label>
                                                <div className="grid sm:grid-cols-2 sm:grid-row-2 gap-2">
                                                    <label htmlFor="a" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-section" id="a" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">A</span>
                                                    </label>

                                                    <label htmlFor="b" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-section" id="b" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">B</span>
                                                    </label>

                                                    <label htmlFor="c" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-section" id="c" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">C</span>
                                                    </label>

                                                    <label htmlFor="d" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                                        <input type="radio" name="hs-radio-in-section" id="d" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                                        <span className="text-sm ms-3 text-muted-foreground-1">D</span>
                                                    </label>
                                                </div>

                                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Create Teacher</button>
                                            </div>

                                            <div className="hs-dropdown relative inline-flex flex-col">
                                                <h3>Select Class</h3>
                                                <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    Select Class
                                                    <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                </button>

                                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-dropdown border border-dropdown-line rounded-lg shadow-md mt-2" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-header">
                                                    <div className="p-1 space-y-0.5">
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                                            A
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                                                            B
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
                                                            C
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                                            D
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {
                                                !createClass &&
                                                <a href="#" onClick={handleOpenClass}>Create new class</a>
                                            }
                                            {
                                                createClass &&
                                                <div>
                                                    <a href="#" onClick={handleCloseClass}>Close class</a>
                                                    <div>
                                                        <label htmlFor="text" className="block text-sm mb-2 text-foreground">Class Name</label>
                                                        <div className="relative">
                                                            <input type="text" id="text" name="text" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                                                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Create Class</button>
                                                </div>
                                            }


                                            <div className="hs-dropdown relative inline-flex flex-col">
                                                <h3>Select Section</h3>
                                                <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    Actions
                                                    <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                </button>

                                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-dropdown border border-dropdown-line rounded-lg shadow-md mt-2" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-header">
                                                    <div className="p-1 space-y-0.5">
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                                            A
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                                                            B
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
                                                            C
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus" href="#">
                                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                                            D
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {
                                                !createSection &&
                                                <a href="#" onClick={handleOpenSection}>Create new section</a>
                                            }
                                            {
                                                createSection &&
                                                <div>
                                                    <a href="#" onClick={handleCloseSection}>Close section</a>
                                                    <div>
                                                        <label htmlFor="text" className="block text-sm mb-2 text-foreground">Section Name</label>
                                                        <div className="relative">
                                                            <input type="text" id="text" name="text" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                                                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Create Section</button>
                                                </div>
                                            }

                                        </div>
                                    </form>
                                </div>
                            )}


                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-[#ebe6e7]">
                                <div>
                                    <p className="text-sm text-[#fbf9fa]-foreground-2">
                                        <span className="font-semibold text-foreground">12</span> results
                                    </p>
                                </div>
                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg bg-layer border border-[#ebe6e7] text-layer-foreground shadow-2xs hover:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus">
                                            <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                            Prev
                                        </button>
                                        <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg bg-layer border border-[#ebe6e7] text-layer-foreground shadow-2xs hover:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus">
                                            Next
                                            <svg className="shrink-0 size-4 -me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </SubAdmin>
    )
}

export default TeacherList
