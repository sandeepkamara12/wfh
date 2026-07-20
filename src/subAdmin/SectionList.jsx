import Table from "../components/common/Table";
import { Loader, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSectionThunk,
  getSectionThunk,
} from "../features/subAdmin/sectionSlice";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";

const SectionList = () => {
  const dispatch = useDispatch();

  const [loadingId, setLoadingId] = useState(null);
  const { handleOpen, setIsEdit } = useOutletContext();

  let sections = useSelector((state) => state.section.sections);

  // Get Sections on component mount
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const result = await dispatch(getSectionThunk()).unwrap();
        if (result?.success) {
          console.log("Section Loaded!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSections();
  }, []);

  const handleDelete = async (id) => {
    if (id == "") return;
    try {
      setLoadingId(id);
      let result = null;
      result = await dispatch(deleteSectionThunk({ id })).unwrap()
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
        <div className="flex md:items-center flex-col md:flex-row gap-1 md:gap-2">
          <span className="text-sm font-semibold text-black leading-4">
            {row.name}
          </span>
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
                  handleOpen('section');
                }
                }
                disabled={loadingId === row?.id}
              >
                <Pencil className="size-5 mx-auto" />
              </button>
            </div>
          </div>
        );
      }
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="table-inner-wrapper">
        Sections
      </div>
      <Table
        needHeader={true}
        id="sections"
        columns={columns}
        data={sections}
        expandableRows={false}
      />
    </div>
  );
};

export default SectionList;
