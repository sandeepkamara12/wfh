// import Card from "./components/common/Card"
// import Table from "./components/Table"
import DatePicker from "react-datepicker";
import SubjectCard from "../components/SubjectCard"
// import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Note from "../components/Note";
import SidebarLayout from "../layout/SidebarLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import RadioCard from "../components/assignment/RadioCard";
import { BookOpenText } from "lucide-react";

const Student = () => {
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const validationSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        dob: Yup.date().nullable().required("Date of birth is required"),
        gender: Yup.string().required("Gender is required"),
        spouse_name: Yup.string().when("married", {
            is: true,
            then: (schema) => schema.required("Spouse name is required"),
        }),
        father_name: Yup.string().when(["role", "married"], {
            is: (role, married) => role === "student" || (role === "teacher" && !married),
            then: (schema) => schema.required("Father name is required"),
        }),

        mother_name: Yup.string().when(["role", "married"], {
            is: (role, married) => role === "student" || (role === "teacher" && !married),
            then: (schema) => schema.required("Mother name is required"),
        }),
        file: Yup.mixed()
            .required("File required")
            .test("fileType", "only .png, .jpg, .jpeg are allowed", (value) => {
                if (!value) return false;

                const validTypes = ["image/jpeg", "image/png"];
                const validExtensions = [".jpg", ".jpeg", ".png"];

                const isValidType = validTypes.includes(value.type);
                const isValidExt = validExtensions.some(ext =>
                    value.name.toLowerCase().endsWith(ext)
                );

                return isValidType && isValidExt;
            })
    });

    const formik = useFormik({
        initialValues: {
            role: "teacher",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            married: false,
            spouse_name: "",
            father_name: "",
            mother_name: "",
            dob: null,
            gender: "male",
            file: null
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            // const payload = buildPayload(values);
            // for (let [key, value] of payload.entries()) {
            //     console.log(key, value);
            // }
            // try {
            //     const result = await dispatch(createRoleThunk({ payload })).unwrap();

            //     if (result.success) {
            //         toast.success(result.message);
            //         resetForm({
            //             values: {
            //                 role: "teacher",
            //                 first_name: "",
            //                 last_name: "",
            //                 email: "",
            //                 phone: "",
            //                 married: false,
            //                 spouse_name: "",
            //                 father_name: "",
            //                 mother_name: "",
            //                 dob: null,
            //                 gender: "male",
            //                 file: null
            //             }
            //         });
            //     }
            //     else {
            //         toast.warning(result.message);
            //     }
            // } catch (error) {
            //     toast.error(error?.message || "Something went wrong");
            // }
        },
    });
    const today = new Date();
    const maxDate = new Date(today.setDate(today.getDate() - 1));
    return (
        <SidebarLayout>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex gap-x-3">
                    <div className="shrink-0">
                        <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                    </div>

                    <div className="grow">
                        <h1 className="text-lg font-medium text-foreground">
                            Eliana Garcia
                        </h1>
                        <p className="text-sm text-muted-foreground-2">
                            Class: 3rd, Section: A, Roll No: 23
                        </p>
                        <p className="text-sm text-muted-foreground-2">
                            Age: 10 Years, Father: John Doe, Phone: 7986584210
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
                    Choose subject and date to download the notes and homework
                </h3>
                {/* <div className="mt-8 grid grid-cols-6 gap-4">
                    <SubjectCard id="randomMaths" name="random" subject={"Maths"} status="uploaded" />
                    <SubjectCard id="randomHindi" name="random" subject={"Hindi"} status="pending" />
                    <SubjectCard id="randomEnglish" name="random" subject={"English"} status="uploaded" />
                    <SubjectCard id="randomEVS" name="random" subject={"EVS"} status="uploaded" />
                </div> */}

                <div className="flex flex-wrap gap-4">
                    <RadioCard icon={<BookOpenText className="size-5" />} text="Computer" group="subject" id="student_computer" />
                    <RadioCard icon={<BookOpenText className="size-5" />} text="Maths" group="subject" id="student_maths" />
                    <RadioCard icon={<BookOpenText className="size-5" />} text="Hindi" group="subject" id="student_hindi" />
                    <RadioCard icon={<BookOpenText className="size-5" />} text="English" group="subject" id="student_english" />
                    <RadioCard icon={<BookOpenText className="size-5" />} text="Science" group="subject" id="student_science" />
                    <RadioCard icon={<BookOpenText className="size-5" />} text="Social Studies" group="subject" id="student_social_studies" />
                </div>

                {
                    // <DatePicker selected={selectedDate} onChange={(date) => { setSelectedDate(date); }} inline />
                }
                <div className="">
                    <label className="block text-sm font-medium text-navy mb-1">Select Date</label>
                    <DatePicker
                        inline
                        showYearDropdown
                        scrollableYearDropdown
                        maxDate={maxDate}
                        yearDropdownItemNumber={100}
                        selected={formik.values.dob}
                        onChange={(date) => formik.setFieldValue("dob", date)}
                        calendarClassName="custom-calendar"
                        className="custom-datepicker-input"
                        dateFormat="dd-MM-yyyy"
                    />
                    {formik.touched.dob && formik.errors.dob && (
                        <p className="text-red-500 text-sm">{formik.errors.dob}</p>
                    )}
                </div>
                {/* {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>} */}


                <div className="grid grid-cols-20 gap-4">
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                </div>
                <input type="submit" className="btn" value="Get Notes" />
                {/* <Card /> */}
                {/* <Table /> */}

            </form>
        </SidebarLayout>
    )
}

export default Student
