import TextField from "../ui/TextField"
import EmailField from "../ui/EmailField"
import PhoneField from "../ui/PhoneField"
import RadioCard from "../ui/RadioCard"
import { GraduationCap, Pencil, UserRoundPen } from "lucide-react"
import DatePicker from "react-datepicker"
import { useState } from "react"
import { format, subYears } from "date-fns";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createRoleThunk } from "../../features/subAdmin/createRoleSlice"

const CreateRole = () => {
    const [createRole, setCreateRole] = useState({ role: "teacher", first_name: "", last_name: "", email: "", phone: "", married: false, spouse_name: "", father_name: "", mother_name: "", dob: null });
    const dispatch = useDispatch();
    const loading = useSelector(state => state.role.loading.createRole);
    const maxDate = subYears(new Date(), 18);

    const handleMarried = () => {
        setCreateRole((prev) => {
            const married = !prev.married;

            return {
                ...prev,
                married,
                spouse_name: married ? prev.spouse_name : "",
                father_name: married ? "" : prev.father_name,
                mother_name: married ? "" : prev.mother_name
            };
        });
    };

    const onChangeHandler = (e) => {
        const { id, value } = e.target;
        setCreateRole(prev => ({ ...prev, [id]: value }));
    }

    const buildPayload = () => ({
        ...createRole,
        dob: createRole.dob
            ? format(createRole.dob, "dd-MM-yyyy")
            : null
    });

    const handleDateChange = (date) => {
        setCreateRole(prev => ({ ...prev, dob: date }));
    };

    const handleCreateRole = async (e) => {
        e.preventDefault();

        const payload = buildPayload();

        try {
            const result = await dispatch(createRoleThunk({ payload })).unwrap();
            console.log(result, 'result');
            if (result.success) {
                toast.success(`${result.message}`);
                setCreateRole({
                    role: "teacher",
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    married: false,
                    spouse_name: "",
                    father_name: "",
                    mother_name: "",
                    dob: null
                });
            }
            else {
                console.log("error");
            }

        } catch (error) {
            console.log(error);
            toast.error(error?.message || "Something went wrong");
        }
    };

    const showParents = createRole.role === "student" || (createRole.role === "teacher" && !createRole.married);

    return (
        <div className="bg-white p-6 rounded">
            <h2 className="mb-6 font-bold text-lg">Create <span className="text-orange">Role</span></h2>
            <form className="grid gap-y-4" onSubmit={handleCreateRole}>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-navy mb-1">Select Role</label>
                        <div className="flex flex-wrap gap-2">
                            <RadioCard icon={<UserRoundPen className="size-5" />} text="Teacher" group="role" value="teacher" id="teacher" checked={createRole.role === 'teacher'} onChange={onChangeHandler} />
                            <RadioCard icon={<GraduationCap className="size-5" />} text="Student" group="role" value="student" id="student" checked={createRole.role === 'student'} onChange={onChangeHandler} />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <span className="inline-block size-19 bg-white rounded-full relative">
                            <span className="inline-block border-2 border-navy size-19 bg-white rounded-full overflow-hidden">
                                <svg className="size-full text-navy" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.62854" y="0.359985" width="15" height="15" rx="7.5" fill="currentColor" className="fill-white" />
                                    <path d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z" fill="currentColor" />
                                    <path d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z" fill="currentColor" />
                                </svg>
                            </span>
                            <span className="bg-navy absolute top-0 right-0 border-2 border-navy p-1 rounded-full">
                                <Pencil className="size-4 text-white" />
                            </span>
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <TextField label="First Name" id="first_name" value={createRole.first_name} onChange={onChangeHandler} />
                    <TextField label="Last Name" id="last_name" value={createRole.last_name} onChange={onChangeHandler} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <EmailField label="Email Address" id="email" value={createRole.email} onChange={onChangeHandler} />
                    <PhoneField label="Phone" id="phone" value={createRole.phone} onChange={onChangeHandler} />
                </div>
                {
                    createRole.role === "teacher" &&
                    <>
                        <div className="flex flex-wrap items-center gap-5">
                            <div className="hs-tooltip flex items-center gap-x-3">
                                <label htmlFor="hs-basic-usage" className="relative inline-block w-11 h-6 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="hs-basic-usage"
                                        className="peer sr-only"
                                        onChange={handleMarried}
                                        checked={createRole.married}
                                    />
                                    <span className="absolute inset-0 bg-white border-2 border-navy rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-orange peer-checked:border-orange"></span>
                                    <span className="absolute top-1/2 inset-s-1 -translate-y-1/2 size-4 bg-navy rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-[calc(100%+5px)] peer-checked:bg-white"></span>
                                </label>
                                <label htmlFor="hs-tooltip-example" className="text-sm text-muted-foreground-1">Are you married?</label>
                            </div>
                        </div>
                        {
                            createRole.married &&
                            <TextField label="Spouse Name" id="spouse_name" value={createRole.spouse_name} onChange={onChangeHandler} />
                        }
                    </>
                }
                {
                    showParents &&
                    <>
                        <TextField label="Father Name" id="father_name" value={createRole.father_name} onChange={onChangeHandler} />
                        <TextField label="Mother Name" id="mother_name" value={createRole.mother_name} onChange={onChangeHandler} />
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
                            selected={createRole.dob}
                            onChange={handleDateChange}
                            calendarClassName="custom-calendar"
                            className="custom-datepicker-input"
                            dateFormat="dd-MM-yyyy"
                        />
                    </div>
                }
                {/* {selectedDate && <p className="mt-4 text-sm text-muted-foreground-2">{selectedDate.toLocaleDateString()}</p>} */}
                <button type="submit" className="btn" disabled={loading}>{loading ? "Creating..." : "Create Role"}</button>
            </form>
        </div>
    )
}

export default CreateRole
