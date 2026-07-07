import { X } from 'lucide-react'
import { useOutletContext } from 'react-router-dom';

const Drawer = ({children}) => {
    const { handleClose, open } = useOutletContext();
    const drawerStyle = {
        boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
        transform: open ? "translateX(0)" : "translateX(100%)",
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
