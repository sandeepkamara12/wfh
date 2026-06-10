import { useState } from "react";
import SubAdmin from "../SubAdmin"
import { Clock, Copy, Network, Pencil, Trash2 } from "lucide-react";
import Table from "../components/common/Table";

const StreamList = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const drawerStyle = {
    position: "fixed",
    right: 0,
    top: 0,
    width: "300px",
    height: "100%",
    background: "#f4f4f4",
    padding: "20px",
    zIndex: "999",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.3)"
  };

  const columns = [
    {
      name: "Stream",
      cell: row => (
        <span className="text-sm font-semibold text-navy uppercase">{row.stream}</span>
      ),
      selector: row => row.stream,
      sortable: true
    },
    {
      name: "Stream ID",
      cell: row => (
        <span className="inline-flex items-center gap-x-1.5 pt-0.5 pb-1 ps-2 pe-2 rounded-full text-xs font-medium bg-navy/10 text-navy/50 dark:bg-primary-500/20 dark:text-primary-400">
          {row.id}
          <button className='shrink-0 size-3 inline-flex items-center justify-center rounded-full hover:bg-primary-200 pt-0.5'><Copy className='size-4' /></button>
        </span>
      ),
      selector: row => row.id,
      sortable: true
    },
    {
      name: "Created At",
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
        <div className="px-6 py-1.5 flex flex-wrap items-center gap-1">
          <button type="button" className="icon-btn">
            <Trash2 className="size-5 mx-auto" />
          </button>
          <button type="button" className="icon-btn">
            <Pencil className="size-5 mx-auto" />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    { id: "#2154879630", stream: "Medical", createdAt: "28 Dec, 12:12" },
    { id: "#2154879631", stream: "Non Medical", createdAt: "28 Dec, 12:12" },
  ];

  return (
    <SubAdmin>
      <div className="flex flex-col">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
          <div className="min-w-full inline-block align-middle">
            <div className="">
              <Table columns={columns} data={data} handleOpen={handleOpen} btnText="Add Stream" btnIcon={<Network className="w-5 h-5 mx-auto" />} label="Streams" subLabel="Add Stream, edit and more." />

              {open && (
                <div style={drawerStyle}>
                  <button onClick={handleClose}>Close</button>
                  <form>
                    <div className="grid gap-y-4 h-screen overflow-auto">
                      <div className="grid gap-y-4">

                        <div>
                          <label htmlFor="teacher-name" className="block text-sm mb-2 text-foreground">stream</label>
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

                        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none">Create Teacher</button>
                      </div>

                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </SubAdmin>
  )
}

export default StreamList
