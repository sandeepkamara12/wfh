import { Eye, Loader, Pencil, Plus, SlidersHorizontal, Trash2 } from 'lucide-react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteClassroomThunk, getClassroomThunk } from '../features/subAdmin/classroomSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsMobile } from '../hooks/useIsMobile';
import TextField from '../components/ui/TextField';
import DashboardCard from '../components/subadmin/dashboard/DashboardCard';
import { classroomCardData, singleClassroomCardData } from '../const/constant';
import Table from '../components/common/Table';

const ClassRoomDetail = () => {
  const { id } = useParams();
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

  //  const columns = [
  //   {
  //     name: "Sections",
  //     omit: isBelow768,
  //     cell: (row) => (
  //       <span>{row?.sections ?? 'A'}</span>
  //     ),
  //     selector: (row) => row.name,
  //   },
  //   {
  //     name: "Students",
  //     omit: isBelow480,
  //     cell: (row) => (
  //       <span>{row?.students ?? 80}</span>
  //     ),
  //     selector: (row) => row.name,
  //   },
  //   {
  //     name: "Teachers",
  //     omit: isBelow640,
  //     cell: (row) => (
  //       <span>{row?.students ?? 8}</span>
  //     ),
  //     selector: (row) => row.name,
  //   },
  //   {
  //     name: "Class Incharge",
  //     omit: isBelow1024,
  //     minWidth: '200px',
  //     cell: (row) => (
  //       <div className="flex flex-wrap flex-col gap-0.5">
  //         <span>{row.classIncharge ?? 'Mr. Taranjeet Singh'}</span>
  //         <span>{row.classInchargePhone ?? '8524697310'}</span>
  //       </div>
  //     ),
  //     selector: (row) => row.name,
  //   },
  //   {
  //     name: "Status",
  //     omit: isBelow1024,
  //     cell: (row, index) => (
  //       <span>{index % 2 == 1 ? 'Active' : 'Inactive'}</span>
  //     ),
  //     selector: (row) => row.name,
  //   },
  //   {
  //     name: "",
  //     minWidth: '150px',
  //     cell: (row) => {
  //       return (
  //         <div className="flex flex-col gap-3 w-full items-end">
  //           <div className="flex flex-wrap items-center justify-end w-full gap-1">
  //             <button className="btn icon_btn navy-btn">
  //               <Eye className="own-icon" />
  //             </button>
  //             <button type="button" className="btn icon_btn btn_with_text navy-btn" onClick={() => handleDelete(row?.id)}
  //               disabled={loadingId === row?.id}>
  //               {loadingId === row?.id ? (<Loader className="loader own-icon" />) : (<Trash2 className="own-icon" />)}
  //             </button>
  //             <button
  //               type="button"
  //               className="btn icon_btn btn_with_text navy-btn"
  //               onClick={() => {
  //                 setIsEdit(row);
  //                 handleOpen('classroom');
  //               }
  //               }
  //               disabled={loadingId === row?.id}
  //             >
  //               <Pencil className="size-5 mx-auto" />
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

const columns = [
  {
    name: "Sections",
    omit: isBelow768,
    cell: (row) => (
      <span>{row?.section}</span>
    ),
    selector: (row) => row?.section,
  },
  {
    name: "Students",
    omit: isBelow480,
    cell: (row) => (
      <span>{row?.students}</span>
    ),
    selector: (row) => row?.students,
  },
  {
    name: "Teachers",
    omit: isBelow640,
    cell: (row) => (
      <span>{row?.teachers}</span>
    ),
    selector: (row) => row?.teachers,
  },
  {
    name: "Class Incharge",
    omit: isBelow1024,
    minWidth: "200px",
    cell: (row) => (
      <div className="flex flex-wrap flex-col gap-0.5">
        <span>{row?.classIncharge}</span>
        <span>{row?.phone}</span>
      </div>
    ),
    selector: (row) => row?.classIncharge,
  },
  {
    name: "Status",
    omit: isBelow1024,
    cell: (row) => (
      <span>{row?.status}</span>
    ),
    selector: (row) => row?.status,
  },
  {
    name: "",
    minWidth: "150px",
    cell: (row) => {
      return (
        <div className="flex flex-col gap-3 w-full items-end">
          <div className="flex flex-wrap items-center justify-end w-full gap-1">

            <button className="btn icon_btn navy-btn">
              <Eye className="own-icon" />
            </button>

            <button
              type="button"
              className="btn icon_btn btn_with_text navy-btn"
              onClick={() => handleDelete(row?.id)}
              disabled={loadingId === row?.id}
            >
              {loadingId === row?.id ? (
                <Loader className="loader own-icon" />
              ) : (
                <Trash2 className="own-icon" />
              )}
            </button>

            <button
              type="button"
              className="btn icon_btn btn_with_text navy-btn"
              onClick={() => {
                setIsEdit(row);
                handleOpen("classroom");
              }}
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

  const classRoomData = [
  {
    id: 1,
    section: "A",
    students: 80,
    teachers: 8,
    classIncharge: "Mr. Rajesh Kumar",
    phone: "9876543210",
    status: "Active",
  },
  {
    id: 2,
    section: "B",
    students: 72,
    teachers: 7,
    classIncharge: "Mrs. Priya Sharma",
    phone: "9812345678",
    status: "Active",
  },
  {
    id: 3,
    section: "C",
    students: 65,
    teachers: 6,
    classIncharge: "Mr. Amit Verma",
    phone: "9765432109",
    status: "Inactive",
  },
  {
    id: 4,
    section: "D",
    students: 91,
    teachers: 9,
    classIncharge: "Mrs. Neha Singh",
    phone: "9898989898",
    status: "Active",
  },
  {
    id: 5,
    section: "E",
    students: 76,
    teachers: 7,
    classIncharge: "Mr. Vikram Mehta",
    phone: "9823456712",
    status: "Active",
  },
  {
    id: 6,
    section: "F",
    students: 58,
    teachers: 6,
    classIncharge: "Mrs. Anjali Gupta",
    phone: "9753124680",
    status: "Inactive",
  },
  {
    id: 7,
    section: "G",
    students: 84,
    teachers: 8,
    classIncharge: "Mr. Sandeep Yadav",
    phone: "9871234567",
    status: "Active",
  },
  {
    id: 8,
    section: "H",
    students: 69,
    teachers: 7,
    classIncharge: "Mrs. Pooja Malhotra",
    phone: "9801122334",
    status: "Active",
  },
  {
    id: 9,
    section: "I",
    students: 88,
    teachers: 8,
    classIncharge: "Mr. Rahul Kapoor",
    phone: "9867543210",
    status: "Inactive",
  },
  {
    id: 10,
    section: "J",
    students: 63,
    teachers: 6,
    classIncharge: "Mrs. Ritu Arora",
    phone: "9797979797",
    status: "Active",
  },
  {
    id: 11,
    section: "K",
    students: 95,
    teachers: 10,
    classIncharge: "Mr. Manoj Bhatia",
    phone: "9834567890",
    status: "Active",
  },
  {
    id: 12,
    section: "L",
    students: 71,
    teachers: 7,
    classIncharge: "Mrs. Kavita Joshi",
    phone: "9723456781",
    status: "Inactive",
  },
];

  return (
    <div className="grid gap-4">
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <h2 className='font-bold text-xl capitalize text-navy'>Classrooms {id}</h2>
          <p className="text-sm text-gray-500">Manage classrooms, sections, students, teachers and class assignments.</p>
        </div>
        <div className="flex items-center lg:justify-end">
          <TextField icon="search" label="" placeholder="Search Classrooms" className="w-full lg:w-2/3" />
        </div>
      </div>

      <div className="dashboard-main-card-wrapper">
        {singleClassroomCardData.map((item, index) => (
          <DashboardCard
            key={index}
            label={item.label}
            count={item.count}
            link={item.link}
            onPlusClick={handleOpen}
            id={item.id}
            needIcon={false}
            hideAddBtn={item?.hideAddBtn}
          />
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="table-wrapper">
          <div className="table-inner-wrapper">
            Classrooms {id}
            <div className="flex flex-wrap items-center gap-2">
              <Trash2 className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" disabled />
              <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
            </div>
          </div>
          <Table
            needHeader={true}
            id="classrooms"
            columns={columns}
            data={classRoomData}
            expandableRows={false}
            paginationPerPage={10}
          />
        </div>
      </div>
    </div>
  )
}

export default ClassRoomDetail
