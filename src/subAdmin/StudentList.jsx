import { useState } from "react";
import SubAdmin from "../SubAdmin"
import { Clock, Copy, Eye, GalleryThumbnails, Mail, Pencil, Phone, Plus, Trash2, UserRound, UserRoundPen } from "lucide-react";
import { studentOptions, classOptions, streamOptions, sectionOptions, subjectOptions } from '../const/constant';
import Table from "../components/common/Table";
import { useIsMobile } from "../hooks/useIsMobile";
import Drawer from "../components/common/Drawer";
import CustomSelect from "../components/ui/CustomSelect";

const StudentList = () => {
  const { isBelow1024, isBelow768, isBelow640 } = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const columns = [
    {
      name: "Name",
      // grow: 2,
      minWidth: "300px",
      // maxWidth: "300px",
      cell: row => (
        <div className="flex flex-col gap-4 sm:gap-2">
          <div className='flex items-center gap-2'>
            <span className='inline-flex items-center justify-center size-9 rounded-full overflow-hidden bg-navy/10'><img src={row.photo} alt="" className='h-full rounded-full max-w-full ' /></span>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-navy leading-4">{row.name}</span>
              <span className="inline-flex items-center tracking-wide gap-x-1.5 pt-0.5 pb-1 px-2 rounded-full text-xs font-semibold bg-navy/10 text-navy">
                {row.id}
                <button className='shrink-0 size-3 inline-flex items-center justify-center rounded-full hover:bg-primary-200 pt-0.5'>
                  <Copy className='size-4 text-navy' />
                </button>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex flex-wrap flex-col gap-1">
              <span className="text-navy">Parents:</span>
              <span className="text-navy flex items-center gap-1">
                <UserRound className="size-4" />
                {row.motherName}
              </span>
              <span className="text-navy flex items-center gap-1">
                <UserRound className="size-4" />
                {row.fatherName}
              </span>
            </div>
            <div className="flex flex-wrap flex-col gap-1">
              <span className="text-navy">Contact:</span>
              <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
                <Mail className='size-4' />
                {row.email}
              </a>
              <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                <Phone className="size-4" />
                {row.phone}
              </a>
            </div>
            <div className="flex lg:hidden flex-wrap flex-col gap-1">
              <span className="flex items-center gap-1 text-navy">
                <GalleryThumbnails className="size-4" /> {row.classroom} <span className="text-orange">{row.section}</span>
              </span>
              <span className="flex items-center gap-1 text-navy">
                <UserRoundPen className='size-4' />
                {row.classIncharge}
              </span>
              <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
                <Phone className="size-4" />
                {row.classInchargePhone}
              </a>
            </div>
            {row.subject?.length > 0 &&
              <div className="flex w-full flex-wrap gap-1 lg:hidden">
                {
                  row.subject.map((sub, index) => (
                    <span key={index} className="text-navy bg-navy/10 px-2 py-1 rounded font-semibold">{sub}</span>
                  ))
                }
              </div>
            }
          </div>
          <div className="flex flex-col gap-3 w-full sm:hidden">
            <div className="flex flex-col gap-0">
              <span>Account Created At:</span>
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
      name: "Class & Incharge",
      grow: 2,
      minWidth: "200px",
      maxWidth: "200px",
      omit: isBelow1024,
      cell: row => (
        <div className="flex flex-wrap flex-col gap-1">
          <span className="flex items-center gap-1 text-navy">
            <GalleryThumbnails className="size-4" /> {row.classroom} <span className="text-orange">{row.section}</span> {row.stream && <span className="text-navy bg-navy/10 px-2 pt-1 rounded font-semibold pb-1.5">{row.stream}</span>}
          </span>
          <span className="flex items-center gap-1 text-navy">
            <UserRoundPen className='size-4' />
            {row.classIncharge}
          </span>
          <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
            <Phone className="size-4" />
            {row.classInchargePhone}
          </a>
        </div>
      ),
      selector: row => row.classIncharge, sortable: true
    },
    {
      name: "Subjects",
      minWidth: "200px",
      omit: isBelow1024,
      grow: 2,
      cell: row => (
        <div className="flex flex-wrap gap-1">
          {row.subject?.length > 0 &&
            row.subject.map((sub, index) => (
              <span key={index} className="text-navy bg-navy/10 px-2 py-1 rounded font-semibold">{sub}</span>
            ))}
        </div>
      ),
      selector: row => row.classIncharge, sortable: true
    },
    // {
    //   name: "Parent Contact",
    //   omit: isBelow1024,
    //   grow: 2,
    //   cell: row => (
    //     <div className="flex flex-wrap flex-col gap-1">
    //       <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`mailto:${row.email}`}>
    //         <Mail className='size-4' />
    //         {row.email}
    //       </a>
    //       <a className="flex items-center gap-1 text-navy hover:no-underline hover:text-orange" href={`tel:${row.phone}`}>
    //         <Phone className="size-4" />
    //         {row.phone}
    //       </a>
    //     </div>
    //   ),
    //   selector: row => row.contact
    // },
    {
      name: '',
      minWidth: "160px",
      maxWidth: "160px",
      omit: isBelow640,
      cell: row => (
        <div className="flex flex-col gap-3 w-full">
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
  const data = [
    { id: "#2154879630", classroom: "3rd", stream: "", section: "A", subject: null, name: 'Aria Chen', photo: "/public/student.jpg", email: 'christina@site.com', phone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
    { id: "#2154879631", classroom: "4th", stream: "", section: "B", subject: null, name: 'Marcus Webb', photo: "/public/student.jpg", email: 'christina@site.com', phone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
    { id: "#2154879632", classroom: "12th", stream: "Non Medical", section: "C", subject: ["Physics", "Chemistry", "Mathematics", "English"], name: 'Marcus Webb', photo: "/public/student.jpg", email: 'christina@site.com', phone: 7986602514, classIncharge: "Mrs. Sheetal devi", classInchargePhone: 7986680522, motherName: "Mrs. Anita Rani", fatherName: "Mr. Paramjeet", createdAt: "28 Dec, 12:12" },
  ];
  return (
    <SubAdmin>
      <div className="flex flex-col">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
          <div className="min-w-full inline-block align-middle">
            <div className="">
              <div className="bg-white p-4 rounded mb-4">
                <h2 className='font-bold text-lg'>Search Students</h2>
                <p className="text-sm text-navy font-medium">Browse students by id, name, classroom, stream, section, email, or phone.</p>
                <div className='grid grid-cols-5 gap-4 mt-4'>
                  <CustomSelect
                    options={studentOptions}
                    selectType="student"
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
                  <div className={`col-span-1`}>
                    <label htmlFor="" className="block text-sm font-medium text-navy mb-1">Email & Phone</label>
                    <input type="text" name="" id="" placeholder="" className="input-field" />
                  </div>
                </div>
              </div>

              <Table id="students" columns={columns} data={data} handleOpen={handleOpen} btnText="Add Student" btnIcon={<Plus className="w-5 h-5 mx-auto" />} label="Students" subLabel="Add, edit, delete and search a student." />

              <Drawer handleClose={handleClose} open={open}>
                <form>
                  <div className="grid gap-y-4 h-screen overflow-auto">
                    <div className="grid gap-y-4">

                      <div>
                        <label htmlFor="teacher-name" className="block text-sm mb-2 text-foreground">Student Name</label>
                        <div className="relative">
                          <input type="text" id="teacher-name" name="teacher-name" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="teacher-error" />
                          <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="teacher-error">Please include a valid email address so we can get back to you</p>
                      </div>

                      <div className="max-w-sm w-full">
                        <label htmlFor="file-input" className="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input" className="block w-full bg-layer border border-layer-line rounded-lg text-sm text-foreground placeholder:text-muted-foreground-1 focus:z-10 focus:outline-hidden focus:border-primary-focus focus:ring-1 focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none file:bg-surface file:border-0 file:me-4 file:py-3 file:px-4" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <label htmlFor="email" className="block text-sm mb-2 text-foreground">Email</label>
                        </div>
                        <div className="relative">
                          <input type="email" id="email" name="email" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                          <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">Email required</p>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <label htmlFor="phone" className="block text-sm mb-2 text-foreground">phone</label>
                        </div>
                        <div className="relative">
                          <input type="tel" id="phone" name="phone" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="phone-error" />
                          <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="phone-error">10+ characters required</p>
                      </div>


                      <div>
                        <label htmlFor="mother-name" className="block text-sm mb-2 text-foreground">Mother Name</label>
                        <div className="relative">
                          <input type="text" id="mother-name" name="mother-name" className="py-2.5 sm:py-3 px-4 block w-full bg-layer border border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="spouse-error" />
                          <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="spouse-error">Please include a valid email address so we can get back to you</p>
                      </div>


                      <label htmlFor="class" className="block text-sm text-foreground">Class</label>
                      <div className="grid sm:grid-cols-2 sm:grid-row-2 gap-2">
                        <label htmlFor="3" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-form" id="3" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">3rd</span>
                        </label>

                        <label htmlFor="4" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-form" id="4" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">4th</span>
                        </label>

                        <label htmlFor="5" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-form" id="5" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">5th</span>
                        </label>

                        <label htmlFor="6" name="hs-radio-in-form" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-form" id="6" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">6th</span>
                        </label>
                      </div>

                      <label htmlFor="section" className="block text-sm text-foreground">Section</label>
                      <div className="grid sm:grid-cols-2 sm:grid-row-2 gap-2">
                        <label htmlFor="a" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-section" id="a" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">A</span>
                        </label>

                        <label htmlFor="b" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-section" id="b" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">B</span>
                        </label>

                        <label htmlFor="c" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-section" id="c" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">C</span>
                        </label>

                        <label htmlFor="d" name="hs-radio-in-section" className="flex items-center p-3 w-full bg-layer border border-layer-line rounded-lg text-sm focus:border-primary-focus focus:ring-primary-focus">
                          <input type="radio" name="hs-radio-in-section" id="d" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                          <span className="text-sm ms-3 text-muted-foreground-1">D</span>
                        </label>
                      </div>

                      <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Create Teacher</button>
                    </div>

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

export default StudentList
