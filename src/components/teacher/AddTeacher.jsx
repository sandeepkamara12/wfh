import { useRef, useState } from "react"
import { classOptions, sectionOptions, streamOptions, subjectOptions } from "../../const/constant"
import ImageUploader from "../common/ImageUploader"
import CustomSelect from "../ui/CustomSelect"
import TextField from "../ui/TextField"
import useImageUpload from "../../hooks/useImageUpload"
import { toast } from "react-toastify"
import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"
import { format, subYears } from "date-fns"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import EmailField from "../ui/EmailField"
import PhoneField from "../ui/PhoneField"
import { Plus, Trash2 } from "lucide-react"
import Switch from "../ui/Switch"
import Gender from "../common/Gender"
import OpenCalendar from "../ui/OpenCalendar"
import { v4 as uuidv4 } from "uuid";

const AddTeacher = ({ role }) => {
    const fileRef = useRef(null);
    const dispatch = useDispatch();
    let user = useSelector(state => state.auth.user);

    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        "Basic Info",
        "Other Info",
        "Academic Info",
    ];

    const nextStep = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (activeStep > 0) {
            setActiveStep(prev => prev - 1);
        }
    };

    //Validations
    const validationSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        dob: Yup.date().nullable().required("Date of birth is required"),
        gender: Yup.string().required("Gender is required"),
        // spouse_name: Yup.string().when("married", { is: true, then: (schema) => schema.required("Spouse name is required") }),
        // father_name: Yup.string().when(["role", "married"], { is: (role, married) => role === "student" || (role === "teacher" && !married), then: (schema) => schema.required("Father name is required") }),
        // mother_name: Yup.string().when(["role", "married"], { is: (role, married) => role === "student" || (role === "teacher" && !married), then: (schema) => schema.required("Mother name is required") }),
        spouse_name: Yup.string().nullable(),
        father_name: Yup.string().nullable(),
        mother_name: Yup.string().nullable(),
        file: Yup.mixed()
            .required("Picture required")
            .test("fileType", "only .png, .jpg, .jpeg are allowed", (value) => {
                if (!value) return false;

                if (typeof value === "string") {
                    return true; // already valid
                }

                const validTypes = ["image/jpeg", "image/png"];
                const validExtensions = [".jpg", ".jpeg", ".png"];

                const isValidType = validTypes.includes(value.type);
                const isValidExt = validExtensions.some(ext =>
                    value?.name?.toLowerCase().endsWith(ext)
                );

                return isValidType && isValidExt;
            })
    });

    const buildPayload = (values) => {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {

            if (key === "dob" && values.dob) {
                formData.append(key, format(values.dob, "dd-MM-yyyy"));
            }
            else if (key === "file") {
                if (values.file) {
                    formData.append("file", values.file); // ✅ important
                }
            } else {
                formData.append(key, values[key]);
            }
        });

        return formData;
    };

    const handleAdd = () => {
        const updated = [...formik.values.other_classes];
        updated.push({ id: uuidv4(), classroom: "", stream: "", section: "", subject: "" });

        formik.setFieldValue("other_classes", updated);
    };

    const handleRemoveClass = (id) => {
        const updated = formik.values.other_classes.filter(
            (item) => item.id !== id
        );

        formik.setFieldValue("other_classes", updated);
    };

    const formik = useFormik({
        initialValues: {
            role: role,
            custom_id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            married: false,
            incharge: false,
            spouse_name: "",
            father_name: "",
            mother_name: "",
            dob: null,
            gender: "male",
            file: null,
            sub_admin_id: user?.id || "",
            incharge_classroom: "",
            incharge_section: "",
            other_classes: [{ id: uuidv4(), classroom: "", stream: "", section: "", subject: "" }]
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const payload = buildPayload(values);
            // for (let [key, value] of payload.entries()) {
            //     console.log(key, value);
            // }
            try {
                const result = await dispatch(createRoleThunk({ payload })).unwrap();

                if (result.success) {
                    toast.success(result.message);
                    resetForm({
                        values: {
                            role: "teacher",
                            first_name: "",
                            last_name: "",
                            email: "",
                            phone: "",
                            married: false,
                            incharge: false,
                            spouse_name: "",
                            father_name: "",
                            mother_name: "",
                            dob: null,
                            gender: "male",
                            file: null,
                            sub_admin_id: "",
                            incharge_classroom: "",
                            incharge_section: "",
                            other_classes: [{ classroom: "", stream: "", section: "", subject: "" }]
                        }
                    });
                }
                else {
                    toast.warning(result.message);
                }
            } catch (error) {
                toast.error(error?.message || "Something went wrong");
            }
        },
    });

    const maxDate =
        formik.values.role === "teacher"
            ? subYears(new Date(), 18)
            : new Date();

    const minDate =
        formik.values.role === "student"
            ? subYears(new Date(), 25) // optional range
            : null;

    const onChangeHandler = (date) => {
        formik.setFieldValue("dob", date)
    }

    const { preview, handleChange, handleRemove } = useImageUpload(formik, "file");
    const handleImageUploadTrigger = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    // Handle Married or not
    const handleMarried = (e) => {
        const married = e.target.checked;
        formik.setFieldValue("married", married);

        if (married) {
            formik.setFieldValue("father_name", "");
            formik.setFieldValue("mother_name", "");
        } else {
            formik.setFieldValue("spouse_name", "");
        }
    };

    const handleIncharge = (e) => {
        const incharge = e.target.checked;
        formik.setFieldValue("incharge", incharge);
    };

    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);

    console.log(formik.values, 'baby')

    const handleClassFieldChange = (id, field, value) => {
        const updated = formik.values.other_classes.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    [field]: value,
                    ...(field === "classroom" && { stream: "" }) // reset stream
                };
            }
            return item;
        });

        formik.setFieldValue("other_classes", updated);
    };
    // If backend does NOT need id, remove before API call
    // const cleaned = values.other_classes.map(({ id, ...rest }) => rest);

    return (

        <form onSubmit={formik.handleSubmit}>
            {/* 🔵 Tabs */}
            <div className="flex items-center justify-between mb-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            if (index <= activeStep) setActiveStep(index);
                        }}
                        className={`flex-1 cursor-pointer relative z-10 last:after:hidden after:absolute after:inset-x-0 after:-translate-y-11.5 after:border-t-2 after:border-navy after:z-0`}
                    >
                        <div className={`z-10 relative w-8 h-8 rounded-full flex items-center justify-center text-white ${activeStep === index ? "bg-orange" : "bg-navy"}`}>
                            {index + 1}
                        </div>
                        <p className="text-sm font-semibold mt-2">{step}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 items-start">
                {
                    activeStep === 0 && (
                        <>
                            <div className="w-full">
                                <ImageUploader formik={formik} ref={fileRef} updateImageHandler={handleChange} removeImageHandler={handleRemove} preview={preview} handleImageUploadTrigger={handleImageUploadTrigger} />
                            </div>
                            <div className="w-full flex gap-2">
                                <div className="w-1/2">
                                    <Gender formik={formik} alignment="" label="Choose Gender" />
                                </div>
                            </div>
                            {/* <div className="flex gap-2 w-full flex-col md:flex-row"> */}
                            <TextField className="w-full" label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} required={true} />
                            <TextField className="w-full" label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} error={formik.touched.last_name && formik.errors.last_name} />
                            {/* </div> */}
                            {
                                formik.values.role === "teacher" &&
                                <Switch id="married" formik={formik} onChangeHandler={handleMarried} label={"Are you married?"} checked={formik.values.married} />
                            }
                            {/* <div className="flex gap-2 w-full flex-col md:flex-row"> */}
                            {
                                formik.values.role === "teacher" &&
                                <>
                                    {
                                        formik.values.married &&
                                        <TextField className="" label="Spouse Name" id="spouse_name" {...formik.getFieldProps("spouse_name")} error={formik.touched.spouse_name && formik.errors.spouse_name} />
                                    }
                                </>
                            }
                            {
                                showParents &&
                                <>
                                    <TextField label="Father Name" id="father_name" {...formik.getFieldProps("father_name")} />
                                    <TextField label="Mother Name" id="mother_name" {...formik.getFieldProps("mother_name")} />
                                </>
                            }
                            {/* </div> */}
                        </>
                    )
                }
                {
                    activeStep === 1 && (<>
                        <EmailField className="w-full" label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} required={true} />
                        <PhoneField className="w-full" label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone} required={true} />
                        <div className="w-full">
                            <OpenCalendar selected={formik.values.dob} onChangeHandler={onChangeHandler} maxDate={maxDate} minDate={minDate} name="dob" label="Date of Birth" required={true} error={formik.errors.dob} />
                        </div>
                    </>)
                }
                {
                    activeStep === 2 && (
                        <>
                            <TextField label={`${formik.values.role === 'teacher' ? 'Teacher Id' : 'Student Id'}`} id="custom_id" {...formik.getFieldProps("custom_id")} error={formik.touched.custom_id && formik.errors.custom_id} required={true} />
                            {
                                formik.values.role === "teacher" &&
                                <Switch id="incharge" formik={formik} onChangeHandler={handleIncharge} label={"Are you in charge?"} checked={formik.values.incharge} />
                            }
                            {
                                formik.values.incharge &&
                                <>
                                    <CustomSelect
                                        options={classOptions}
                                        selectType="classroom"
                                        label="Classroom"
                                        placeholder="Select Classroom"
                                        isSearchable={false}
                                        className="w-full"
                                        value={formik.values.incharge_classroom}
                                        onChange={(val) =>
                                            formik.setFieldValue("incharge_classroom", val)
                                        }
                                    />

                                    <CustomSelect
                                        options={sectionOptions}
                                        selectType="section"
                                        label="Section"
                                        placeholder="Select Section"
                                        isSearchable={false}
                                        className="w-full"
                                        value={formik.values.incharge_section}
                                        onChange={(val) =>
                                            formik.setFieldValue("incharge_section", val)
                                        }
                                    />
                                </>
                            }
                            <div className="w-full">
                                <label className="flex justify-between items-center text-sm font-medium text-navy">
                                    {formik.values.role === "teacher" ? "Teach Other Classes" : "I Study In"}

                                    {formik.values.role === "teacher" && (
                                        <button
                                            type="button"
                                            onClick={handleAdd}
                                            className="btn icon_btn_small"
                                        >
                                            <Plus className="size-5" />
                                        </button>
                                    )}
                                </label>

                                {formik.values.other_classes.map((item) => (
                                    <div key={item.id} className="bg-navy/10 p-4 mt-3 rounded relative">

                                        {/* ✅ delete button */}
                                        {formik.values.role === "teacher" &&
                                            formik.values.other_classes.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveClass(item.id)}
                                                    className="btn icon_btn_remove absolute right-3 top-3"
                                                >
                                                    <Trash2 className="size-5" />
                                                </button>
                                            )
                                        }

                                        <div className={`grid ${(item?.classroom === '11' || item?.classroom === '12') ? 'grid-cols-4' : 'grid-cols-3'} gap-2`}>
                                            <CustomSelect
                                                options={classOptions}
                                                label="Classroom"
                                                isSearchable={false}
                                                value={item.classroom}
                                                onChange={(val) =>
                                                    handleClassFieldChange(item?.id, "classroom", val)
                                                }
                                            />

                                            {
                                                (item?.classroom === '11' || item?.classroom === '12') &&
                                                (<CustomSelect
                                                    options={streamOptions}
                                                    label="Stream"
                                                    isSearchable={false}
                                                    value={item.stream}
                                                    onChange={(val) =>
                                                        handleClassFieldChange(item?.id, "stream", val)
                                                    }
                                                />)
                                            }

                                            <CustomSelect
                                                options={sectionOptions}
                                                label="Section"
                                                isSearchable={false}
                                                value={item.section}
                                                onChange={(val) =>
                                                    handleClassFieldChange(item?.id, "section", val)
                                                }
                                            />

                                            <CustomSelect
                                                options={subjectOptions}
                                                label="Subject"
                                                isSearchable={false}
                                                value={item.subject}
                                                onChange={(val) =>
                                                    handleClassFieldChange(item?.id, "subject", val)
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button type="submit" className="btn btn_with_text">Create {role}</button>
                        </>
                    )
                }



            </div>
            <div className="flex justify-between mt-4">

                <button
                    type="button"
                    onClick={prevStep}
                    disabled={activeStep === 0}
                    className="btn btn_with_text"
                >
                    Previous
                </button>

                {activeStep < steps.length - 1 ? (
                    <button type="button" onClick={nextStep} className="btn btn_with_text">
                        Next
                    </button>
                ) : null}

            </div>
        </form >
    )
}

export default AddTeacher
