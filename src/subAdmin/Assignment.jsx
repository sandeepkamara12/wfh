import SubAdmin from "../SubAdmin"

const Assignment = () => {
    return (
        <SubAdmin>
            <div className="flex flex-col">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <div className="min-w-full align-middle grid grid-cols-2 gap-10">
                        <div>
                            <form>
                                <div className="grid gap-y-4">

                                    <select class="py-3 px-4 pe-9 block w-full bg-layer border border-layer-line rounded-lg text-sm text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none">
                                        <option selected>Select Teacher</option>
                                        <option>Mr. Charanjeet Singh <span>#0215463987</span></option>
                                        <option>Mr. Mukesh Khanna <span>#0215463987</span></option>
                                        <option>Mrs. Archana Rani <span>#0215463987</span></option>
                                    </select>

                                    <label htmlFor="class" className="block text-sm text-foreground">Class</label>
                                    <div className="grid sm:grid-cols-8 sm:grid-row-2 gap-2">
                                        <label htmlFor="Nursary" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="Nursary" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">Nursary</span>
                                        </label>

                                        <label htmlFor="LKG" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="LKG" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">LKG</span>
                                        </label>

                                        <label htmlFor="UKG" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="UKG" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">UKG</span>
                                        </label>

                                        <label htmlFor="1" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="1" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">1st</span>
                                        </label>
                                        <label htmlFor="2" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="2" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">2nd</span>
                                        </label>

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

                                        <label htmlFor="7" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="7" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">7th</span>
                                        </label>

                                        <label htmlFor="8" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="8" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">8th</span>
                                        </label>
                                        <label htmlFor="9" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="9" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">9th</span>
                                        </label>

                                        <label htmlFor="10" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="10" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">10th</span>
                                        </label>

                                        <label htmlFor="11" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="11" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">11th</span>
                                        </label>

                                        <label htmlFor="12" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="12" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">12th</span>
                                        </label>
                                    </div>

                                    <label htmlFor="section" className="block text-sm text-foreground">Section</label>
                                    <div className="grid sm:grid-cols-8 sm:grid-row-2 gap-2">
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

                                        <label htmlFor="e" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-section" id="e" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">E</span>
                                        </label>
                                    </div>

                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Assign Teacher to class</button>
                                </div>
                            </form>
                        </div>

                        <div>
                            <form>
                                <div className="grid gap-y-4">
                                    <select class="py-3 px-4 pe-9 block w-full bg-layer border border-layer-line rounded-lg text-sm text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none">
                                        <option selected>Select Student</option>
                                        <option>Komal Rani <span>#0215463987</span></option>
                                        <option>Mukesh Bhatia <span>#0215463987</span></option>
                                        <option>Archana Devi <span>#0215463987</span></option>
                                    </select>
                                    <label htmlFor="class" className="block text-sm text-foreground">Class</label>
                                    <div className="grid sm:grid-cols-8 sm:grid-row-2 gap-2">
                                        <label htmlFor="snursary" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="snursary" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">Nursary</span>
                                        </label>

                                        <label htmlFor="slkg" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="slkg" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">LKG</span>
                                        </label>

                                        <label htmlFor="sukg" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="sukg" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">UKG</span>
                                        </label>

                                        <label htmlFor="s1" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s1" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">1st</span>
                                        </label>
                                        <label htmlFor="s2" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s2" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">2nd</span>
                                        </label>

                                        <label htmlFor="s3" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s3" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">3rd</span>
                                        </label>

                                        <label htmlFor="s4" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s4" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">4th</span>
                                        </label>

                                        <label htmlFor="s5" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s5" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">5th</span>
                                        </label>
                                        <label htmlFor="s6" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s6" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">6th</span>
                                        </label>

                                        <label htmlFor="s7" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s7" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">7th</span>
                                        </label>

                                        <label htmlFor="s8" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s8" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">8th</span>
                                        </label>
                                        <label htmlFor="s9" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s9" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">9th</span>
                                        </label>

                                        <label htmlFor="s10" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s10" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">10th</span>
                                        </label>

                                        <label htmlFor="s11" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s11" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">11th</span>
                                        </label>

                                        <label htmlFor="s12" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-form" id="s12" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">12th</span>
                                        </label>
                                    </div>

                                    <label htmlFor="section" className="block text-sm text-foreground">Section</label>
                                    <div className="grid sm:grid-cols-8 sm:grid-row-2 gap-2">
                                        <label htmlFor="sa" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-section" id="sa" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">A</span>
                                        </label>

                                        <label htmlFor="sb" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-section" id="sb" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">B</span>
                                        </label>

                                        <label htmlFor="sc" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-section" id="sc" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">C</span>
                                        </label>

                                        <label htmlFor="sd" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-section" id="sd" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">D</span>
                                        </label>
                                        <label htmlFor="se" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                                            <input type="radio" name="hs-radio-in-section" id="se" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                            <span className="text-sm ms-3 text-muted-foreground-1">E</span>
                                        </label>
                                    </div>

                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Assign Student to class</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </SubAdmin>
    )
}

export default Assignment
