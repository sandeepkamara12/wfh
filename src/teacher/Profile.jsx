import { CalendarDays, Mail, Phone, UserRound, UserRoundPen, Camera, GraduationCap, Mars, Venus } from 'lucide-react';
import TextField from "../components/ui/TextField"
import EmailField from "../components/ui/EmailField"
import PhoneField from "../components/ui/PhoneField"
import RadioCard from "../components/ui/RadioCard"
import DatePicker from "react-datepicker"
import { format, subYears } from "date-fns";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
// import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useMemo, useRef } from "react"

const Profile = () => {
    const loading = useSelector(state => state.role.loading.createRole);
    const dispatch = useDispatch()

    // Date
    const maxDate = subYears(new Date(), 18);

    //State
    const fileRef = useRef(null);

    const validationSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        // email: Yup.string().email("Invalid email").required("Email is required"),
        // phone: Yup.string().required("Phone is required"),
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
            .required("Photo required")
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
                //             email: "",
                //             phone: "",
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

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 flex gap-x-4 bg-white p-4 rounded">
                    <div className="shrink-0">
                        <img className="shrink-0 size-20 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                    </div>

                    <div className="text-sm text-navy grow flex flex-wrap justify-between items-center gap-2">
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
                                    <UserRoundPen className="size-4" /> 12th
                                    <span className="text-orange">A</span>
                                    <span className="text-xs font-medium">Non Medical</span>
                                </span>
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
            <div className="bg-white p-6 rounded">
                <h2 className="mb-6 font-bold text-lg">Update <span className="text-orange">Profile</span></h2>
                <form className="grid gap-y-4" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-4 gap-4 items-end">
                        
                        <div className="grid gap-y-4 col-span-1">
                            <div className="flex flex-col">
                                <label className="block text-sm font-medium text-navy mb-1">Select Picture</label>
                                <span className="inline-block size-16 bg-white rounded-full relative group">
                                    <span className="inline-flex flex-wrap items-center justify-center border-2 border-navy size-16 rounded-full overflow-hidden relative z-50">
                                        <input
                                            type="file"
                                            ref={fileRef}
                                            accept="image/*"
                                            className="absolute opacity-0 w-full h-full cursor-pointer z-40 hidden"
                                            onChange={(e) => {
                                                const file = e.currentTarget.files[0];
                                                formik.setFieldValue("file", file);

                                                // ✅ Immediately clear error if valid file selected
                                                // if (file) {
                                                //     formik.setFieldError("file", undefined);
                                                // }
                                            }}
                                        />
                                        {preview ? (
                                            <img src={preview} className="w-full h-full object-cover" alt="profile preview" />
                                        ) : (
                                            <UserRound className="size-5" />
                                        )}
                                    </span>
                                    <span onClick={handleImageUpload} className="bg-navy absolute top-0 bottom-0 left-0 right-0 border-2 border-navy p-1 rounded-full flex flex-wrap items-center justify-center opacity-0 z-50 group-hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out">
                                        <Camera className="size-5 text-white" />
                                    </span>
                                </span>
                                {
                                    // formik.touched.file && 
                                    formik.errors.file && (
                                        <p className="text-red-500 text-sm">{formik.errors.file}</p>
                                    )}
                            </div>
                            <div className="">
                                <label className="block text-sm font-medium text-navy mb-1">Select Gender</label>
                                <div className="flex flex-wrap gap-2">
                                    <RadioCard icon={<Mars className="size-5" />} text="Male" group="gender" formik={formik} id="male" error={formik.touched.gender && formik.errors.gender} />
                                    <RadioCard icon={<Venus className="size-5" />} text="Female" group="gender" formik={formik} id="female" error={formik.touched.gender && formik.errors.gender} />
                                </div>
                            </div>
                        </div>
                        
                        <div clasName="col-span-2">
                            <div className="grid grid-cols-2 gap-4">
                                <TextField label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} />
                                <TextField label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} error={formik.touched.last_name && formik.errors.last_name} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <EmailField label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} disabled={true} />
                                <PhoneField label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone} disabled={true} />
                            </div>
                        </div>

                        <div className="col-span-1">


                            {
                                formik.values.role === "teacher" &&
                                <>
                                    <div className="flex flex-wrap items-center gap-5">
                                        <div className="hs-tooltip flex items-center gap-x-3">
                                            <label htmlFor="hs-basic-usage" className="relative inline-block w-11 h-6 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    id="hs-basic-usage"
                                                    className="peer sr-only"
                                                    onChange={(e) => handleMarried(e)}
                                                    checked={formik.values.married}
                                                />
                                                <span className="absolute inset-0 bg-white border-2 border-navy rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-orange peer-checked:border-orange"></span>
                                                <span className="absolute top-1/2 inset-s-1 -translate-y-1/2 size-4 bg-navy rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-[calc(100%+5px)] peer-checked:bg-white"></span>
                                            </label>
                                            <label htmlFor="hs-tooltip-example" className="text-sm text-muted-foreground-1">Are you married?</label>
                                        </div>
                                    </div>
                                    {
                                        formik.values.married &&
                                        <TextField label="Spouse Name" id="spouse_name" {...formik.getFieldProps("spouse_name")} error={formik.touched.spouse_name && formik.errors.spouse_name} />
                                    }
                                </>
                            }
                            {
                                showParents &&
                                <>
                                    <TextField label="Father Name" id="father_name" {...formik.getFieldProps("father_name")} error={formik.touched.father_name && formik.errors.father_name} />
                                    <TextField label="Mother Name" id="mother_name" {...formik.getFieldProps("mother_name")} error={formik.touched.mother_name && formik.errors.mother_name} />
                                </>
                            }
                        </div>
                    </div>
                    {
                        <div className="">
                            <label className="block text-sm font-medium text-navy mb-1">Select D.O.B <span className="text-xs text-orange">(A teacher should be 18 years old)</span></label>
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
                    }
                    {/* {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>} */}
                    <button type="submit" className="btn" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Updating..." : "Update Profile"}</button>
                </form>
            </div>
        </>
    )
}

export default Profile
