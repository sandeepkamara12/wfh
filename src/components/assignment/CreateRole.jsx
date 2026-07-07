import TextField from "../ui/TextField"
import EmailField from "../ui/EmailField"
import PhoneField from "../ui/PhoneField"
import { format, subYears } from "date-fns";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useMemo, useRef } from "react"
import ImageUploader from '../common/ImageUploader';
import Gender from '../common/Gender';
import Role from '../common/Role';
import OpenCalendar from '../ui/OpenCalendar';
import Switch from "../ui/Switch"
import { Download } from "lucide-react";

const CreateRole = () => {
    // Redux
    const loading = useSelector(state => state.role.loading.createRole);
    let user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    // Date
    const maxDate = subYears(new Date(), 18);

    //State
    const fileRef = useRef(null);

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

    // Build payload
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

    //Handle Upload Image
    const handleImageUploadTrigger = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }


    const formik = useFormik({
        initialValues: {
            role: "teacher",
            custom_id: "",
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

    // Handle Memory leakage while creating url using createObjectURL
    const preview = useMemo(() => {
        if (!formik.values.file) return null;
        return URL.createObjectURL(formik.values.file);
    }, [formik.values.file]);

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const updateImageHandler = (e) => {
        const file = e.currentTarget.files[0];
        formik.setFieldValue("file", file);
    }

    const removeImageHandler = () => {
        formik.setFieldValue("file", null);
    }

    const onChangeHandler = (date) => {
        formik.setFieldValue("dob", date)
    }

    // console.log(formik, 'formik');

    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);

    return (
        <div className="bg-white p-6 rounded">
            <form className="grid gap-y-6" onSubmit={formik.handleSubmit}>
                <div className="flex items-center justify-between gap-2">
                   

                    <h2 className="font-bold text-lg">Create <span className="text-orange">Role</span></h2>
                     <button className="icon-btn w-auto">
                            <Download />
                        </button>
                </div>
                <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 flex-wrap justify-between items-start">
                    <div className="create-role-left-area">
                                            {
                        formik.values.role === "teacher" &&
                        <Switch formik={formik} onChangeHandler={handleMarried} label={"Are you married?"} checked={formik.values.married} />
                    }
                    
                        <ImageUploader formik={formik} ref={fileRef} updateImageHandler={updateImageHandler} removeImageHandler={removeImageHandler} preview={preview} handleImageUploadTrigger={handleImageUploadTrigger} />

                        <div className="col-span-6 3xl:col-span-2">
                            <Role formik={formik} label="Choose Role" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 col-span-6 3xl:col-span-4">
                            <TextField label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} required={true} />
                            <TextField label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} />
                        </div>
                        <div className="col-span-6 3xl:col-span-2">
                            <Gender formik={formik} alignment="" label="Choose Gender" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 col-span-6 3xl:col-span-4">
                            <EmailField label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} required={true} />
                            <PhoneField label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone} required={true} />
                        </div>
                        <div className=" col-span-6 3xl:col-span-2">
                            <TextField label={`${formik.values.role === 'teacher' ? 'Teacher Id' : 'Student Id'}`} id="custom_id" {...formik.getFieldProps("custom_id")} error={formik.touched.custom_id && formik.errors.custom_id} required={true} />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 col-span-6 3xl:col-span-4">

                            {
                                formik.values.role === "teacher" &&
                                <>
                                    {/* <Switch formik={formik} onChangeHandler={handleMarried} label={"Are you married?"} checked={formik.values.married} /> */}
                                    {
                                        formik.values.married &&
                                        <TextField label="Spouse Name" id="spouse_name" {...formik.getFieldProps("spouse_name")} error={formik.touched.spouse_name && formik.errors.spouse_name} required={true} />
                                    }
                                </>
                            }
                            {
                                showParents &&
                                <>
                                    <TextField label="Father Name" id="father_name" {...formik.getFieldProps("father_name")} error={formik.touched.father_name && formik.errors.father_name} required={true} />
                                    <TextField label="Mother Name" id="mother_name" {...formik.getFieldProps("mother_name")} error={formik.touched.mother_name && formik.errors.mother_name} required={true} />
                                </>
                            }
                        </div>
                    </div>
                    {
                        <div className="w-auto">
                            <OpenCalendar selected={formik.values.dob} onChangeHandler={onChangeHandler} maxDate={maxDate} name="dob" label="Date of Birth" required={true} error={formik.errors.dob} />
                        </div>
                    }
                </div>

                {/* {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>} */}
                <div className="col-span-1">
                    <button type="submit" className="btn w-auto" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Creating..." : "Create Role"}</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRole
