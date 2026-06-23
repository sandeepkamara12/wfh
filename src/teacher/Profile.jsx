import { CalendarDays, Mail, Phone, UserRound, UserRoundPen, Mars, Venus, Flag } from 'lucide-react';
import TextField from "../components/ui/TextField"
import EmailField from "../components/ui/EmailField"
import PhoneField from "../components/ui/PhoneField"
import { format, subYears } from "date-fns";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
// import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useMemo, useRef } from "react"
import ImageUploader from '../components/common/ImageUploader';
import Gender from '../components/common/Gender';
import Switch from '../components/ui/Switch';
import OpenCalendar from '../components/ui/OpenCalendar';

const Profile = () => {
    const loading = useSelector(state => state.role.loading.createRole);
    const dispatch = useDispatch()

    // Date
    const maxDate = subYears(new Date(), 18);

    //State
    const fileRef = useRef(null);

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

                const validTypes = ["image/jpeg", "image/png"];
                const validExtensions = [".jpg", ".jpeg", ".png"];

                const isValidType = validTypes.includes(value.type);
                const isValidExt = validExtensions.some(ext =>
                    value.name.toLowerCase().endsWith(ext)
                );

                return isValidType && isValidExt;
            })
    });


    // Build payload
    const buildPayload = (values) => {
        const formData = new FormData();

        Object.keys(values).forEach((key) => {
            if (key === "dob" && values.dob) {
                formData.append(key, format(values.dob, "dd-MM-yyyy"));
            } else if (key === "file") {
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
    const handleImageUpload = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }


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
            const payload = buildPayload(values);
            // for (let [key, value] of payload.entries()) {
            //     console.log(key, value);
            // }
            try {
                // const result = await dispatch(createRoleThunk({ payload })).unwrap();

                // if (result.success) {
                //     toast.success(result.message);
                //     resetForm({
                //         values: {
                //             role: "teacher",
                //             first_name: "",
                //             last_name: "",
                //             married: false,
                //             spouse_name: "",
                //             father_name: "",
                //             mother_name: "",
                //             dob: null,
                //             gender: "male",
                //             file: null
                //         }
                //     });
                // }
                // else {
                //     toast.warning(result.message);
                // }
            } catch (error) {
                toast.error(error?.message || "Something went wrong");
            }
        },
    });

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

    const updateImageHandler = (e) => {
        const file = e.currentTarget.files[0];
        formik.setFieldValue("file", file);
    }

    const removeImageHandler = () => {
        formik.setFieldValue("file", null);
    }

    const preview = useMemo(() => {
        if (!formik.values.file) return null;
        return URL.createObjectURL(formik.values.file);
    }, [formik.values.file]);

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);

    const onChangeHandler = (date) => {
        formik.setFieldValue("dob", date)
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 flex gap-x-4 bg-white p-4 rounded">
                    <div className="shrink-0">
                        <img className="shrink-0 size-24 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                    </div>

                    <div className="text-sm text-navy grow flex flex-wrap justify-between gap-2">
                        <div>
                            <span className="font-semibold tracking-wide pt-0.5 pb-1 px-2 rounded-full text-xs bg-navy/10">#2154879633</span>
                            <h2 className="font-bold text-lg mt-2 mb-1">
                                Mrs. Garima
                                <span className="ml-2 inline-flex flex-wrap items-center gap-1 text-xs font-semibold lowercase first-letter:uppercase">
                                    <CalendarDays className="size-4" />
                                    30 Years
                                </span>
                            </h2>
                            <div className="flex flex-wrap flex-col gap-1">
                                <span className="flex flex-wrap items-center gap-1">
                                    <UserRoundPen className="size-4" />I am Incharge of
                                    <div className='font-bold text-xs'>12th <span className='text-orange'>C</span> Non Medical Science</div> and I teach a few more subjects to difference classes:
                                </span>
                                <span className="flex flex-wrap items-center gap-1">
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-medium text-xs relative'>
                                        <span className="text-orange">10th A </span>
                                        <span className='text-navy'>Medical - Maths</span>
                                        <Flag className='size-3 absolute right-1.5' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-medium text-xs relative'>
                                        <span className="text-orange">12th B </span>
                                        <span className='text-navy'>Medical - Science</span>
                                        <Flag className='size-3 absolute right-1.5' />
                                    </div>
                                    <div className='bg-navy/10 py-1 ps-1.5 pe-6 rounded flex gap-1 items-center font-medium text-xs relative'>
                                        <span className="text-orange">8th C </span>
                                        <span className='text-navy'>English</span>
                                        <Flag className='size-3 absolute right-1.5' />
                                    </div>
                                </span>
                                <p className='text-red text-xs mt-2'>Kindly click on the flag if subadmin assigned you wrong class, stream, section or subject.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="flex flex-wrap items-center gap-1">
                                <UserRound className="size-4" />
                                Mr. John Doe
                            </span>
                            <span className="flex flex-wrap items-center gap-1">
                                <Phone className="size-4" />
                                7986584210
                            </span>
                            <span className="flex flex-wrap items-center gap-1">
                                <Mail className="size-4" />
                                sandeep.d4d@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <form className="bg-white p-6 rounded" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-3 items-start gap-4">
                        <div className='col-span-2 grid items-start gap-6'>
                            <h2 className="font-bold text-lg">Update <span className="text-orange">Profile</span></h2>
                            <div className='grid grid-cols-2 gap-4'>
                                <ImageUploader formik={formik} ref={fileRef} updateImageHandler={updateImageHandler} removeImageHandler={removeImageHandler} preview={preview} handleImageUpload={handleImageUpload} />
                                <div className="mt-3">
                                    <Gender formik={formik} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <TextField label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} required={true} />
                                <TextField label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} error={formik.touched.last_name && formik.errors.last_name} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <EmailField label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.errors.email} required={true} />
                                <PhoneField label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.errors.phone} required={true} />
                            </div>
                            <div className='flex flex-col gap-4 mt-6'>
                                {
                                    formik.values.role === "teacher" &&
                                    <Switch formik={formik} onChangeHandler={handleMarried} label={"Are you married?"} checked={formik.values.married} />
                                }
                                {
                                    formik.values.married &&
                                    <div className='grid grid-cols-2 gap-4'>
                                        <TextField label="Spouse Name" id="spouse_name" {...formik.getFieldProps("spouse_name")} error={formik.errors.spouse_name} required={true} />
                                    </div>
                                }
                                {
                                    showParents &&
                                    <div className='grid grid-cols-2 gap-4'>
                                        <TextField label="Father Name" id="father_name" {...formik.getFieldProps("father_name")} error={formik.errors.father_name} required={true} />
                                        <TextField label="Mother Name" id="mother_name" {...formik.getFieldProps("mother_name")} error={formik.errors.mother_name} required={true} />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='col-span-1 mt-16 ms-6'>
                           <OpenCalendar formik={formik} onChangeHandler={onChangeHandler} maxDate={maxDate} name="dob" label="Date of Birth" required={true} />
                        </div>
                    </div>
                    <button type="submit" className="mt-4 w-auto btn" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Updating..." : "Update Profile"}</button>
                    {/* {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>} */}
                </form>
            </div>
        </>
    )
}

export default Profile
