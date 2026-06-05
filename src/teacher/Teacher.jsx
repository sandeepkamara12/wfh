import DatePicker from "react-datepicker";
import SubjectCard from "../components/SubjectCard"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Ward from "../components/Ward";
import Section from "../components/Section";
import Note from "../components/Note";
import SidebarLayout from "../layout/SidebarLayout";

const Teacher = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <SidebarLayout>
            <div className="flex gap-x-3">
                <div className="shrink-0">
                    <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                </div>

                <div className="grow">
                    <p>Teacher Id: #0012546975</p>
                    <h1 className="text-lg font-medium text-foreground">
                        Teacher Garima
                    </h1>
                    <p className="text-sm text-muted-foreground-2">
                        Class Incharge: 3rd, Section: A
                    </p>
                    <p className="text-sm text-muted-foreground-2">
                        Age: 30 Years, Spouse: John Doe, Phone: 7986584210
                    </p>
                    <p className="text-sm text-muted-foreground-2">
                        Email: <a href="mailto:sandeep.d4d@gmail.com" className="text-sm text-muted-foreground-2">sandeep.d4d@gmail.com</a>
                    </p>
                    <address className="text-sm text-muted-foreground-2 mt-2">
                        Street No. 5, Green Park,<br />
                        New Delhi, 141550 <br />
                        India
                    </address>
                </div>
            </div>


            <h3 className="text-lg font-medium text-foreground">
                Upload documents
            </h3>
            <h3 className="text-lg font-medium text-foreground">
                Select Ward
            </h3>

            <div className="mt-8 grid grid-cols-10 gap-4">
                <Ward ward="3rd" id="3rd" name="ward" />
                <Ward ward="4th" id="4th" name="ward" />
                <Ward ward="5th" id="5th" name="ward" />
                <Ward ward="6th" id="6th" name="ward" />
                <Ward ward="7th" id="7th" name="ward" />
                <Ward ward="8th" id="8th" name="ward" />
                <Ward ward="9th" id="9th" name="ward" />
            </div>

            <h3 className="text-lg font-medium text-foreground">
                Select Section
            </h3>

            <div className="mt-8 grid grid-cols-10 gap-4">
                <Section section="A" id="A" name="section" />
                <Section section="B" id="B" name="section" />
                <Section section="C" id="C" name="section" />
                <Section section="D" id="D" name="section" />
                <Section section="E" id="E" name="section" />
                <Section section="F" id="F" name="section" />
                <Section section="G" id="G" name="section" />
            </div>

            <div className="mt-8 grid grid-cols-6 gap-4">
                <SubjectCard id="randomMaths" name="random" subject={"Maths"} status="uploaded" />
                <SubjectCard id="randomHindi" name="random" subject={"Hindi"} status="pending" />
                <SubjectCard id="randomEnglish" name="random" subject={"English"} status="uploaded" />
                <SubjectCard id="randomEVS" name="random" subject={"EVS"} status="uploaded" />
            </div>

            {
                <DatePicker selected={selectedDate} onChange={(date) => { setSelectedDate(date); }} inline />
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

        </SidebarLayout>
    )
}

export default Teacher
