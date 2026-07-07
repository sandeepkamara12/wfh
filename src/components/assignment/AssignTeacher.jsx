import { useEffect, useMemo, useRef } from "react";
import {
    BookOpenText,
    CircleDollarSign,
    Flag,
    FlaskConical,
    GalleryThumbnails,
    GraduationCap,
    Guitar,
    LayoutGrid,
    Network,
    PanelLeftClose,
    Pencil,
    Stethoscope,
    UserRoundPen,
    X,
} from "lucide-react";
import CustomSelect from "../ui/CustomSelect";
import {
    classOptions,
    subjectOptions,
    studentOptions,
    teacherOptions,
} from "../../const/constant";
import RadioCard from "./RadioCard";
import CheckboxCard from "../ui/CheckboxCard";
import { useState } from "react";
import Switch from "../ui/Switch";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

const AssignTeacher = () => {
    const { toggleSidebar } = useOutletContext();
    let user = useSelector((state) => state.auth.user);
    const [selected, setSelected] = useState([]);

    const subjects = ["Computer", "Maths", "Hindi", "English", "Science", "Social Studies"];

    const handleChange = (cls) => {
        const newValues = formik.values.subjects.includes(cls)
            ? formik.values.subjects.filter((c) => c !== cls)
            : [...formik.values.subjects, cls];

        formik.setFieldValue("subjects", newValues);
        // setSelected((prev) =>
        //     prev.includes(cls)
        //         ? prev.filter((c) => c !== cls)
        //         : [...prev, cls]
        // );
    };

    // Handle Married or not
    const handleAssignment = (e) => {
        const assignment = e.target.checked;
        formik.resetForm({
            values: {
                assignment,
                teacher_id: "",
                student_id: "",
                classroom_id: "",
                stream_id: "",
                section_id: "",
                subjects: [],
                sub_admin_id: user?.id || "",
            },
        });
        setSelected([]);
    };

    //Validations
    const validationSchema = Yup.object({
        classroom_id: Yup.string().required("Classroom ID is required"),
        stream_id: Yup.string().required("Stream ID is required"),
        section_id: Yup.string().required("Section ID is required"),
        subjects: Yup.array().of(Yup.string()).required("Subjects are required"),
        teacher_id: Yup.string().when("assignment", {
            is: true,
            then: (schema) => schema.required("Teacher ID is required"),
        }),

        student_id: Yup.string().when("assignment", {
            is: false,
            then: (schema) => schema.required("Student ID is required"),
        }),
    });

    const formik = useFormik({
        initialValues: {
            teacher_id: "teacher",
            classroom_id: "",
            stream_id: "",
            section_id: "",
            subjects: [],
            assignment: true,
            student_id: "student",
            sub_admin_id: user?.id || "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => { },
    });

    return (
        <form className="">
            <div className="grid gap-y-4">
                {/* <div className="grid grid-cols-2 gap-6"> */}
                <div className="col-span-2 grid grid-cols-1 gap-6 bg-white p-6 rounded">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-2 ">
                        <div className="flex flex-wrap items-center gap-2">
                            <PanelLeftClose className="size-5 flex" onClick={toggleSidebar} />
                            <h2 className="font-bold text-lg">
                                Assign{" "}
                                <span className="text-orange">
                                    {formik.values.assignment ? "Teacher" : "Student"}
                                </span>
                            </h2>
                        </div>
                        <Switch
                            onChangeHandler={handleAssignment}
                            previousLabel={"Student"}
                            label={"Teacher"}
                            checked={formik.values.assignment}
                        />
                    </div>
                    <div className="col-span-1 grid items-start gap-y-4 ">

                        <div className="flex items-center gap-2">
                            <span className="bg-navy size-10 rounded text-white flex items-center justify-center">01</span>
                            <div className="flex flex-col">
                                <span className="font-medium text-xs">Choose</span>
                                <span className="font-medium text-sm leading-4">{formik.values.assignment ? "Teacher" : "Student"}</span>
                            </div>
                        </div>

                        <div>
                            {formik.values.assignment ? (
                                <CustomSelect
                                    options={teacherOptions}
                                    selectType="teacher"
                                    label=""
                                    placeholder="Search Teacher"
                                    value={
                                        teacherOptions.find(
                                            (opt) => opt.value === formik.values.teacher_id,
                                        ) || null
                                    }
                                    onChange={(option) =>
                                        formik.setFieldValue("teacher_id", option?.value || "")
                                    }
                                    {...formik.getFieldProps("teacher_id")}
                                    error={formik.touched.teacher_id && formik.errors.teacher_id}
                                />
                            ) : (
                                <CustomSelect
                                    options={studentOptions}
                                    selectType="student"
                                    label=""
                                    placeholder="Search Student"
                                    value={
                                        studentOptions.find(
                                            (opt) => opt.value === formik.values.student_id,
                                        ) || null
                                    }
                                    onChange={(option) =>
                                        formik.setFieldValue("student_id", option?.value || "")
                                    }
                                    {...formik.getFieldProps("student_id")}
                                    error={formik.touched.student_id && formik.errors.student_id}
                                />
                            )}
                        </div>

                    </div>

                    <div className="col-span-1 grid gap-y-4 ">
                        <div className="flex items-center gap-2">
                            <span className="bg-navy size-10 rounded text-white flex items-center justify-center">02</span>
                            <div className="flex flex-col">
                                <span className="font-medium text-xs">Choose</span>
                                <span className="font-medium text-sm leading-4">Classroom</span>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                                {classOptions !== null &&
                                    classOptions.map((cls) => (
                                        <RadioCard
                                            key={`teacher_${cls.value}`}
                                            value={`teacher_${cls.value}`}
                                            checked={formik.values.classroom_id === `teacher_${cls.value}`}
                                            onChange={formik.handleChange}
                                            icon={<GalleryThumbnails className="size-5" />}
                                            text={cls.label}
                                            group="class"
                                            id={`teacher_${cls.value}`}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 grid gap-y-4 ">
                        <div className="flex items-center gap-2">
                            <span className="bg-navy size-10 rounded text-white flex items-center justify-center">03</span>
                            <div className="flex flex-col">
                                <span className="font-medium text-xs">Choose</span>
                                <span className="font-medium text-sm leading-4">Stream</span>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                                <RadioCard
                                    value="teacher_arts"
                                    checked={formik.values.classroom_id === "teacher_arts"}
                                    onChange={formik.handleChange}
                                    icon={<Pencil className="size-5" />}
                                    text="Arts"
                                    group="stream"
                                    id="teacher_arts"
                                />
                                <RadioCard
                                    value="teacher_medical"
                                    checked={formik.values.classroom_id === "teacher_medical"}
                                    onChange={formik.handleChange}
                                    icon={<Stethoscope className="size-5" />}
                                    text="Medical"
                                    group="stream"
                                    id="teacher_medical"
                                />
                                <RadioCard
                                    value="teacher_non_medical"
                                    checked={formik.values.classroom_id === "teacher_non_medical"}
                                    onChange={formik.handleChange}
                                    icon={<FlaskConical className="size-5" />}
                                    text="Non Medical"
                                    group="stream"
                                    id="teacher_non_medical"
                                />
                                <RadioCard
                                    value="teacher_commerce"
                                    checked={formik.values.classroom_id === "teacher_commerce"}
                                    onChange={formik.handleChange}
                                    icon={<CircleDollarSign className="size-5" />}
                                    text="Commerce"
                                    group="stream"
                                    id="teacher_commerce"
                                />
                                <RadioCard
                                    value="teacher_music"
                                    checked={formik.values.classroom_id === "teacher_music"}
                                    onChange={formik.handleChange}
                                    icon={<Guitar className="size-5" />}
                                    text="Music"
                                    group="stream"
                                    id="teacher_music"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 grid gap-y-4 ">
                        <div className="flex items-center gap-2">
                            <span className="bg-navy size-10 rounded text-white flex items-center justify-center">04</span>
                            <div className="flex flex-col">
                                <span className="font-medium text-xs">Choose</span>
                                <span className="font-medium text-sm leading-4">Section</span>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                                <RadioCard
                                    value="teacher_A"
                                    checked={formik.values.classroom_id === "teacher_A"}
                                    onChange={formik.handleChange}
                                    icon={<LayoutGrid className="size-5" />}
                                    text="A"
                                    group="section"
                                    id="teacher_A"
                                />
                                <RadioCard
                                    value="teacher_B"
                                    checked={formik.values.classroom_id === "teacher_B"}
                                    onChange={formik.handleChange}
                                    icon={<LayoutGrid className="size-5" />}
                                    text="B"
                                    group="section"
                                    id="teacher_B"
                                />
                                <RadioCard
                                    value="teacher_C"
                                    checked={formik.values.classroom_id === "teacher_C"}
                                    onChange={formik.handleChange}
                                    icon={<LayoutGrid className="size-5" />}
                                    text="C"
                                    group="section"
                                    id="teacher_C"
                                />
                                <RadioCard
                                    value="teacher_D"
                                    checked={formik.values.classroom_id === "teacher_D"}
                                    onChange={formik.handleChange}
                                    icon={<LayoutGrid className="size-5" />}
                                    text="D"
                                    group="section"
                                    id="teacher_D"
                                />
                                <RadioCard
                                    value="teacher_E"
                                    checked={formik.values.classroom_id === "teacher_E"}
                                    onChange={formik.handleChange}
                                    icon={<LayoutGrid className="size-5" />}
                                    text="E"
                                    group="section"
                                    id="teacher_E"
                                />
                                <RadioCard
                                    value="teacher_F"
                                    checked={formik.values.classroom_id === "teacher_F"}
                                    onChange={formik.handleChange}
                                    icon={<LayoutGrid className="size-5" />}
                                    text="F"
                                    group="section"
                                    id="teacher_F"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 grid gap-y-4 ">
                        <div className="flex items-center gap-2">
                            <span className="bg-navy size-10 rounded text-white flex items-center justify-center">05</span>
                            <div className="flex flex-col">
                                <span className="font-medium text-xs">Choose</span>
                                <span className="font-medium text-sm leading-4">Subject</span>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                                <RadioCard
                                    value="teacher_computer"
                                    checked={formik.values.classroom_id === "teacher_computer"}
                                    onChange={formik.handleChange}
                                    icon={<BookOpenText className="size-5" />}
                                    text="Computer"
                                    group="subject"
                                    id="teacher_computer"
                                />
                                <RadioCard
                                    value="teacher_maths"
                                    checked={formik.values.classroom_id === "teacher_maths"}
                                    onChange={formik.handleChange}
                                    icon={<BookOpenText className="size-5" />}
                                    text="Maths"
                                    group="subject"
                                    id="teacher_maths"
                                />
                                <RadioCard
                                    value="teacher_hindi"
                                    checked={formik.values.classroom_id === "teacher_hindi"}
                                    onChange={formik.handleChange}
                                    icon={<BookOpenText className="size-5" />}
                                    text="Hindi"
                                    group="subject"
                                    id="teacher_hindi"
                                />
                                <RadioCard
                                    value="teacher_english"
                                    checked={formik.values.classroom_id === "teacher_english"}
                                    onChange={formik.handleChange}
                                    icon={<BookOpenText className="size-5" />}
                                    text="English"
                                    group="subject"
                                    id="teacher_english"
                                />
                                <RadioCard
                                    value="teacher_science"
                                    checked={formik.values.classroom_id === "teacher_science"}
                                    onChange={formik.handleChange}
                                    icon={<BookOpenText className="size-5" />}
                                    text="Science"
                                    group="subject"
                                    id="teacher_science"
                                />
                                <RadioCard
                                    value="teacher_social_studies"
                                    checked={
                                        formik.values.classroom_id === "teacher_social_studies"
                                    }
                                    onChange={formik.handleChange}
                                    icon={<BookOpenText className="size-5" />}
                                    text="Social Studies"
                                    group="subject"
                                    id="teacher_social_studies"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 hidden gap-y-4 ">
                        <div className="flex items-center gap-2">
                            <span className="bg-navy size-10 rounded text-white flex items-center justify-center">05</span>
                            <div className="flex flex-col">
                                <span className="font-medium text-xs">Choose</span>
                                <span className="font-medium text-sm leading-4">Subject</span>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-navy mb-1"
                            >
                                Select Subject
                                <span className="text-red-500 ms-1">
                                    (Multiple subjects selectable)
                                </span>
                            </label>
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                                {subjects.map((cls) => (
                                    <CheckboxCard
                                        key={cls}
                                        id={cls}
                                        text={cls}
                                        group="subject"
                                        icon={<GraduationCap className="size-5" />}
                                        checked={formik.values.subjects.includes(cls)}
                                        onChange={() => handleChange(cls)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1">
                        <button type="submit" className="btn w-auto">
                            Assign {formik.values.assignment ? "Teacher" : "Student"}
                        </button>
                    </div>
                </div>
                {/* <div className="flex bg-white p-4 rounded">
                        <h2 className="font-bold text-lg mb-6">Recently Assigned <span className="text-orange">Teacher</span></h2>
                        <div className="grid gap-4">
                            <div className="bg-navy/10 p-2 rounded shadow-md">
                                <div className="flex gap-2 items-start justify-between relative pe-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                            <img src="/student.jpg" alt="student/teacher" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-navy font-medium">Mrs. Anita Rai</span>
                                            <span className="text-xs text-red-500 font-medium">#1234567890</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold">
                                        <span>In charge of:
                                            <span className='font-semibold text-xs relative'>
                                                <span className="text-orange">10th A </span>
                                                <span className='text-navy'>Medical - Maths</span>
                                            </span>
                                        </span>
                                    </span>
                                    <X className='size-4 absolute right-0 top-px text-red-500' />
                                </div>
                                <span className="flex flex-wrap items-center gap-1">
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">10th A </span>
                                        <span className='text-navy'>Medical - Maths</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">12th B </span>
                                        <span className='text-navy'>Medical - Science</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">8th C </span>
                                        <span className='text-navy'>English</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                </span>
                            </div>
                            <div className="bg-navy/10 p-2 rounded shadow-md">
                                <div className="flex gap-2 items-start justify-between relative pe-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                            <img src="/student.jpg" alt="student/teacher" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-navy font-medium">Mrs. Anita Rai</span>
                                            <span className="text-xs text-red-500 font-medium">#1234567890</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold">
                                        <span>In charge of:
                                            <span className='font-semibold text-xs relative'>
                                                <span className="text-orange">10th A </span>
                                                <span className='text-navy'>Medical - Maths</span>
                                            </span>
                                        </span>
                                    </span>
                                    <X className='size-4 absolute right-0 top-px text-red-500' />
                                </div>
                                <span className="flex flex-wrap items-center gap-1">
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">10th A </span>
                                        <span className='text-navy'>Medical - Maths</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">12th B </span>
                                        <span className='text-navy'>Medical - Science</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">8th C </span>
                                        <span className='text-navy'>English</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                </span>
                            </div>
                            <div className="bg-navy/10 p-2 rounded shadow-md">
                                <div className="flex gap-2 items-start justify-between relative pe-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                            <img src="/student.jpg" alt="student/teacher" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-navy font-medium">Mrs. Anita Rai</span>
                                            <span className="text-xs text-red-500 font-medium">#1234567890</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold">
                                        <span>In charge of:
                                            <span className='font-semibold text-xs relative'>
                                                <span className="text-orange">10th A </span>
                                                <span className='text-navy'>Medical - Maths</span>
                                            </span>
                                        </span>
                                    </span>
                                    <X className='size-4 absolute right-0 top-px text-red-500' />
                                </div>
                                <span className="flex flex-wrap items-center gap-1">
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">10th A </span>
                                        <span className='text-navy'>Medical - Maths</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">12th B </span>
                                        <span className='text-navy'>Medical - Science</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-semibold text-xs relative'>
                                        <span className="text-orange">8th C </span>
                                        <span className='text-navy'>English</span>
                                        <X className='size-4 absolute right-1.5 text-red-500' />
                                    </div>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </form>
    );
};

export default AssignTeacher;
