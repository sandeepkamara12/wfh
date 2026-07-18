import DatePicker from "react-datepicker";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Note from "../components/Note";
import { BookOpenText } from "lucide-react";
import RadioCard from "../components/ui/RadioCard";
import OpenCalendar from "../components/ui/OpenCalendar";
import { useDispatch, useSelector } from "react-redux";
import { format, subYears } from "date-fns";
import * as Yup from "yup";
import { toast } from "react-toastify"
import { useFormik } from "formik";
import { createRoleThunk } from "../features/subAdmin/createRoleSlice";

const UploadDocument = () => {
    // Redux
    const loading = useSelector(state => state.role.loading.createRole);
    const dispatch = useDispatch();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [preview, setPreview] = useState(null);

    // Date
    // const maxDate = subYears(new Date(), 18);

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

    const captureImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            // document.getElementById("preview").src = url;
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
            console.log(payload);
            // try {
            //     const result = await dispatch(createRoleThunk({ payload })).unwrap();

            //     if (result.success) {
            //         toast.success(result.message);
            //         resetForm({
            //             values: {
            //                 role: "teacher",
            //                 first_name: "",
            //                 last_name: "",
            //                 email: "",
            //                 phone: "",
            //                 married: false,
            //                 spouse_name: "",
            //                 father_name: "",
            //                 mother_name: "",
            //                 dob: null,
            //                 gender: "male",
            //                 file: null
            //             }
            //         });
            //     }
            //     else {
            //         toast.warning(result.message);
            //     }
            // } catch (error) {
            //     toast.error(error?.message || "Something went wrong");
            // }
        },
    });

    //  const preview = useMemo(() => {
    //     if (!formik.values.file) return null;
    //     return URL.createObjectURL(formik.values.file);
    // }, [formik.values.file]);

    // useEffect(() => {
    //     return () => {
    //         if (preview) URL.revokeObjectURL(preview);
    //     };
    // }, [preview]);

    // const updateImageHandler = (e) => {
    //     const file = e.currentTarget.files[0];
    //     formik.setFieldValue("file", file);
    // }

    // const removeImageHandler = () => {
    //     formik.setFieldValue("file", null);
    // }

    const onChangeHandler = (date) => {
        formik.setFieldValue("dob", date)
    }


    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photo, setPhoto] = useState(null);

    // Start camera
    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
            }
        };

        startCamera();

        // cleanup (stop camera)
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Capture image
    const capture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        const context = canvas.getContext("2d");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0);

        const dataURL = canvas.toDataURL("image/png");
        setPhoto(dataURL);
    };

// const dataURLtoFile = (dataurl, filename) => {
//   const arr = dataurl.split(",");
//   const mime = arr[0].match(/:(.*?);/)[1];
//   const bstr = atob(arr[1]);
//   let n = bstr.length;
//   const u8arr = new Uint8Array(n);

//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }

//   return new File([u8arr], filename, { type: mime });
// };

// // usage
// const file = dataURLtoFile(photo, "image.png");

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 col-start-1 bg-white p-4 rounded">

                <h2 className="font-bold text-lg">Upload <span className="text-orange">documents</span></h2>
                <div className="grid grid-cols-3 items-start gap-4">
                    <div className="col-span-2 grid items-start gap-6">
                        <div className="flex flex-wrap gap-4">
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                        </div>

                        <div className="">
                            <label className="block text-sm font-medium text-black mb-1">Select Classroom</label>
                            <div className="flex flex-wrap gap-2">
                                <RadioCard icon={""} text="1 st" group="class" id="teacher_1" />
                                <RadioCard icon={""} text="2 nd" group="class" id="teacher_2" />
                                <RadioCard icon={""} text="3 rd" group="class" id="teacher_3" />
                                <RadioCard icon={""} text="4 th" group="class" id="teacher_4" />
                            </div>
                        </div>

                        <div className="">
                            <label className="block text-sm font-medium text-black mb-1">Select Stream</label>
                            <div className="flex flex-wrap gap-2">
                                <RadioCard icon={""} text="Arts" group="stream" id="teacher_arts" />
                                <RadioCard icon={""} text="Medical" group="stream" id="teacher_medical" />
                                <RadioCard icon={""} text="Non Medical" group="stream" id="teacher_non_medical" />
                                <RadioCard icon={""} text="Commerce" group="stream" id="teacher_commerce" />
                            </div>
                        </div>

                        <div className="">
                            <label className="block text-sm font-medium text-black mb-1">Select Section</label>
                            <div className="flex flex-wrap gap-2">
                                <RadioCard icon={""} text="A" group="section" id="teacher_A" />
                                <RadioCard icon={""} text="B" group="section" id="teacher_B" />
                                <RadioCard icon={""} text="C" group="section" id="teacher_C" />
                                <RadioCard icon={""} text="D" group="section" id="teacher_D" />
                                <RadioCard icon={""} text="E" group="section" id="teacher_E" />
                                <RadioCard icon={""} text="F" group="section" id="teacher_F" />
                            </div>
                        </div>

                        <div className="">
                            <label className="block text-sm font-medium text-black mb-1">Select Subject</label>
                            <div className="flex flex-wrap gap-2">
                                <RadioCard icon={<BookOpenText className="size-5" />} text="Computer" group="subject" id="teacher_computer" />
                                <RadioCard icon={<BookOpenText className="size-5" />} text="Maths" group="subject" id="teacher_maths" />
                                <RadioCard icon={<BookOpenText className="size-5" />} text="Hindi" group="subject" id="teacher_hindi" />
                                <RadioCard icon={<BookOpenText className="size-5" />} text="English" group="subject" id="teacher_english" />
                                <RadioCard icon={<BookOpenText className="size-5" />} text="Science" group="subject" id="teacher_science" />
                                <RadioCard icon={<BookOpenText className="size-5" />} text="Social Studies" group="subject" id="teacher_social_studies" />
                            </div>
                        </div>
                    </div>

                    {
                        <div className="">
                            <OpenCalendar formik={formik} onChangeHandler={onChangeHandler} maxDate={selectedDate} name="dob" label="Select Date" required={true} needWarning={false} />
                        </div>
                        // <div className="mt-4">
                        //     <label className="block text-sm font-medium text-black mb-1">Select Date</label>
                        //     <DatePicker calendarClassName="custom-calendar" className="custom-datepicker-input" selected={selectedDate} onChange={(date) => { setSelectedDate(date); }} inline />
                        // </div>
                    }
                    {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>}

                    <video ref={videoRef} autoPlay playsInline width="300" />
                    <button onClick={capture}>Capture</button>
                    <canvas ref={canvasRef} style={{ display: "none" }} />
                    {photo && (
                        <div>
                            <h3>Captured Image:</h3>
                            <img src={photo} alt="captured" width="300" />
                        </div>
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        id="cameraInput"
                        onChange={captureImage}
                    />

                    <img id="preview" width="200" src={preview} />


                </div>
            </div>
        </div>
    )
}

export default UploadDocument
