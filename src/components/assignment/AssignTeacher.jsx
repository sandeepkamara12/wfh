import { BookOpenText, GalleryThumbnails, LayoutGrid } from 'lucide-react'
import CustomSelect from '../ui/CustomSelect'
import { teacherOptions } from '../../const/constant'
import RadioCard from './RadioCard'

const AssignTeacher = () => {
    return (
        <form className="bg-white p-6 rounded">
            <h2 className="mb-6 font-bold text-lg">Assign <span className="text-orange">teacher</span></h2>
            <div className="grid gap-y-4">
                <CustomSelect
                    options={teacherOptions}
                    selectType="teacher"
                    label="Select Teacher"
                    placeholder="Search Teacher"
                />

                <div>
                    <label htmlFor="class" className="block text-sm font-medium text-navy mb-1">Select Classroom</label>
                    <div className="flex flex-wrap gap-4">
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Nursery" group="class" id="teacher_nursery" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="LKG" group="class" id="teacher_lkg" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="UKG" group="class" id="teacher_ukg" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="1 st" group="class" id="teacher_1" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="2 nd" group="class" id="teacher_2" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="3 rd" group="class" id="teacher_3" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="4 th" group="class" id="teacher_4" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="5 th" group="class" id="teacher_5" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="6 th" group="class" id="teacher_6" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="7 th" group="class" id="teacher_7" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="8 th" group="class" id="teacher_8" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="9 th" group="class" id="teacher_9" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="10 th" group="class" id="teacher_10" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="11 th" group="class" id="teacher_11" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="12 th" group="class" id="teacher_12" />
                    </div>
                </div>
                <div>
                    <label htmlFor="class" className="block text-sm font-medium text-navy mb-1">Select Stream</label>
                    <div className="flex flex-wrap gap-4">
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Arts" group="stream" id="teacher_arts" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Medical" group="stream" id="teacher_medical" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Non Medical" group="stream" id="teacher_non_medical" />
                        <RadioCard icon={<GalleryThumbnails className="size-5" />} text="Commerce" group="stream" id="teacher_commerce" />
                    </div>
                </div>
                <div>
                    <label htmlFor="section" className="block text-sm font-medium text-navy mb-1">Select Section</label>
                    <div className="flex flex-wrap gap-4">
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="A" group="section" id="teacher_A" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="B" group="section" id="teacher_B" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="C" group="section" id="teacher_C" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="D" group="section" id="teacher_D" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="E" group="section" id="teacher_E" />
                        <RadioCard icon={<LayoutGrid className="size-5" />} text="F" group="section" id="teacher_F" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">Select Subject</label>
                    <div className="flex flex-wrap gap-4">
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Computer" group="subject" id="teacher_computer" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Maths" group="subject" id="teacher_maths" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Hindi" group="subject" id="teacher_hindi" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="English" group="subject" id="teacher_english" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Science" group="subject" id="teacher_science" />
                        <RadioCard icon={<BookOpenText className="size-5" />} text="Social Studies" group="subject" id="teacher_social_studies" />
                    </div>
                </div>

                <button type="submit" className="btn">Assign Teacher</button>
            </div>
        </form>
    )
}

export default AssignTeacher
