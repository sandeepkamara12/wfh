const BottomDrawer = ({ children, isDrawerOpen, onClose }) => {
    return (
        <div className="fixed inset-0 z-40 bg-navy/10">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />
            <div className={`max-h-60 size-full overflow-y-auto ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full' } absolute bottom-0 inset-e-0 animate-slideUp transform w-full z-50 bg-white`}>
                <div className="py-3 px-4 border-b border-navy">
                    <button type="button" className="btn icon_btn_small" onClick={onClose}>
                        <span className="sr-only">Close</span>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
                        {children}
            </div>
        </div>
    );
};
export default BottomDrawer;