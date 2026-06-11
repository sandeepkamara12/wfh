import { BookOpenText, GalleryThumbnails, LayoutGrid } from "lucide-react";
import Card from "../components/assignment/Card"
import SubAdmin from "../SubAdmin"
import RadioCard from "../components/assignment/RadioCard";
import CustomSelect from "../components/ui/CustomSelect";
import { studentOptions, teacherOptions } from "../const/constant";

const Assignment = () => {
    // const studentOptions = [
    //     { value: '1235678940', label: 'Harmeet Singh', image: "/student.jpg" },
    //     { value: '2457896310', label: 'Jaswant Singh', image: "/student.jpg" },
    //     { value: '0265314789', label: 'Sandeep Singh', image: "/student.jpg" }
    // ];
    // const teacherOptions = [
    //     { value: '1235678941', label: 'Mrs. Anita Rai', image: "/student.jpg" },
    //     { value: '2457896312', label: 'Mrs. Sonam Kapoor', image: "/student.jpg" },
    //     { value: '0265314783', label: 'Mr. Rohit Sharma', image: "/student.jpg" }
    // ];

    return (
        <SubAdmin>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:grid-row-2 gap-4">
                <Card label="Total Teachers" count="72" id="teacher" />
                <Card label="Total Students" count="7200" id="student" />
                <Card label="Total Wards" count="12" id="ward" />
                <Card label="Total Sections" count="5" id="section" />
                <Card label="Total Subjects" count="10" id="subject" />
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <div className="min-w-full align-middle grid grid-cols-6 gap-4">
                        <div className="col-span-2">
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
                                        <label htmlFor="class" className="block text-sm font-medium text-navy mb-1">Select Ward</label>
                                        <div className="flex flex-wrap gap-2">
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
                                        <label htmlFor="section" className="block text-sm font-medium text-navy mb-1">Select Section</label>
                                        <div className="flex flex-wrap gap-2">
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
                                        <div className="flex flex-wrap gap-2">
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
                        </div>

                        <div className="col-span-2">
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

                                        <label htmlFor="class" className="block text-sm font-medium text-navy mb-1">Select Ward</label>
                                        <div className="flex flex-wrap gap-2">
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
                                        <label htmlFor="section" className="block text-sm font-medium text-navy mb-1">Select Section</label>
                                        <div className="flex flex-wrap gap-2">
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
                                        <div className="flex flex-wrap gap-2">
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
                        </div>
                    </div>
                </div>
            </div>
        </SubAdmin>
    )
}

export default Assignment
