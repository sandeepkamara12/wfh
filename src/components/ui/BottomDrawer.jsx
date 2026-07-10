const BottomDrawer = ({ children, isDrawerOpen, onClose }) => {
    return (
        <div className="fixed inset-0 z-40 bg-navy/10 h-dvh">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 "
                onClick={onClose}
            />
            <div className={`
            ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'} rounded-t-sm absolute bottom-0 inset-e-0 animate-slideUp transform w-full z-40 bg-white`}>
                <div className="w-14 h-2 bg-navy absolute inset-x-0 z-50 rounded mx-auto top-1" onClick={onClose}></div>
                <div className={`max-h-60 overflow-y-auto`}>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default BottomDrawer;