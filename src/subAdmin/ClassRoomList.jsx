import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

//Components
import Table from "../components/common/Table";

//Slices
import { deleteClassroomThunk, getClassroomThunk } from "../features/subAdmin/classroomSlice";

//Icons
import { Eye, Loader, Pencil, Plus, SlidersHorizontal, Trash2 } from "lucide-react";
import TextField from "../components/ui/TextField";
import { classroomCardData } from "../const/constant";
import DashboardCard from "../components/subadmin/dashboard/DashboardCard";
import { useIsMobile } from "../hooks/useIsMobile";

const ClassRoomList = () => {
  const dispatch = useDispatch();
const { isBelow640, isBelow768, isBelow1024, isBelow480 } = useIsMobile();
  const [loadingId, setLoadingId] = useState(null);
  const { handleOpen, setIsEdit } = useOutletContext();

  let classrooms = useSelector((state) => state.classroom.classrooms);
  // Get Classrooms on component mount
  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const result = await dispatch(getClassroomThunk()).unwrap();
        if (result?.success) {
          console.log('classrooms loaded!')
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchClassrooms();
  }, []);

  const handleDelete = async (id) => {
    if (id == "") return;
    try {
      setLoadingId(id);
      let result = null;
      result = await dispatch(deleteClassroomThunk({ id })).unwrap()
      if (result?.success) {
        toast.dismiss();
        toast.success(result?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId(null);
    }
  };

  const columns = [
    {
      name: "Classrooms",
      cell: (row) => (
        <Link to={`${row?.id}`} className="text-navy">{row?.name}</Link>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Sections",
      omit: isBelow768,
      cell: (row) => (
        <span>{row?.sections ?? 5}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Students",
      omit: isBelow480,
      cell: (row) => (
        <span>{row?.students ?? 80}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Teachers",
      omit: isBelow640,
      cell: (row) => (
        <span>{row?.students ?? 8}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Class Incharge",
      omit: isBelow1024,
      minWidth:'200px',
      cell: (row) => (
        <div className="flex flex-wrap flex-col gap-0.5">
          <span>{row.classIncharge ?? 'Mr. Taranjeet Singh'}</span>
          <span>{row.classInchargePhone ?? '8524697310'}</span>
        </div>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Status",
      omit: isBelow1024,
      cell: (row, index) => (
        <span>{index % 2 == 1 ? 'Active' : 'Inactive'}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "",
      minWidth:'150px',
      cell: (row) => {
        return (
          <div className="flex flex-col gap-3 w-full items-end">
            <div className="flex flex-wrap items-center justify-end w-full gap-1">
              <button className="btn icon_btn navy-btn">
                <Eye className="own-icon" />
              </button>
              <button type="button" className="btn icon_btn btn_with_text navy-btn" onClick={() => handleDelete(row?.id)}
                disabled={loadingId === row?.id}>
                {loadingId === row?.id ? (<Loader className="loader own-icon" />) : (<Trash2 className="own-icon" />)}
              </button>
              <button
                type="button"
                className="btn icon_btn btn_with_text navy-btn"
                onClick={() => {
                  setIsEdit(row);
                  handleOpen('classroom');
                }
                }
                disabled={loadingId === row?.id}
              >
                <Pencil className="size-5 mx-auto" />
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="grid gap-4">

      <div className="grid lg:grid-cols-2 gap-4 mb-3">
        <div>
          <h2 className='font-bold text-xl capitalize text-navy'>All Classrooms</h2>
          <p className="text-sm text-gray-500">Manage classrooms, sections, students, teachers and class assignments.</p>
        </div>
        <div className="flex items-center lg:justify-end">
          <TextField icon="search" label="" placeholder="Search Classrooms" className="w-full lg:w-2/3" />
        </div>
      </div>

      <div className="dashboard-main-card-wrapper">
        {classroomCardData.map((item, index) => (
          <DashboardCard
            key={index}
            label={item.label}
            count={item.count}
            link={item.link}
            onPlusClick={handleOpen}
            id={item.id}
            hideAddBtn={item?.hideAddBtn}
          />
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="table-wrapper">
          <div className="table-inner-wrapper">
            All Classrooms
            <div className="flex flex-wrap items-center gap-2">
              <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={() => handleOpen('classroom')} />
              <Trash2 className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" disabled />
              <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
            </div>
          </div>
          <Table
            needHeader={true}
            id="classrooms"
            columns={columns}
            data={classrooms}
            expandableRows={false}
            paginationPerPage={5}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassRoomList;
