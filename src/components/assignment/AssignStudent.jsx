import RadioCard from './RadioCard'
import { BookOpenText, GalleryThumbnails, LayoutGrid } from 'lucide-react'
import CustomSelect from '../ui/CustomSelect'
import { studentOptions } from '../../const/constant'

const AssignStudent = () => {
    return (
        <form className="bg-white p-6 rounded">
            <h2 className="mb-6 font-bold text-lg">Assign <span className="text-orange">student</span></h2>
            <div className="grid gap-y-4">
                <CustomSelect
                    options={studentOptions}
                    selectType="student"
                    label="Select Student"
                    placeholder="Search Student"
                />
                <div>

                    <label htmlFor="class" className="block text-sm font-medium text-navy mb-1">Select Classroom</label>
                    <div className="grid grid-cols-3 gap-2">
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Nursery" group="class" id="student_nursery" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="LKG" group="class" id="student_lkg" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="UKG" group="class" id="student_ukg" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="1 st" group="class" id="student_1" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="2 nd" group="class" id="student_2" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="3 rd" group="class" id="student_3" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="4 th" group="class" id="student_4" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="5 th" group="class" id="student_5" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="6 th" group="class" id="student_6" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="7 th" group="class" id="student_7" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="8 th" group="class" id="student_8" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="9 th" group="class" id="student_9" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="10 th" group="class" id="student_10" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="11 th" group="class" id="student_11" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="12 th" group="class" id="student_12" />
                    </div>
                </div>
                <div>
                    <label htmlFor="class" className="block text-sm font-medium text-navy mb-1">Select Stream</label>
                    <div className="grid grid-cols-2 gap-2">
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Arts" group="stream" id="student_arts" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Medical" group="stream" id="student_medical" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Non Medical" group="stream" id="student_non_medical" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Commerce" group="stream" id="student_commerce" />
                    </div>
                </div>
                <div>
                    <label htmlFor="section" className="block text-sm font-medium text-navy mb-1">Select Section</label>
                    <div className="grid grid-cols-3 gap-2">
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="A" group="section" id="student_A" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="B" group="section" id="student_B" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="C" group="section" id="student_C" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="D" group="section" id="student_D" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="E" group="section" id="student_E" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="F" group="section" id="student_F" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">Select Subject</label>
                    <div className="grid grid-cols-2 gap-2">
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Computer" group="subject" id="student_computer" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Maths" group="subject" id="student_maths" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Hindi" group="subject" id="student_hindi" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="English" group="subject" id="student_english" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Science" group="subject" id="student_science" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Social Studies" group="subject" id="student_social_studies" />
                    </div>
                </div>

                <button type="submit" className="btn">Assign Student</button>
            </div>

        </form>
    )
}

export default AssignStudent
