import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Note from "../components/Note";
import { BookOpenText } from "lucide-react";
import RadioCard from "../components/assignment/RadioCard";

const UploadDocument = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [preview, setPreview] = useState(null);

    const captureImage = (e) => {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                setPreview(url);
                // document.getElementById("preview").src = url;
            }
    }

    return (
        <div className="grid grid-cols-2 gap-4">
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

                <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    id="cameraInput"
                    onChange={captureImage}
                />

                <img id="preview" width="200" src={preview} />

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
    )
}

export default UploadDocument
