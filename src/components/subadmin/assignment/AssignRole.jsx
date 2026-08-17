import {
    BookOpenText,
    Download,
    GalleryThumbnails,
    GraduationCap,
    LayoutGrid,
    Network,
} from "lucide-react";
import CustomSelect from "../../ui/CustomSelect";
import {
    studentOptions,
    teacherOptions,
    subjectData,
} from "../../../const/constant";
import RadioCard from "../../ui/RadioCard";
import CheckboxCard from "../../ui/CheckboxCard";
import { useEffect, useState } from "react";
import Switch from "../../ui/Switch";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { getClassroomThunk } from "../../../features/subAdmin/classroomSlice";
import { getSectionThunk } from "../../../features/subAdmin/sectionSlice";
import { getStreamThunk } from "../../../features/subAdmin/streamSlice";
import axiosInstance from "../../../axiosinstance";
import { assignRoleThunk } from "../../../features/subAdmin/createRoleSlice";

const AssignRole = () => {
    const { toggleSidebar } = useOutletContext();
    let user = useSelector((state) => state.auth.user);
    const [selected, setSelected] = useState([]);

    let classrooms = useSelector(state => state.classroom.classrooms);
    let streams = useSelector(state => state.stream.streams);
    let sections = useSelector(state => state.section.sections);

    const { setClassrooms, setSections, setStreams } = useOutletContext();
    const { loading } = useSelector(state => state.role.loading);
    const dispatch = useDispatch();

    // Get Classrooms on component mount
    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                const result = await dispatch(getClassroomThunk()).unwrap();
                if (result?.success) {
                    setClassrooms(result?.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        const fetchSections = async () => {
            try {
                const result = await dispatch(getSectionThunk()).unwrap();
                if (result?.success) {
                    setSections(result?.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        const fetchStreams = async () => {
            try {
                const result = await dispatch(getStreamThunk()).unwrap();
                if (result?.success) {
                    setStreams(result?.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchClassrooms();
        fetchSections();
        fetchStreams();
    }, []);

    const handleChange = (cls) => {
        const newValues = formik.values.subjects.includes(cls)
            ? formik.values.subjects.filter((c) => c !== cls)
            : [...formik.values.subjects, cls];

        formik.setFieldValue("subjects", newValues);
    };

    // Handle Married or not
    const handleAssignment = (e) => {
        const assignment = e.target.checked;
        formik.resetForm({
            values: {
                assignment,
                teacher_id: "",
                student_id: "",
                class_id: "",
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
        class_id: Yup.string().required("Classroom ID is required"),
        stream_id: Yup.string().required("Stream ID is required"),
        section_id: Yup.string().required("Section ID is required"),
        subject_id: Yup.string().required("Subject ID is required"),
        // subjects: Yup.array().of(Yup.string()).required("Subjects are required"),
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
            teacher_id: null,
            class_id: "",
            stream_id: "",
            section_id: "",
            subject_id: "",
            class_incharge: false,
            session: '2024-2025',
            assignment: true,
            // student_id: "student",
            sub_admin_id: user?.id || "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const result = await dispatch(
                    assignRoleThunk(values)
                );

                console.log(result, "result");
            } catch (error) {
                console.log(error);
            }
        },
    });
    // console.log(formik, 'hi');
    return (
        <form className="assignment" onSubmit={formik.handleSubmit}>
            <div className="grid gap-y-4">
                {/* <div className="grid grid-cols-2 gap-6"> */}
                <div className="col-span-2 grid grid-cols-1 gap-6 lg:bg-white lg:p-6 rounded">
                    <div className="flex items-center justify-between gap-6 ">
                        <div className="flex flex-wrap gap-2">
                            <h2 className="font-bold text-lg text-orange">
                                Assignment
                                {/* <span className="text-orange">
                                    {formik.values.assignment ? "Teacher" : "Student"}
                                </span> */}
                            </h2>
                        </div>
                        <button className="btn icon_btn w-auto">
                            <Download className="size-5 shrink-0" />
                        </button>
                    </div>
                    <div className="col-span-1">
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
                                    onBlur={() => formik.setFieldTouched("teacher_id", true)}
                                    // {...formik.getFieldProps("teacher_id")}
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
                                    onBlur={() => formik.setFieldTouched("student_id", true)}
                                    // {...formik.getFieldProps("student_id")}
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
                            <div className="grid grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2">
                                {classrooms?.length > 0 &&
                                    classrooms.map((cls) => (
                                        <RadioCard
                                            value={cls.id}
                                            name="class_id"
                                            checked={formik.values.class_id === String(cls?.id)}
                                            onChange={formik.handleChange}
                                            icon={<GalleryThumbnails className="size-5" />}
                                            text={cls.name}
                                            id={`class-${cls.id}`}
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
                            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2">
                                {
                                    streams?.length > 0 && streams?.map(stream => {
                                        return (
                                            <RadioCard
                                                value={stream.id}
                                                checked={formik.values.stream_id === String(stream.id)}
                                                onChange={formik.handleChange}
                                                icon={<Network className="size-5" />}
                                                text={stream?.name}
                                                name="stream_id"
                                                id={`stream-${stream.id}`}
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2">
                                {
                                    sections?.length > 0 && sections?.map(section => {
                                        return (
                                            <RadioCard
                                                value={section.id}
                                                checked={formik.values.section_id === String(section.id)}
                                                onChange={formik.handleChange}
                                                icon={<LayoutGrid className="size-5" />}
                                                text={section.name}
                                                name="section_id"
                                                id={`section-${section.id}`}
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2">
                                {
                                    subjectData?.length > 0 && subjectData?.map(subject => {
                                        return formik.values.assignment ? (
                                            <RadioCard
                                                value={subject.id}
                                                checked={formik.values.subject_id === String(subject.id)}
                                                onChange={formik.handleChange}
                                                icon={<BookOpenText className="size-5" />}
                                                text={subject.subject}
                                                name="subject_id"
                                                id={`subject-${subject.id}`}
                                            />
                                        ) : (
                                            <></>
                                            // <CheckboxCard
                                            //     key={subject?.id}
                                            //     // id={subject?.id}
                                            //     text={subject?.subject}
                                            //     group="subject"
                                            //     icon={<GraduationCap className="size-5" />}
                                            //     checked={formik.values.subjects.includes(subject?.subject)}
                                            //     onChange={() => handleChange(subject?.subject)}
                                            // />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-start-1">
                        <button type="submit" className="btn btn_with_text w-auto" disabled={loading?.assignRole || !(formik.isValid && formik.dirty)}>
                            Assign {formik.values.assignment ? "Teacher" : "Student"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AssignRole;
