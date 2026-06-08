import { useState } from "react";
import SubAdmin from "../SubAdmin"

const StudentList = () => {
   const students = [
        {
            id: 1,
            name: "John",
        },
        {
            id: 2,
            name: "Sara",
        }
    ];
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    Students
                  </h2>
                  <p className="text-sm text-[#fbf9fa]-foreground-2">
                    Add Student, edit and more.
                  </p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <a onClick={() => handleOpen()} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-[#ebe6e7] text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                      Add Student
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
                          Class
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase text-foreground">
                          Mother Name
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
                  {students.map((student) => (
                    <tr key={student.id} style={{ marginBottom: "10px" }}>
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
                              <span className="block text-sm font-semibold text-foreground">{student.name}
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
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-[#fbf9fa]-foreground-1">Mrs. Darshna Rani</span>
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
                          <label htmlFor="teacher-name" className="block text-sm mb-2 text-foreground">Student Name</label>
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
                          <label htmlFor="file-input" class="sr-only">Choose file</label>
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
                          <label htmlFor="mother-name" className="block text-sm mb-2 text-foreground">Mother Name</label>
                          <div className="relative">
                            <input type="text" id="mother-name" name="mother-name" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="spouse-error" />
                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                              <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                              </svg>
                            </div>
                          </div>
                          <p className="hidden text-xs text-red-600 mt-2" id="spouse-error">Please include a valid email address so we can get back to you</p>
                        </div>


                        <label htmlFor="class" className="block text-sm text-foreground">Class</label>
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

export default StudentList
