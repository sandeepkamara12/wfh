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
    sectionData,
    subjectData,
    streamData,
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
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                                {
                                    streamData?.length > 0 && streamData?.map(stream => {
                                        return (
                                            <RadioCard
                                                key={stream?.id}
                                                value={`teacher_${stream.stream}`}
                                                checked={formik.values.classroom_id === `teacher_${stream.stream}`}
                                                onChange={formik.handleChange}
                                                icon={<Pencil className="size-5" />}
                                                text={stream?.stream}
                                                group="stream"
                                                id={`teacher_${stream.stream}`}
                                            />
                                        )
                                    })
                                }
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
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                                {
                                    sectionData?.length > 0 && sectionData?.map(section => {
                                        return (
                                            <RadioCard
                                                key={section?.id}
                                                value={`teacher_${section.section}`}
                                                checked={formik.values.classroom_id === `teacher_${section.section}`}
                                                onChange={formik.handleChange}
                                                icon={<LayoutGrid className="size-5" />}
                                                text={section.section}
                                                group="section"
                                                id={`teacher_${section.section}`}
                                            />
                                        )
                                    })
                                }
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
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                                {
                                    subjectData?.length > 0 && subjectData?.map(subject => {
                                        return formik.values.assignment ? (
                                            <RadioCard
                                                key={subject?.id}
                                                value={`teacher_${subject.subject}`}
                                                checked={formik.values.classroom_id === `teacher_${subject.subject}`}
                                                onChange={formik.handleChange}
                                                icon={<BookOpenText className="size-5" />}
                                                text={subject.subject}
                                                group="subject"
                                                id={`teacher_${subject.subject}`}
                                            />
                                        ) : (
                                            <CheckboxCard
                                                key={subject?.id}
                                                // id={subject?.id}
                                                text={subject?.subject}
                                                group="subject"
                                                icon={<GraduationCap className="size-5" />}
                                                checked={formik.values.subjects.includes(subject?.subject)}
                                                onChange={() => handleChange(subject?.subject)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1">
                        <button type="submit" className="btn w-auto">
                            Assign {formik.values.assignment ? "Teacher" : "Student"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AssignTeacher;
