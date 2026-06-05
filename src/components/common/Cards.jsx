const Cards = () => {
    return (
        <div>
            <div className="flex flex-col bg-white border border-[#ebe6e7] rounded-xl">

                <div className="p-3 md:pt-5 grid grid-cols-3 gap-x-2">
                    <div>
                        <span className="hidden md:inline-flex items-center gap-x-1.5 py-1 px-2.5 text-xs font-medium bg-[#f6f3f4] text-[#1e2939] rounded-full">
                            <span className="w-1.5 h-1.5 shrink-0 inline-block bg-[#101828] rounded-full"></span>
                            Online
                        </span>
                    </div>

                    <div className="shrink-0 relative md:w-15.5 md:h-15.5 mx-auto">
                        <img className="shrink-0 md:w-15.5 md:h-15.5 rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80" alt="Avatar" />
                        <span className="absolute bottom-0 inset-e-0 block md:hidden w-3 h-3 rounded-full bg-[#009689] border-2 border-white dark:bg-teal-500"></span>
                    </div>

                    <div className="ms-auto">

                        <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                            <button id="hs-pro-dupc1" type="button" className="c51lg inline-flex justify-center items-center gap-x-2 wjrmp ywyel qkj0w text-[#6a7282] qrzwu disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden zlh4v" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 shb27" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                            </button>


                            <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 ulhsq transition-[opacity,margin] duration opacity-0 hidden inmsz nf0zp ywyel border-dropdown-line fe4mk tk1en" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dupc1" tabindex="-1">
                                <div className="kab1w">
                                    <button type="button" className="w-full flex items-center xhgv0 b3s6o tdyt8 wjrmp text-[13px] rcnc1 jub3v disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden i7axs">
                                        <svg className="shrink-0 r390y w1use" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="18" cy="5" r="3"></circle>
                                            <circle cx="6" cy="12" r="3"></circle>
                                            <circle cx="18" cy="19" r="3"></circle>
                                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                        </svg>
                                        Share connection
                                    </button>
                                    <button type="button" className="w-full flex items-center xhgv0 b3s6o tdyt8 wjrmp text-[13px] rcnc1 jub3v disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden i7axs">
                                        <svg className="shrink-0 r390y w1use" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                        </svg>
                                        Hide connection
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                <div className="p-3 pt-0 md:px-5 md:pb-5 text-center">
                    <h3 className="md:text-xl font-medium text-[#1e2939]">
                        Anna Richard
                    </h3>

                    <div className="inline-flex justify-center items-center gap-x-2">
                        <svg className="shrink-0 w-4 h-4 text-[#6a7282]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                        </svg>
                        <p className="text-sm text-[#6a7282]">
                            Guideline
                        </p>
                    </div>
                </div>


                <div className="py-3 px-5 flex flex-col sm:flex-row sm:justify-between sm:items-center u848x sm:gap-y-0 gap-x-2 text-center sm:text-start border border-[#ebe6e7]">
                    <div>
                        <p className="text-sm text-[#6a7282]">
                            57 connections
                        </p>
                    </div>
                    <div>
                        <label for="hs-pro-dupccn1" className="relative py-2 px-3 flex items-center justify-center sm:justify-start bg-white border border-[#ebe6e7] cursor-pointer font-medium text-xs rounded-lg peer-checked:bg-layer-hover hover:border-line-3 focus:outline-none focus:border-line-3">
                            <input type="checkbox" id="hs-pro-dupccn1" className="peer hidden" checked="" />
                            <span className="relative inmsz lqf6y peer-checked:hidden">
                                Connect
                            </span>
                            <span className="relative inmsz hidden peer-checked:flex items-center gap-x-1.5 lqf6y">
                                <svg className="shrink-0 r390y" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Connected
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
