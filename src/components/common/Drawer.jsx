import { X } from 'lucide-react'

const Drawer = ({children, handleClose, open}) => {
    const drawerStyle = {
        // position: "fixed",
        // right: 0,
        // top: 0,
        // width: "800px",
        // height: "100%",
        // background: "#ffffff",
        // padding: "20px",
        // zIndex: "999",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        // transition: "transform 0.3s ease-in-out",
    };
  
    return (
        <div style={drawerStyle} className="p-10 z-50 bg-white w-4xl h-full fixed right-0 top-0 transition-all duration-300 ease-in-out max-h-screen overflow-auto">
            <button onClick={handleClose} className="icon-btn absolute right-4 top-4">
                <X />
            </button>
            {children}
        </div>
    )
}

export default Drawer
