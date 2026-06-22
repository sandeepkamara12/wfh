import TextField from "../ui/TextField"
import EmailField from "../ui/EmailField"
import PhoneField from "../ui/PhoneField"
import RadioCard from "../ui/RadioCard"
import { Camera, GraduationCap, Mars, UserRound, UserRoundPen, Venus } from "lucide-react"
import DatePicker from "react-datepicker"
import { format, subYears } from "date-fns";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useMemo, useRef } from "react"

const CreateRole = () => {
    // Redux
    const loading = useSelector(state => state.role.loading.createRole);
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
                            file: null
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

    // console.log(formik, 'formik');

    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);

    return (
        <div className="bg-white p-6 rounded">
            <h2 className="mb-6 font-bold text-lg">Create <span className="text-orange">Role</span></h2>
            <form className="grid gap-y-4" onSubmit={formik.handleSubmit}>
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
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-navy mb-1">Select Role</label>
                        <div className="flex flex-wrap gap-2">
                            <RadioCard icon={<UserRoundPen className="size-5" />} text="Teacher" group="role" formik={formik} id="teacher" error={formik.touched.role && formik.errors.role} />
                            <RadioCard icon={<GraduationCap className="size-5" />} text="Student" group="role" formik={formik} id="student" error={formik.touched.role && formik.errors.role} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-navy mb-1">Select Gender</label>
                        <div className="flex flex-wrap gap-2">
                            <RadioCard icon={<Mars className="size-5" />} text="Male" group="gender" formik={formik} id="male" error={formik.touched.gender && formik.errors.gender} />
                            <RadioCard icon={<Venus className="size-5" />} text="Female" group="gender" formik={formik} id="female" error={formik.touched.gender && formik.errors.gender} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <TextField label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} />
                    <TextField label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} error={formik.touched.last_name && formik.errors.last_name} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <EmailField label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} />
                    <PhoneField label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone} />
                </div>
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
                {
                    <div className="">
                        <label className="block text-sm font-medium text-navy mb-1">Select D.O.B</label>
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
                <button type="submit" className="btn" disabled={loading || !(formik.isValid && formik.dirty)}>{loading ? "Creating..." : "Create Role"}</button>
            </form>
        </div>
    )
}

export default CreateRole
