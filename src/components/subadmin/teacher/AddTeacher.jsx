import { useEffect, useRef } from "react"
import { toast } from "react-toastify"
import { format, subYears } from "date-fns"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid";
import ImageUploader from "../../common/ImageUploader"
import TextField from "../../ui/TextField"
import useImageUpload from "../../../hooks/useImageUpload";
import { createRoleThunk } from "../../../features/subAdmin/createRoleSlice";
import EmailField from "../../ui/EmailField";
import PhoneField from "../../ui/PhoneField";
import Gender from "../../common/Gender";
import Switch from "../../ui/Switch";
import CustomDatePicker from "../../ui/CustomDatePicker";

const AddTeacher = ({ role, open }) => {
    const fileRef = useRef(null);
    const dispatch = useDispatch();
    let user = useSelector(state => state.auth.user);

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

    const formik = useFormik({
        initialValues,
        validationSchema,
        // validateOnBlur: false,
        // validateOnChange: true,
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

    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);


    useEffect(() => {
        return (() => {
            formik.resetForm();
        })
    }, [open]);

    return (
        <form onSubmit={formik.handleSubmit} className="h-calc(100% - 68px)">
            <div className="flex flex-wrap gap-4 items-start px-4 pb-6">
                <ImageUploader fileRef={fileRef} updateImageHandler={handleChange} removeImageHandler={handleRemove} preview={preview} handleImageUploadTrigger={handleImageUploadTrigger} error={formik.touched.file && formik.errors.file} />
                    <div className="w-full">
                        <Gender formik={formik} alignment="" label="Choose Gender" />
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
                    {/* <OpenCalendar formik={formik} selected={formik.values.dob} onChangeHandler={onChangeHandler} maxDate={maxDate} minDate={minDate} name="dob" label="Date of Birth" required={true} error={formik.touched.dob && formik.errors.dob} />  */}
                    <CustomDatePicker formik={formik} selected={formik.values.dob} onChangeHandler={onChangeHandler} maxDate={maxDate} minDate={minDate} name="dob" label="Date of Birth" required={true} error={formik.touched.dob && formik.errors.dob} />
                </div>

                <div className="flex justify-between w-full">
                    <button type="submit" className="btn btn_with_text navy-btn">Create {role}</button>
                </div>


            </div>
        </form>
    )
}

export default AddTeacher
