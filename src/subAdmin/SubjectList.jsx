import SubAdmin from "../SubAdmin";
import { BookOpenText, Clock, Pencil, Trash2 } from "lucide-react";
import Table from "../components/common/Table";
import { subjectData } from "../const/constant";
import { useIsMobile } from "../hooks/useIsMobile";

const SubjectList = () => {
  const { isBelow640 } = useIsMobile();

  const columns = [
    {
      name: "Subject",
      cell: row => (
        <div className="flex md:items-center flex-col md:flex-row gap-1 md:gap-2">
          <span className="text-sm font-semibold text-navy leading-4">{row.subject}</span>
          <span className="tracking-wide pt-0.5 pb-1 px-2 rounded-full text-xs font-semibold bg-navy/10 text-navy">
            {row.id}
          </span>
        </div>
      ),
      selector: row => row.subject,
      sortable: true
    },
    {
      name: "Created At",
      omit: isBelow640,
      cell: row => (
        <div className="flex items-center gap-1">
          <Clock className='size-4' />
          {row.createdAt}
        </div>
      ),
      selector: row => row.createdAt
    },
    {
      name: '',
      cell: row => (
        <div className="flex flex-col gap-3 w-full items-end">
          <div className="flex flex-col gap-0 items-end sm:hidden">
            <span>Account Created At:</span>
            <div className="flex items-center gap-1">
              <Clock className='size-4' />
              {row.createdAt}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end w-full gap-1">
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
              <Table id="subjects" columns={columns} data={subjectData} btnText="Add Subject" btnIcon={<BookOpenText className="w-5 h-5 mx-auto" />} label="Subjects" subLabel="Add Subject, edit and more." />
            </div>
          </div>
        </div>
      </div>
    </SubAdmin>
  )
}

export default SubjectList
