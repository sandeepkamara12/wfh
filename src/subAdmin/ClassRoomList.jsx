import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

//Components
import Table from "../components/common/Table";

//Slices
import { deleteClassroomThunk, getClassroomThunk} from "../features/subAdmin/classroomSlice";

//Icons
import { Loader, Pencil, Plus, Trash2 } from "lucide-react";

const ClassRoomList = () => {
  const dispatch = useDispatch();

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
      name: "Delete All",
      cell: (row) => (
        <div className="flex flex-wrap flex-col gap-1 text-black">
          <span>{row?.name}</span>
        </div>
      ),
      selector: (row) => row.name,
    },
    {
      name: "",
      cell: (row) => {
        return (
          <div className="flex flex-col gap-3 w-full items-end">
            <div className="flex flex-wrap items-center justify-end w-full gap-1">
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
    <div className="table-wrapper">
      <div className="table-inner-wrapper">
        Classrooms
        <div>
          <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={()=>handleOpen('classroom')} />
        </div>
      </div>
      <Table
        needHeader={true}
        id="classrooms"
        columns={columns}
        data={classrooms}
        expandableRows={false}
      />
    </div>
  );
};

export default ClassRoomList;
