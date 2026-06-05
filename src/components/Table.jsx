const Table = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                <div className="min-w-full inline-block align-middle">
                    <div className="bg-layer border border-[#ebe6e7] rounded-xl shadow-2xs overflow-hidden">

                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-[#ebe6e7]">
                            <div>
                                <h2 className="text-xl font-semibold text-foreground">
                                    Users
                                </h2>
                                <p className="text-sm text-[#fbf9fa]-foreground-2">
                                    Add users, edit and more.
                                </p>
                            </div>
                            <div>
                                <div className="inline-flex gap-x-2">
                                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-[#ebe6e7] text-layer-foreground shadow-2xs hover:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus" href="#">
                                        View all
                                    </a>
                                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-[#ebe6e7] text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                        Add user
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
                                                Position
                                            </span>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold uppercase text-foreground">
                                                Status
                                            </span>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-start">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-xs font-semibold uppercase text-foreground">
                                                Portfolio
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
                                <tr>
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
                                                    <span className="block text-sm font-semibold text-foreground">Christina Bersh</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">christina@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Director</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Human resources</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">1/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
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
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-2" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-2" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">David Harrison</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">david@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Seller</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Branding products</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                Warning
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">3/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">20 Dec, 09:27</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-3" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-3" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-layer border border-[#ebe6e7]">
                                                    <span className="font-medium text-sm text-foreground">A</span>
                                                </span>
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Anne Richard</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">anne@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Designer</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">IT department</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">5/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">18 Dec, 15:20</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-4" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-4" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Samia Kartoon</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">samia@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Executive director</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Marketing</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">0/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">18 Dec, 15:20</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-5" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-5" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-layer border border-[#ebe6e7]">
                                                    <span className="font-medium text-sm text-foreground">D</span>
                                                </span>
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">David Harrison</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">david@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Developer</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Mobile app</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                Danger
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">3/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">15 Dec, 14:41</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-6" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-6" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Brian Halligan</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">brian@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Accountant</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Finance</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">2/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">11 Dec, 18:51</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-7" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-7" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Andy Clerk</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">andy@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Director</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Human resources</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">1/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
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
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-8" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-8" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Bart Simpson</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">Bart@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Seller</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Branding products</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                Warning
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">3/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">20 Dec, 09:27</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-9" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-9" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-layer border border-[#ebe6e7]">
                                                    <span className="font-medium text-sm text-foreground">C</span>
                                                </span>
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Camila Welters</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">cwelt@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Designer</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">IT department</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">5/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">18 Dec, 15:20</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-10" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-10" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Oliver Schevich</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">oliver@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Seller</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Branding products</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                Warning
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">3/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">20 Dec, 09:27</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-11" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-11" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-layer border border-[#ebe6e7]">
                                                    <span className="font-medium text-sm text-foreground">I</span>
                                                </span>
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Inna Ivy</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">invy@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Designer</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">IT department</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">5/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">18 Dec, 15:20</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 pe-3 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-12" className="flex">
                                                <input type="checkbox" className="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-12" />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                                <div className="grow">
                                                    <span className="block text-sm font-semibold text-foreground">Jessica Williams</span>
                                                    <span className="block text-sm text-[#fbf9fa]-foreground-1">myhairisred@site.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-foreground">Executive director</span>
                                            <span className="block text-sm text-[#fbf9fa]-foreground-1">Marketing</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-[#fbf9fa]-foreground-1">0/5</span>
                                                <div className="flex w-full h-1.5 bg-surface-1 rounded-full overflow-hidden">
                                                    <div className="flex flex-col justify-center overflow-hidden bg-secondary" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-[#fbf9fa]-foreground-1">18 Dec, 15:20</span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


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
    )
}

export default Table
