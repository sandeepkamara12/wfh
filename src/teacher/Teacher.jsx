import DatePicker from "react-datepicker";
import SubjectCard from "../components/SubjectCard"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Ward from "../components/Ward";
import Section from "../components/Section";
import Note from "../components/Note";
import SidebarLayout from "../layout/SidebarLayout";
import { BookOpenText, CalendarDays, GalleryThumbnails, LayoutGrid, Mail, Phone, UserRound, UserRoundPen } from "lucide-react";
import RadioCard from "../components/assignment/RadioCard";

const Teacher = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <SidebarLayout>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 flex gap-x-4 bg-white p-4 rounded">
                    <div className="shrink-0">
                        <img className="shrink-0 size-32 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                    </div>

                    <div className="text-sm text-navy grow flex flex-wrap flex-col gap-2">
                        <div>
                            <span class="font-semibold tracking-wide pt-0.5 pb-1 px-2 rounded-full text-xs bg-navy/10">#2154879633</span>
                            <h2 className="font-bold text-lg mt-2 mb-1">
                                Mrs. Garima
                                <span className="ml-2 inline-flex flex-wrap items-center gap-1 text-xs font-semibold lowercase first-letter:uppercase">
                                    <CalendarDays className="size-4" />
                                    30 Years
                                </span>
                            </h2>
                            <div className="flex flex-wrap flex-col gap-1">
                                <span className="flex flex-wrap items-center gap-1">
                                    <UserRoundPen className="size-4" /> 12th
                                    <span className="text-orange">A</span>
                                    <span className="text-xs font-medium">Non Medical</span>
                                </span>

                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="flex flex-wrap items-center gap-1">
                                        <Mail className="size-4" />
                                        sandeep.d4d@gmail.com
                                    </span>
                                    <span className="flex flex-wrap items-center gap-1">
                                        <Phone className="size-4" />
                                        7986584210
                                    </span>
                                </div>
                                <span className="flex flex-wrap items-center gap-1">
                                    <UserRound className="size-4" />
                                    Mr. John Doe
                                </span>
                            </div>
                        </div>
                        <div className="hidden">
                            <address className="not-italic">
                                Street No. 5, Green Park,<br />
                                New Delhi, 141550 <br />
                                India
                            </address>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 col-start-1 bg-white p-4 rounded">

                    <h2 className="font-bold text-lg mb-4">Upload documents</h2>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-navy mb-1">Select Classroom</label>
                        <div className="flex flex-wrap gap-2">
                            <RadioCard icon={""} text="1 st" group="class" id="teacher_1" />
                            <RadioCard icon={""} text="2 nd" group="class" id="teacher_2" />
                            <RadioCard icon={""} text="3 rd" group="class" id="teacher_3" />
                            <RadioCard icon={""} text="4 th" group="class" id="teacher_4" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-navy mb-1">Select Stream</label>
                        <div className="flex flex-wrap gap-2">
                            <RadioCard icon={""} text="Arts" group="stream" id="teacher_arts" />
                            <RadioCard icon={""} text="Medical" group="stream" id="teacher_medical" />
                            <RadioCard icon={""} text="Non Medical" group="stream" id="teacher_non_medical" />
                            <RadioCard icon={""} text="Commerce" group="stream" id="teacher_commerce" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-navy mb-1">Select Section</label>
                        <div className="flex flex-wrap gap-2">
                            <RadioCard icon={""} text="A" group="section" id="teacher_A" />
                            <RadioCard icon={""} text="B" group="section" id="teacher_B" />
                            <RadioCard icon={""} text="C" group="section" id="teacher_C" />
                            <RadioCard icon={""} text="D" group="section" id="teacher_D" />
                            <RadioCard icon={""} text="E" group="section" id="teacher_E" />
                            <RadioCard icon={""} text="F" group="section" id="teacher_F" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-navy mb-1">Select Subject</label>
                        <div className="flex flex-wrap gap-2">
                            <RadioCard icon={<BookOpenText className="size-5" />} text="Computer" group="subject" id="teacher_computer" />
                            <RadioCard icon={<BookOpenText className="size-5" />} text="Maths" group="subject" id="teacher_maths" />
                            <RadioCard icon={<BookOpenText className="size-5" />} text="Hindi" group="subject" id="teacher_hindi" />
                            <RadioCard icon={<BookOpenText className="size-5" />} text="English" group="subject" id="teacher_english" />
                            <RadioCard icon={<BookOpenText className="size-5" />} text="Science" group="subject" id="teacher_science" />
                            <RadioCard icon={<BookOpenText className="size-5" />} text="Social Studies" group="subject" id="teacher_social_studies" />
                        </div>
                    </div>


                    {/* <div className="mt-8 grid grid-cols-6 gap-4">
                        <SubjectCard id="randomMaths" name="random" subject={"Maths"} status="uploaded" />
                        <SubjectCard id="randomHindi" name="random" subject={"Hindi"} status="pending" />
                        <SubjectCard id="randomEnglish" name="random" subject={"English"} status="uploaded" />
                        <SubjectCard id="randomEVS" name="random" subject={"EVS"} status="uploaded" />
                    </div> */}

                    {
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-navy mb-1">Select Date</label>
                            <DatePicker calendarClassName="custom-calendar" className="custom-datepicker-input" selected={selectedDate} onChange={(date) => { setSelectedDate(date); }} inline />
                        </div>
                    }
                    {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>}


                    <div className="grid grid-cols-20 gap-4">
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                    </div>
                </div>
            </div>

        </SidebarLayout>
    )
}

export default Teacher
