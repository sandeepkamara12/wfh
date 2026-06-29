import { CalendarDays, Mail, Phone, UserRound, UserRoundPen, Flag } from 'lucide-react';
import TextField from "../components/ui/TextField"
import EmailField from "../components/ui/EmailField"
import PhoneField from "../components/ui/PhoneField"
import { format, subYears } from "date-fns";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useMemo, useRef } from "react"
import ImageUploader from '../components/common/ImageUploader';
import Gender from '../components/common/Gender';
import Switch from '../components/ui/Switch';
import OpenCalendar from '../components/ui/OpenCalendar';
import { differenceInYears, parseISO } from "date-fns";
import { updateTeacherThunk } from '../features/auth/loginSlice';


const base_url = import.meta.env.VITE_API_BASE_URL;
const IMAGE_BASE_URL = `${base_url}/`;

const Profile = () => {
    const loading = useSelector(state => state.role.loading.createRole);
    let user = useSelector(state => state.auth.user);
    console.log(user, 'user');
    const dispatch = useDispatch();

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
            is: (married) => married,
            then: (schema) => schema.trim().required("Spouse name is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
        father_name: Yup.string().when(["role", "married"], {
            is: (role, married) => {
                const isMarried = married;

                return role === "student" || (role === "teacher" && !isMarried);
            },
            then: (schema) =>
                schema.trim().required("Father name is required"),
            otherwise: (schema) => schema.notRequired(),
        }),

        mother_name: Yup.string().when(["role", "married"], {
            is: (role, married) => {
                const isMarried = married;

                return role === "student" || (role === "teacher" && !isMarried);
            },
            then: (schema) =>
                schema.trim().required("Mother name is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
        profile_pic: Yup.mixed()
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


    // Build payload
    const buildPayload = (values) => {
        const formData = new FormData();

        Object.keys(values).forEach((key) => {
            if (key === "dob" && values?.dob) {
                //  dob: formatDate(values.dob),
                let dob = values.dob ? formatDate(values.dob) : null
                formData.append(key, format(dob, "yyyy-MM-dd"));
            } else if (key === "profile_pic") {
                if (values.profile_pic) {
                    formData.append("profile_pic", values.profile_pic); // ✅ important
                }
            } else if (key === 'married') {
                formData.append("married", values.married ? 1 : 0); // ✅ important
            }
            else {
                formData.append(key, values[key]);
            }
        });

        return formData;
    };

    //Handle Upload Image Trigger
    const handleImageUploadTrigger = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const formatDate = (date) => {
        if (!date) return null;
        return date.toISOString().split("T")[0]; // YYYY-MM-DD
    };

    const parseDOB = (dob) => {
        if (!dob || dob === "0000-00-00") return null;

        const date = new Date(dob);
        return isNaN(date.getTime()) ? null : date;
    };

    const formik = useFormik({
        initialValues: {
            role: "teacher",
            id: user?.id || null,
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
            email: user?.email || "",
            phone: user?.phone || "",
            married: !!user?.married,
            spouse_name: user?.spouse_name || "",
            father_name: user?.father_name || "",
            mother_name: user?.mother_name || "",
            dob: parseDOB(user?.dob),
            gender: user?.gender || "male",
            profile_pic: user?.profile_pic || null,
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values) => {
            const payload = buildPayload(values);
            try {
                const result = await dispatch(updateTeacherThunk({ payload })).unwrap();

                if (result.success) {
                    toast.success(result.message);
                }
                else {
                    toast.warning(result.message);
                }
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
        formik.setFieldValue("profile_pic", file, true);
    }

    const removeImageHandler = () => {
        formik.setFieldValue("profile_pic", null, true);
    }

    const preview =
        typeof formik.values.profile_pic === "string"
            ? IMAGE_BASE_URL + formik.values.profile_pic
            : formik.values.profile_pic
                ? URL.createObjectURL(formik.values.profile_pic)
                : null;


    useEffect(() => {
        if (formik.values.profile_pic instanceof File) {
            const objectUrl = URL.createObjectURL(formik.values.profile_pic);
            fileRef.current = objectUrl;

            return () => {
                URL.revokeObjectURL(objectUrl);
            };
        }
    }, [formik.values.profile_pic]);

    const showParents = formik.values.role === "student" || (formik.values.role === "teacher" && !formik.values.married);

    const onChangeHandler = (date) => {
        formik.setFieldValue("dob", date);
    }

    let isMale = user?.gender === 'male' ? 'Mr.' : 'Mrs.'
    let isUserMale = user?.gender === 'male' ? true : false;
    let respect = isUserMale ? 'Mrs.' : 'Mr.';
    let isMarried = !!user?.married;

    // let paddedId = user?.id?.toString().padStart(5, '0');
    // let userGeneratedId = user?.role[0] + isMarried + user?.gender[0] + user?.first_name[0] + user?.last_name[0] + paddedId;

    // console.log(formik, 'formik');

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 flex gap-x-4 bg-white p-4 rounded">
                    <div className="shrink-0">
                        <img className="shrink-0 size-24 rounded-full" src={IMAGE_BASE_URL + user?.profile_pic} alt="Avatar" />
                    </div>

                    <div className="text-sm text-navy grow flex flex-wrap justify-between gap-2">
                        <div>
                            <span className="font-semibold tracking-wide pt-0.5 pb-1 px-2 rounded-full text-xs bg-navy/10 uppercase">{user?.custom_id}</span>
                            <h2 className="font-bold text-lg mt-2 mb-1">
                                {
                                    isMale + ' ' + user?.first_name + ' ' + user?.last_name
                                }
                                <span className="ml-2 inline-flex flex-wrap items-center gap-1 text-xs font-semibold lowercase first-letter:uppercase">
                                    <CalendarDays className="size-4" />
                                    {differenceInYears(new Date(), parseISO(user?.dob)) + ' Years'}
                                </span>
                            </h2>
                            <div className="flex flex-wrap flex-col gap-1">
                                <span className="flex flex-wrap items-center gap-1">
                                    <UserRoundPen className="size-4" />I am In charge of
                                    <div className='font-bold text-xs'>12th <span className='text-orange'>C</span> Non Medical Science</div> and also teach several subjects across different classes.
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
                                {
                                    isMarried ? (
                                        <>
                                            {respect}{" "}
                                            <span className="capitalize">{user?.spouse_name}</span>
                                        </>
                                    )
                                        : (
                                            <>
                                                Mr.
                                                <span className="capitalize">{user?.father_name}</span>
                                            </>
                                        )
                                }
                            </span>
                            <span className="flex flex-wrap items-center gap-1">
                                <Phone className="size-4" />
                                {user?.phone}
                            </span>
                            <span className="flex flex-wrap items-center gap-1">
                                <Mail className="size-4" />
                                {user?.email}
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
                                <ImageUploader formik={formik} ref={fileRef} updateImageHandler={updateImageHandler} removeImageHandler={removeImageHandler} preview={preview} handleImageUploadTrigger={handleImageUploadTrigger} />
                                <div className="mt-3">
                                    <Gender formik={formik} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <TextField label="First Name" id="first_name" {...formik.getFieldProps("first_name")} error={formik.touched.first_name && formik.errors.first_name} required={true} />
                                <TextField label="Last Name" id="last_name" {...formik.getFieldProps("last_name")} error={formik.touched.last_name && formik.errors.last_name} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <EmailField label="Email Address" id="email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} required={true} />
                                <PhoneField label="Phone" id="phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone} required={true} />
                            </div>
                            <div className='flex flex-col gap-4 mt-6'>
                                {
                                    formik.values.role === "teacher" &&
                                    <Switch formik={formik} onChangeHandler={handleMarried} label={"Are you married?"} checked={formik.values.married} />
                                }
                                {
                                    formik.values.married && (
                                        <div className='grid grid-cols-2 gap-4'>
                                            <TextField label="Spouse Name" id="spouse_name" {...formik.getFieldProps("spouse_name")} error={formik.touched.spouse_name && formik.errors.spouse_name} required={true} />
                                        </div>
                                    )
                                }
                                {
                                    showParents &&
                                    <div className='grid grid-cols-2 gap-4'>
                                        <TextField label="Father Name" id="father_name" {...formik.getFieldProps("father_name")} error={formik.touched.father_name && formik.errors.father_name} required={true} />
                                        <TextField label="Mother Name" id="mother_name" {...formik.getFieldProps("mother_name")} error={formik.touched.mother_name && formik.errors.mother_name} required={true} />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='col-span-1 mt-12 ms-6'>
                            <OpenCalendar selected={formik.values.dob} onChangeHandler={onChangeHandler} maxDate={maxDate} name="dob" label="Date of Birth" required={true} error={formik.errors.dob} />
                        </div>
                    </div>
                    <button type="submit" className="mt-4 w-auto btn" disabled={loading || !formik.isValid}>{loading ? "Updating..." : "Update Profile"}</button>
                    {/* {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>} */}
                </form>
            </div>
        </>
    )
}

export default Profile
