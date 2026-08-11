import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

//Components
import Table from "../components/common/Table";

//Slices
import { deleteStreamThunk, getStreamThunk } from "../features/subAdmin/streamSlice";

//Icons
import { Loader, Pencil, Plus, Trash2 } from "lucide-react";

const StreamList = () => {
  const dispatch = useDispatch();

  const [loadingId, setLoadingId] = useState(null);
  const { handleOpen, setIsEdit } = useOutletContext();

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
      name: "Delete All",
      cell: row => (
        <div className="flex md:items-center flex-col md:flex-row gap-1 md:gap-2">
          <span className="text-sm font-semibold text-black leading-4">{row.name}</span>
        </div>
      ),
      selector: row => row.name,
      sortable: true
    },
    {
      name: '',
      cell: row => (
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
    <div className="table-wrapper">
      <div className="table-inner-wrapper">
        Streams
         <div>
          <Plus className="size-5 shrink-0 hover:text-orange cursor-pointer transition-all" onClick={()=>handleOpen('stream')} />
        </div>
      </div>
      <Table
        needHeader={true}
        id="streams"
        columns={columns}
        data={streams}
        expandableRows={false}
      />
    </div>
  )
}

export default StreamList
