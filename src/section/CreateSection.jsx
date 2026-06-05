import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const CreateSection = () => {
    return (
        <div>
            <Header />
            <div className="sticky top-0 inset-x-0 z-20 bg-navbar border-y border-[#ebe6e7] px-4 sm:px-6 lg:px-8 lg:hidden">
                <div className="flex items-center py-2">

                    <button type="button" className="size-8 flex justify-center items-center gap-x-2 bg-layer border border-[#ebe6e7] text-layer-foreground hover:text-layer-foreground-hover rounded-lg focus:outline-hidden focus:text-layer-foreground-focus disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                        <span className="sr-only">Toggle Navigation</span>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
                    </button>


                    <ol className="ms-3 flex items-center whitespace-nowrap">
                        <li className="flex items-center text-sm text-foreground">
                            Application Layout
                            <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-[#fbf9fa]-foreground" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </li>
                        <li className="text-sm font-semibold text-foreground truncate" aria-current="page">
                            Dashboard
                        </li>
                    </ol>

                </div>
            </div>

            <Sidebar />

            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="bg-card border border-card-line rounded-xl shadow-2xs">

                        <div className="p-4 sm:p-7">
                            <form>
                                <div className="grid gap-y-4">

                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 text-foreground">Section Name</label>
                                        <div className="relative">
                                            <input type="text" id="email" name="email" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Create Section</button>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSection
