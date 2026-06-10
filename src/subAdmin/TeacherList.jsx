import { useState } from "react";
import SubAdmin from "../SubAdmin";
import { Clock, Copy, Eye, Mail, Pencil, Phone, Trash2, UserRoundPen } from "lucide-react";
import Table from "../components/common/Table";

const TeacherList = () => {
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
    const columns = [
        {
            name: "Name",
            cell: row => (
                <div className='flex items-center gap-2'>
                    <span className='inline-flex items-center justify-center size-12 rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full ' /></span>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-navy uppercase">{row.name}</span>
                        <span className="inline-flex items-center gap-x-1.5 pt-0.5 pb-1 ps-2 pe-2 rounded-full text-xs font-medium bg-navy/10 text-navy/50 dark:bg-primary-500/20 dark:text-primary-400">
                            {row.id}
                            <button className='shrink-0 size-3 inline-flex items-center justify-center rounded-full hover:bg-primary-200 pt-0.5'><Copy className='size-4' /></button>
                        </span>
                    </div>
                </div>
            ),
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Contact",
            cell: row => (
                <div className="flex flex-wrap flex-col gap-1">
                    <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
                        <Mail className='size-4' />
                        {row.email}
                    </a>
                    <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                        <Phone className="size-4" />
                        {row.phone}
                    </a>
                </div>
            ),
            selector: row => row.contact
        },
        {
            name: "Incharge Of",
            selector: row => row.inchargeOf, sortable: true
        },
        { name: "Other Classes", selector: row => row.otherClasses },
        { name: "Spouse Name", selector: row => row.spouseName },
        {
            name: "Created At",
            cell: row => (
                <div className="flex items-center gap-1">
                    <Clock className='size-4' />
                    {row.createdAt}
                </div>
            ),
            selector: row => row.createdAt
        },
        {
            name: '',
            cell: row => (
                <div className="px-6 py-1.5 flex flex-wrap items-center gap-1">
                    <button type="button" className="icon-btn">
                        <Eye className="size-5 mx-auto" />
                    </button>
                    <button type="button" className="icon-btn">
                        <Trash2 className="size-5 mx-auto" />
                    </button>
                    <button type="button" className="icon-btn">
                        <Pencil className="size-5 mx-auto" />
                    </button>
                </div>
            ),
        },
    ];
    const data = [
        { id: "#2154879630", name: 'Aria Chen', photo: "/public/student.jfif", email: 'christina@site.com', phone: 7986602514, inchargeOf: "3rd A", otherClasses: "3rd A | 4th B | 5th C", spouseName: "Mr. Charanjeet Singh", createdAt: "28 Dec, 12:12" },
        { id: "#2154879631", name: 'Marcus Webb', photo: "/public/student.jfif", email: 'christina@site.com', phone: 7986602514, inchargeOf: "3rd A", otherClasses: "3rd A | 4th B | 5th C", spouseName: "Mr. Charanjeet Singh", createdAt: "28 Dec, 12:12" },
    ];
    return (
        <SubAdmin>
            <div className="flex flex-col">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <div className="min-w-full inline-block align-middle">
                        <div className="">

                            <Table columns={columns} data={data} handleOpen={handleOpen} btnText="Add Teacher" btnIcon={<UserRoundPen className="w-5 h-5 mx-auto" />} label="Teachers" subLabel="Add teacher, edit and more." />

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

                                                <div class="max-w-sm w-full">
                                                    <label for="file-input" class="sr-only">Choose file</label>
                                                    <input type="file" name="file-input" id="file-input" class="block w-full bg-layer border border-layer-line rounded-lg text-sm text-foreground placeholder:text-muted-foreground-1 focus:z-10 focus:outline-hidden focus:border-primary-focus focus:ring-1 focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none file:bg-surface file:border-0 file:me-4 file:py-3 file:px-4" />
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

                                            <div className="hs-dropdown relative flex-col hidden">
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
                                                <a href="#" onClick={handleOpenClass} className="hidden">Create new class</a>
                                            }
                                            {
                                                createClass &&
                                                <div className="hidden">
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


                                            <div className="hs-dropdown relative hidden flex-col">
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
                                                <a href="#" className="hidden" onClick={handleOpenSection}>Create new section</a>
                                            }
                                            {
                                                createSection &&
                                                <div className="hidden">
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

                        </div>
                    </div>
                </div>
            </div>
        </SubAdmin>
    )
}

export default TeacherList
