import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { format, subYears } from "date-fns"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { Plus, Redo2, Trash2, Undo2 } from "lucide-react"
import { v4 as uuidv4 } from "uuid";
import { classOptions, sectionOptions, streamOptions, subjectOptions } from "../../../const/constant"
import ImageUploader from "../../common/ImageUploader"
import TextField from "../../ui/TextField"
import CustomSelect from "../../ui/CustomSelect"
import useImageUpload from "../../../hooks/useImageUpload";
import { createRoleThunk } from "../../../features/subAdmin/createRoleSlice";
import EmailField from "../../ui/EmailField";
import PhoneField from "../../ui/PhoneField";
import OpenCalendar from "../../ui/OpenCalendar";
import Gender from "../../common/Gender";
import Switch from "../../ui/Switch";
import CustomDatePicker from "../../ui/CustomDatePicker";

const AddTeacher = ({ role, open }) => {
    const fileRef = useRef(null);
    const dispatch = useDispatch();
    let user = useSelector(state => state.auth.user);

    const nextStep = async () => {
        const currentFields = stepFields[activeStep];

        // Validate all
        const errors = await formik.validateForm();

        // Filter only current step errors
        const stepErrors = Object.keys(errors).filter(field =>
            currentFields.includes(field)
        );

        // Mark only current step fields touched
        const touchedFields = {};
        currentFields.forEach(field => {
            touchedFields[field] = true;
        });

        formik.setTouched({
            ...formik.touched,
            ...touchedFields
        });

        if (stepErrors.length === 0) {
            setActiveStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (activeStep > 0) {
            setActiveStep(prev => prev - 1);
        }
    };

    let initialValues = {
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
        other_classes: [{ id: uuidv4(), classroom: "", stream: "", section: "", subject: "", incharge: false }]
    }

    //Validations
    const validationSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        dodob: Yup.date()
            .nullable()
            .required("Date of birth is required")
            .test("age-validation", "Invalid age for selected role", function (value) {
                const { role } = this.parent;
                if (!value) return false;

                const age = new Date().getFullYear() - new Date(value).getFullYear();

                if (role === "teacher") return age >= 18;
                if (role === "student") return age >= 3;

                return true;
            }),
        gender: Yup.string().required("Gender is required"),
        // spouse_name: Yup.string().when("married", { is: true, then: (schema) => schema.required("Spouse name is required") }),
        // father_name: Yup.string().when(["role", "married"], { is: (role, married) => role === "student" || (role === "teacher" && !married), then: (schema) => schema.required("Father name is required") }),
        // mother_name: Yup.string().when(["role", "married"], { is: (role, married) => role === "student" || (role === "teacher" && !married), then: (schema) => schema.required("Mother name is required") }),
        spouse_name: Yup.string().nullable(),
        father_name: Yup.string().nullable(),
        mother_name: Yup.string().nullable(),
        custom_id: Yup.string().required("Teacher/Student Id is required"),
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

    // const buildPayload = (values) => {
    //     const formData = new FormData();
    //     Object.keys(values).forEach((key) => {

    //         if (key === "dob" && values.dob) {
    //             formData.append(key, format(values.dob, "dd-MM-yyyy"));
    //         }
    //         else if (key === "file") {
    //             if (values.file) {
    //                 formData.append("file", values.file); // ✅ important
    //             }
    //         } else {
    //             formData.append(key, values[key]);
    //         }
    //     });

    //     return formData;
    // };

    const buildPayload = (values) => {
        const formData = new FormData();

        for (const [key, value] of Object.entries(values)) {
            if (
                key === "incharge" ||
                key === "incharge_classroom" ||
                key === "incharge_section" ||
                key === "other_classes"
            ) {
                continue;
            }

            if (key === "dob" && value) {
                formData.append("dob", format(value, "yyyy-MM-dd"));
            } else if (key === "file" && value) {
                formData.append("file", value);
            } else {
                formData.append(key, value);
            }
        }

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
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: true,
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
                        values: initialValues
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

    const today = new Date();

    let minDate;
    let maxDate;

    if (formik.values.role === "teacher") {
        maxDate = subYears(today, 18); // must be 18+
        minDate = subYears(today, 75); // optional (limit age range)
    } else if (formik.values.role === "student") {
        maxDate = subYears(today, 3); // must be 3+
        minDate = subYears(today, 30); // optional (students max age)
    }

    const onChangeHandler = (date) => {
        formik.setFieldValue("dob", date)
    }

    // const { preview, handleChange, handleRemove } = useImageUpload(formik, "file");
    const { preview, handleChange, handleRemove } = useImageUpload({
        value: formik.values.file,
        setValue: (val) => formik.setFieldValue("file", val),
        setTouched: (val) => formik.setFieldTouched("file", val),
        // setBlur: () => formik.setFieldBlur("file", true),
    });

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

    const handleIncharge = (id) => (e) => {
        const checked = e.target.checked;
        const updated = formik.values.other_classes.map(item => ({
            ...item,
            incharge: item.id === id ? checked : false
        }));

        formik.setFieldValue("other_classes", updated);
    };

    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);

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

    useEffect(() => {
        return (() => {
            formik.resetForm();
        })
    }, [open]);

    return (
        <form onSubmit={formik.handleSubmit} className="h-calc(100% - 68px)">
            <div className="flex flex-wrap gap-4 items-start px-4 py-6">
                <ImageUploader fileRef={fileRef} updateImageHandler={handleChange} removeImageHandler={handleRemove} preview={preview} handleImageUploadTrigger={handleImageUploadTrigger} error={formik.touched.file && formik.errors.file} />
                <div className="w-full flex gap-2">
                    <div className="w-full md:w-1/2">
                        <Gender formik={formik} alignment="" label="Choose Gender" />
                    </div>
                </div>
                <div className="flex gap-2 w-full flex-row">
                    <TextField className="w-full" label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} required={true} />
                    <TextField className="w-full" label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} error={formik.touched.last_name && formik.errors.last_name} />
                </div>
                {
                    formik.values.role === "teacher" &&
                    <Switch id="married" formik={formik} onChangeHandler={handleMarried} label={"Are you married?"} checked={formik.values.married} />
                }
                <div className="flex gap-2 w-full flex-row">
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
                </div>
                <div className="flex gap-2 w-full flex-row">
                    <EmailField className="w-full" label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} required={true} />
                    <PhoneField className="w-full" label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone} required={true} />
                </div>
                <TextField label={`${formik.values.role === 'teacher' ? 'Teacher Id' : 'Student Id'}`} id="custom_id" {...formik.getFieldProps("custom_id")} error={formik.touched.custom_id && formik.errors.custom_id} required={true} />
                

                <div className="w-full">
                    <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-black mb-4">

                        {formik.values.role === "teacher" && (
                            <button
                                type="button"
                                onClick={handleAdd}
                                className="btn icon_btn_small navy-btn"
                            >
                                <Plus className="own-icon" />
                            </button>
                        )}
                        {formik.values.role === "teacher" ? "Teach Other Classes?" : "I Study In"}
                    </label>

                    {formik.values.other_classes.map((item) => (
                        <div key={item.id} className="pb-8 rounded relative">

                            {/* ✅ delete button */}
                            {formik.values.role === "teacher" &&
                                <>
                                    <Switch id={item.id} type="" formik={formik} onChangeHandler={handleIncharge(item.id)} label={"Are you in charge?"} checked={item.incharge} />
                                    {
                                        formik.values.other_classes.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveClass(item.id)}
                                                className="btn icon_btn_remove absolute right-0 -top-1"
                                            >
                                                <Trash2 className="size-5" />
                                            </button>
                                        )}
                                </>
                            }

                            <div className={`grid grid-cols-2 gap-2`}>
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

                <div className="w-full">
                    {/* <OpenCalendar formik={formik} selected={formik.values.dob} onChangeHandler={onChangeHandler} maxDate={maxDate} minDate={minDate} name="dob" label="Date of Birth" required={true} error={formik.touched.dob && formik.errors.dob} />  */}
                    <CustomDatePicker formik={formik} selected={formik.values.dob} onChangeHandler={onChangeHandler} maxDate={maxDate} minDate={minDate} name="dob" label="Date of Birth" required={true} error={formik.touched.dob && formik.errors.dob} />
                </div>


                <div className="flex justify-between w-full">
                    <button type="submit" className="btn btn_with_text">Create {role}</button>
                </div>


            </div>
        </form>
    )
}

export default AddTeacher
