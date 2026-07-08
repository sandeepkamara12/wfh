import { useRef } from "react"
import { classOptions, sectionOptions, streamOptions, subjectOptions } from "../../const/constant"
import Drawer from "../common/Drawer"
import ImageUploader from "../common/ImageUploader"
import CustomSelect from "../ui/CustomSelect"
import TextField from "../ui/TextField"
import useImageUpload from "../../hooks/useImageUpload"
import { toast } from "react-toastify"
import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"
import { format } from "date-fns"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import EmailField from "../ui/EmailField"
import PhoneField from "../ui/PhoneField"
import { Plus, Trash2, X } from "lucide-react"
import Switch from "../ui/Switch"
import Gender from "../common/Gender"

const AddTeacher = ({ role }) => {
    const fileRef = useRef(null);
    const dispatch = useDispatch();
    let user = useSelector(state => state.auth.user);

    //Validations
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
            sub_admin_id: user?.id || ""
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
                            incharge:false,
                            spouse_name: "",
                            father_name: "",
                            mother_name: "",
                            dob: null,
                            gender: "male",
                            file: null,
                            sub_admin_id: ""
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

        // if (incharge) {
        //     formik.setFieldValue("father_name", "");
        //     formik.setFieldValue("mother_name", "");
        // } else {
        //     formik.setFieldValue("spouse_name", "");
        // }
    };
    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);

    return (
        <form>
            <div className="flex flex-wrap gap-4 items-start">
                <ImageUploader formik={formik} ref={fileRef} updateImageHandler={handleChange} removeImageHandler={handleRemove} preview={preview} handleImageUploadTrigger={handleImageUploadTrigger} />
                <div className="flex gap-2 w-full flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <TextField label={`${formik.values.role === 'teacher' ? 'Teacher Id' : 'Student Id'}`} id="custom_id" {...formik.getFieldProps("custom_id")} error={formik.touched.custom_id && formik.errors.custom_id} required={true} />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Gender formik={formik} alignment="" label="Choose Gender" />
                    </div>
                </div>
                <div className="flex gap-2 w-full flex-col md:flex-row">
                    <TextField className="w-full lg:w-1/2" label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} />
                    <TextField className="w-full lg:w-1/2" label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} error={formik.touched.last_name && formik.errors.last_name} />
                </div>
                <div className="flex gap-2 w-full flex-col md:flex-row">
                    <EmailField className="w-full lg:w-1/2" label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} required={true} />
                    <PhoneField className="w-full lg:w-1/2" label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone} required={true} />
                </div>

                {
                    formik.values.role === "teacher" &&
                    <Switch formik={formik} onChangeHandler={handleMarried} label={"Are you married?"} checked={formik.values.married} />
                }
                <div className="flex gap-2 w-full flex-col md:flex-row">
                    {
                        formik.values.role === "teacher" &&
                        <>
                            {
                                formik.values.married &&
                                <TextField className="" label="Spouse Name" id="spouse_name" {...formik.getFieldProps("spouse_name")} error={formik.touched.spouse_name && formik.errors.spouse_name} required={true} />
                            }
                        </>
                    }
                    {
                        showParents &&
                        <>
                            <TextField className="w-full lg:w-1/2" label="Father Name" id="father_name" {...formik.getFieldProps("father_name")} error={formik.touched.father_name && formik.errors.father_name} required={true} />
                            <TextField className="w-full lg:w-1/2" label="Mother Name" id="mother_name" {...formik.getFieldProps("mother_name")} error={formik.touched.mother_name && formik.errors.mother_name} required={true} />
                        </>
                    }
                </div>
                {
                    formik.values.role === "teacher" &&
                    <Switch formik={formik} onChangeHandler={handleIncharge} label={"Are you in charge?"} checked={formik.values.incharge} />
                }
                {
                    formik.values.married &&
                    <div className="w-full">
                        {/* <label htmlFor="inchargeOf" className="block font-medium text-navy text-sm">Incharge Of</label> */}
                        <div className="flex gap-2 w-full flex-col md:flex-row">
                            <CustomSelect
                                options={classOptions}
                                selectType="classroom"
                                label="Classroom"
                                placeholder="Select Classroom"
                                isSearchable={false}
                                className="w-full"
                            />

                            <CustomSelect
                                options={sectionOptions}
                                selectType="section"
                                label="Section"
                                placeholder="Select Section"
                                isSearchable={false}
                                className="w-full"
                            />
                        </div>
                    </div>
                }
                <div className="w-full">
                    <label htmlFor="otherClasses" className="flex flex-wrap items-end justify-between gap-2 font-medium text-navy text-sm">
                        <label htmlFor="" className="block text-sm font-medium text-navy mb-1">
                            {
                                formik.values.role === "teacher" ? "Teach Other Classes" : "I Study In"
                            }
                        </label>
                        {
                            formik.values.role === "teacher" &&
                            <button className="btn icon_btn_small">
                                <Plus className="size-5 shrink-0" />
                            </button>
                        }

                    </label>
                    <div className={`bg-navy/10 rounded p-4 relative ${formik.values.role === 'teacher' ? 'mt-4' : ''}`}>
                    {
                         formik.values.role === "teacher" &&
                        <button className="btn icon_btn_remove absolute inset-e-3 top-3">
                            <Trash2 className="size-5 shrink-0" />
                        </button>
                        }
                        <div className='grid grid-cols-4 gap-2'>
                            <CustomSelect
                                options={classOptions}
                                placeholder=""
                                selectType="classroom"
                                label="Classroom"
                                isSearchable={false}
                            />
                            <CustomSelect
                                options={streamOptions}
                                placeholder=""
                                selectType="stream"
                                label="Stream"
                                isSearchable={false}
                            />
                            <CustomSelect
                                options={sectionOptions}
                                placeholder=""
                                selectType="section"
                                label="Section"
                                isSearchable={false}
                            />
                            <CustomSelect
                                options={subjectOptions}
                                placeholder=""
                                selectType="subject"
                                label="Subject"
                                isSearchable={false}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn_with_text">Create Teacher</button>
            </div>
        </form>
    )
}

export default AddTeacher
