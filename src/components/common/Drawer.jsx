import { X } from 'lucide-react'

const Drawer = ({ handleClose, open, children }) => {
    const drawerStyle = {
        transform: (open=='teacher' || open=='student') ? "translateX(0)" : "translateX(100%)",
    };

    return (
        <>
            <div className={`drawer-overlay ${(open=='teacher' || open=='student') ? 'opacity-100 z-50 block' : 'opacity-0 z-0 hidden'}`} onClick={handleClose}></div>
            <div style={drawerStyle} className="shadow-sm z-50 bg-white max-w-2xl w-full fixed inset-e-0 inset-y-0 transition-all duration-300 ease-in-out max-h-screen overflow-auto">
                <div className='flex flex-wrap items-center justify-between p-4'>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-lg leading-5'>Add {open}</h2>
                        <p className="text-xs tracking-wide font-light text-gray-400 mb-1">Create / Update a teacher details.</p>
                    </div>
                    <button onClick={handleClose} className="btn icon_btn_small navy-btn">
                        <X />
                    </button>
                </div>
                {children}
            </div>
        </>
    )
}

export default Drawer
