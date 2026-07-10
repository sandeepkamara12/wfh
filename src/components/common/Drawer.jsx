import { X } from 'lucide-react'

const Drawer = ({handleClose, open, children}) => {
    const drawerStyle = {
        transform: open ? "translateX(0)" : "translateX(100%)",
    };
  
    return (
        <>
        <div className={`drawer-overlay ${open ? 'opacity-100 z-50 block':'opacity-0 z-0 hidden'}`} onClick={handleClose}></div>
        <div style={drawerStyle} className="shadow-sm z-50 bg-white max-w-2xl w-full fixed inset-e-0 inset-y-0 transition-all duration-300 ease-in-out max-h-screen overflow-auto">
            <button onClick={handleClose} className="btn icon_btn_small absolute inset-e-4 top-4 z-40">
                <X />
            </button>
            {children}
        </div>
        </>
    )
}

export default Drawer
