import { useState } from "react";
import SubAdmin from "../SubAdmin";
import { Clock, Copy, Eye, Mail, Pencil, Phone, Plus, Trash2, UserRound } from "lucide-react";
import { teacherOptions, classOptions, streamOptions, sectionOptions, subjectOptions } from '../const/constant';
import Table from "../components/common/Table";
import CustomSelect from "../components/ui/CustomSelect";
import ImageUploader from "../components/ui/ImageUploader";
import Drawer from '../components/common/Drawer';
import { useIsMobile } from "../hooks/useIsMobile";
import { useDispatch } from "react-redux";
import { addTeacher } from "../features/teachers/teachersSlice";
import { useSelector } from "react-redux";

const TeacherList = () => {
    const [open, setOpen] = useState(false);
    const { isBelow1440, isBelow1024, isAbove1024 } = useIsMobile();
    const teachers = useSelector((state) => state.teachers);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(
            addTeacher({
                id: Date.now(),
                name: "John Doe",
                subject: "Math"
            })
        );
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        {
            name: "Teachers",
            grow: 12,
            omit: isAbove1024,
            cell: row => (
                <div className='flex items-start flex-col gap-4 xl:gap-2'>
                    <div className='flex items-start gap-2'>
                        <span className='inline-flex items-center justify-center size-9 rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full ' /></span>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-navy leading-4 mb-1">{row.name}</span>

                            <span className="inline-flex items-center tracking-wide gap-x-1.5 pt-0.5 pb-1 px-2 rounded-full text-xs font-semibold bg-navy/10 text-navy">
                                {row.id}
                                <button className='shrink-0 size-3 inline-flex items-center justify-center rounded-full hover:bg-primary-200 pt-0.5'>
                                    <Copy className='size-4 text-navy' />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap xl:flex-col items-end gap-4 xl:gap-1">
                        <span className="text-xs text-navy leading-4 flex flex-col gap-1">
                            <span className="ps-5">Spouse Name:</span>
                            <div className="flex items-start gap-1">
                                <UserRound className='size-4' />
                                <span className="block font-semibold pt-0.5">{row.spouseName}</span>
                            </div>
                        </span>
                        <div className="flex flex-col gap-1">
                            <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
                                <Mail className='size-4' />
                                {row.email}
                            </a>
                            <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                                <Phone className="size-4" />
                                {row.phone}
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className='size-4' /> Created At: {row.createdAt}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                        {Array.isArray(row.classesTeach) ? (
                            row.classesTeach.map((c, i) => (
                                <span
                                    key={i}
                                    className="inline-block bg-navy/10 rounded py-1 px-2"
                                >
                                    {c.class} {c.section}
                                    {c.stream ? `, ${c.stream}` : ""}
                                    {c.subject ? `, ${c.subject}` : ""}
                                </span>
                            ))
                        ) : (
                            <span>{row.classesTeach}</span>
                        )}

                        <div className="block w-full py-1">
                            Incharge Of: <span className="text-orange">{row.inchargeOf} {row.stream} {row.section}</span>
                        </div>

                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-0 xl:items-end">
                            <span className="ps-5">Account Created At:</span>
                            <div className="flex items-center gap-1">
                                <Clock className='size-4' />
                                {row.createdAt}
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full gap-1">
                            <button type="button" className="icon-btn">
                                <Eye className="size-5 mx-auto" />
                            </button>
                            <button type="button" className="icon-btn">
                                <Trash2 className="size-5 mx-auto" />
                            </button>
                            <button type="button" className="icon-btn">
                                <Pencil className="size-5 mx-auto" />
                            </button>
                        </div>
                    </div>
                </div>
            ),
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Name",
            grow: 2,
            omit: isBelow1024,
            cell: row => (
                <div className='flex items-start flex-col gap-2'>

                    <div className='flex items-start gap-2'>
                        <span className='inline-flex items-center justify-center size-9 rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full ' /></span>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-navy leading-4 mb-1">{row.name}</span>

                            <span className="inline-flex items-center tracking-wide gap-x-1.5 pt-0.5 pb-1 px-2 rounded-full text-xs font-semibold bg-navy/10 text-navy">
                                {row.id}
                                <button className='shrink-0 size-3 inline-flex items-center justify-center rounded-full hover:bg-primary-200 pt-0.5'>
                                    <Copy className='size-4 text-navy' />
                                </button>
                            </span>

                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col gap-1">
                        <span className="text-xs text-navy leading-4">
                            <span className="ps-5">Spouse Name:</span>
                            <div className="flex items-start gap-1">
                                <UserRound className='size-4' />
                                <span className="block font-semibold pt-0.5">{row.spouseName}</span>
                            </div>
                        </span>
                        <div className="3xl:hidden flex flex-col gap-1">

                            <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
                                <Mail className='size-4' />
                                {row.email}
                            </a>
                            <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                                <Phone className="size-4" />
                                {row.phone}
                            </a>
                        </div>
                    </div>
                </div>
            ),
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Contact",
            grow: 2,
            omit: isBelow1440,
            cell: row => (
                <div className="flex flex-wrap flex-col gap-1">

                    <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
                        <Mail className='size-4' />
                        {row.email}
                    </a>
                    <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                        <Phone className="size-4" />
                        {row.phone}
                    </a>
                </div>
            ),
            selector: row => row.contact
        },
        {
            name: "Classes Teach",
            wrap: true,
            grow: 3,
            omit: isBelow1024,
            cell: row => (
                <div className="flex flex-wrap items-center gap-1">
                    {Array.isArray(row.classesTeach) ? (
                        row.classesTeach.map((c, i) => (
                            <span
                                key={i}
                                className="inline-block bg-navy/10 rounded py-1 px-2"
                            >
                                {c.class} {c.section}
                                {c.stream ? `, ${c.stream}` : ""}
                                {c.subject ? `, ${c.subject}` : ""}
                            </span>
                        ))
                    ) : (
                        <span>{row.classesTeach}</span>
                    )}

                    <div className="block w-full py-1">
                        Incharge Of: <span className="text-orange">{row.inchargeOf} {row.stream} {row.section}</span>
                    </div>

                </div>
            )
        },
        {
            name: '',
            minWidth: "160px",
            omit: isBelow1024,
            cell: row => (
                <div className="flex flex-col gap-3 w-full items-end">
                    <div className="flex flex-col gap-0 items-end">
                        <span>Account Created At:</span>
                        <div className="flex items-center gap-1">
                            <Clock className='size-4' />
                            {row.createdAt}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-end w-full gap-1">
                        <button type="button" className="icon-btn">
                            <Eye className="size-5 mx-auto" />
                        </button>
                        <button type="button" className="icon-btn">
                            <Trash2 className="size-5 mx-auto" />
                        </button>
                        <button type="button" className="icon-btn">
                            <Pencil className="size-5 mx-auto" />
                        </button>
                    </div>
                </div>
            ),
        },
    ];
  
    return (
        <SubAdmin>
            <div className="flex flex-col">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                    <div className="min-w-full inline-block align-middle">
                        <div className="">
                            <div className="bg-white p-4 rounded mb-4">

                                <h2 className='font-bold text-lg' onClick={handleAdd}>Search Teachers</h2>
                                <p className="text-sm text-navy font-medium">Browse teachers by id, name, classroom, stream, section, subject, email, or phone.</p>
                                <div className='grid grid-cols-6 gap-4 my-4'>
                                    <CustomSelect
                                        options={teacherOptions}
                                        selectType="teacher"
                                        label="Name & Id"
                                        placeholder=""
                                    />
                                    <CustomSelect
                                        options={classOptions}
                                        selectType="classroom"
                                        label="Classroom"
                                        placeholder=""
                                    />
                                    <CustomSelect
                                        options={streamOptions}
                                        selectType="stream"
                                        label="Stream"
                                        placeholder=""
                                    />
                                    <CustomSelect
                                        options={sectionOptions}
                                        selectType="section"
                                        label="Section"
                                        placeholder=""
                                    />
                                    <CustomSelect
                                        options={subjectOptions}
                                        selectType="subject"
                                        label="Subject"
                                        placeholder=""
                                    />
                                    <div className={`col-span-1`}>
                                        <label htmlFor="" className="block text-sm font-medium text-navy mb-1">Email & Phone</label>
                                        <input type="text" name="" id="" placeholder="" className="input-field" />
                                    </div>
                                </div>
                            </div>

                            <Table id="teachers" columns={columns} data={teachers} handleOpen={handleOpen} btnText="Add Teacher" btnIcon={<Plus className="w-5 h-5 mx-auto" />} label="Teachers" subLabel="Add, edit, delete and search a teacher." />

                            <Drawer handleClose={handleClose} open={open}>
                                <form>
                                    <div className="flex flex-wrap gap-4 items-start">

                                        <ImageUploader />

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

                        </div>
                    </div>
                </div>
            </div>
        </SubAdmin>
    )
}

export default TeacherList
