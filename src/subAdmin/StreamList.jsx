import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

//Components
import Table from "../components/common/Table";

//Slices
import { deleteStreamThunk, getStreamThunk } from "../features/subAdmin/streamSlice";

//Icons
import { Eye, Loader, Pencil, Plus, SlidersHorizontal, Trash2 } from "lucide-react";
import TextField from "../components/ui/TextField";
import { useIsMobile } from "../hooks/useIsMobile";

const StreamList = () => {
  const dispatch = useDispatch();

  const [loadingId, setLoadingId] = useState(null);
  const { handleOpen, setIsEdit } = useOutletContext();
  const { isBelow640, isBelow768, isBelow1024, isBelow480 } = useIsMobile();

  let streams = useSelector((state) => state.stream.streams);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        await dispatch(getStreamThunk()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    fetchStreams();
  }, [])

  const handleDelete = async (id) => {
    if (id == "") return;
    try {
      setLoadingId(id);
      let result = null;
      result = await dispatch(deleteStreamThunk({ id })).unwrap()
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
      name: "Streams",
      cell: row => (
          <span className="text-sm font-semibold text-navy leading-4 capitalize">{row.name}</span>
      ),
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Code",
      cell: row => (
           <span>{row?.code ?? 'PCB, PCM, COM, ART, VOC'}</span>
      ),
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Classrooms",
      omit: isBelow640,
      cell: (row) => (
        <span>{row?.classrooms ?? 'XI, XII'}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Subjects",
      omit: isBelow640,
      cell: (row) => (
        <span>{row?.subjects ?? 'Alzebra, Economics'}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Students",
      omit: isBelow640,
      cell: (row) => (
        <span>{row?.students ?? '88'}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Teachers",
      omit: isBelow640,
      cell: (row) => (
        <span>{row?.teachers ?? '10'}</span>
      ),
      selector: (row) => row.name,
    },
    {
      name: "Sections",
      omit: isBelow640,
      cell: (row) => (
        <span>{row?.sections ?? '3'}</span>
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
      name: '',
      cell: row => (
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
                handleOpen('stream');
              }
              }
              disabled={loadingId === row?.id}
            >
              <Pencil className="size-5 mx-auto" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid gap-4">
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <h2 className='font-bold text-xl capitalize text-navy'>All Streams</h2>
          <p className="text-sm text-gray-500">Manage classrooms, sections, students, teachers and class assignments.</p>
        </div>
        <div className="flex items-center lg:justify-end">
          <TextField icon="search" label="" placeholder="Search Streams" className="w-full lg:w-2/3" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="table-wrapper">
          <div className="table-inner-wrapper">
            Streams
            <div className="flex flex-wrap items-center gap-2">
              <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={() => handleOpen('stream')} />
              <Trash2 className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" disabled />
              <SlidersHorizontal onClick={() => handleOpen('filter')} className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" />
            </div>
          </div>
          <Table
            needHeader={true}
            id="streams"
            columns={columns}
            data={streams}
            paginationPerPage={10}
          />
        </div>
      </div>
    </div>
  )
}

export default StreamList
