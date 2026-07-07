import { useRef } from "react"
import { classOptions, sectionOptions, streamOptions, subjectOptions } from "../../const/constant"
import Drawer from "../common/Drawer"
import ImageUploader from "../common/ImageUploader"
import CustomSelect from "../ui/CustomSelect"
import useImageUpload from "../../hooks/useImageUpload"
import { toast } from "react-toastify"
import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"
import { format } from "date-fns"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"

const AddTeacher = () => {
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
    const { preview, handleChange, handleRemove } = useImageUpload(formik, "file");
    const handleImageUploadTrigger = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }
    return (
        <Drawer>
            <form>
                <div className="flex flex-wrap gap-4 items-start">

                    <ImageUploader formik={formik} ref={fileRef} updateImageHandler={handleChange} removeImageHandler={handleRemove} preview={preview} handleImageUploadTrigger={handleImageUploadTrigger} />

                    <div className="w-full">
                        <label htmlFor="teacher-name" className="mb-1 block font-medium text-navy text-sm">Teacher Name</label>
                        <div className="relative">
                            <input type="text" id="teacher-name" name="teacher-name" className="input-field" required aria-describedby="teacher-error" />
                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="teacher-error">Please include a valid email address so we can get back to you</p>
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="mb-1 block font-medium text-navy text-sm">Email</label>
                        <div className="relative w-full">
                            <input type="email" id="email" name="email" className="input-field" required aria-describedby="email-error" />
                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">Email required</p>
                    </div>

                    <div className="w-full">
                        <label htmlFor="phone" className="mb-1 block font-medium text-navy text-sm">Phone</label>
                        <div className="relative w-full">
                            <input type="tel" id="phone" name="phone" className="input-field" required aria-describedby="phone-error" />
                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="phone-error">10+ characters required</p>
                    </div>


                    <div className="w-full">
                        <label htmlFor="spouse-name" className="mb-1 block font-medium text-navy text-sm">Spouse Name</label>
                        <div className="relative w-full">
                            <input type="text" id="spouse-name" name="spouse-name" className="input-field" required aria-describedby="spouse-error" />
                            <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="spouse-error">Please include a valid email address so we can get back to you</p>
                    </div>

                    <div className="w-full">
                        <label htmlFor="inchargeOf" className="block font-medium text-navy text-sm">Incharge Of</label>
                        <div className="grid grid-cols-2 gap-2">
                            <CustomSelect
                                options={classOptions}
                                selectType="classroom"
                                label=""
                                placeholder="Select Classroom"
                                className="w-full"
                            />

                            <CustomSelect
                                options={sectionOptions}
                                selectType="section"
                                label=""
                                placeholder="Select Section"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="otherClasses" className="block font-medium text-navy text-sm">Teach Other Classes</label>
                        <div className='grid grid-cols-4 gap-2'>
                            <CustomSelect
                                options={classOptions}
                                selectType="classroom"
                                label="Classroom"
                                placeholder="Search Classroom"
                            />
                            <CustomSelect
                                options={streamOptions}
                                selectType="stream"
                                label="Stream"
                                placeholder="Search Stream"
                            />
                            <CustomSelect
                                options={sectionOptions}
                                selectType="section"
                                label="Section"
                                placeholder="Search Section"
                            />
                            <CustomSelect
                                options={subjectOptions}
                                selectType="subject"
                                label="Subject"
                                placeholder="Search Subject"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn">Create Teacher</button>
                </div>

            </form>
        </Drawer>
    )
}

export default AddTeacher
