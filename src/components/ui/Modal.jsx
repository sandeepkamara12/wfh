import { X } from 'lucide-react';

const Modal = ({ open, handleClose, isEdit, children }) => {
    return (
        <>
            <div onClick={handleClose} className={`overlay ${(open != 'teacher' && open != 'student' && open !== null) ? '' : 'opacity-0 invisible'}`}></div>
            <div className={`modal-wrapper flex size-full fixed top-0 inset-s-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none ${(open != 'teacher' && open != 'student' && open !== null) ? '' : 'opacity-0 invisible'}`} role="dialog" tabIndex="-1" aria-labelledby="hs-basic-modal-label">
                <div className={`${(open != 'teacher' && open != 'student' && open !== null) ? 'mt-7 opacity-100 duration-500' : 'mt-0 opacity-0'} ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto`}>
                    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded pointer-events-auto">
                        <div className="flex justify-between items-center py-3 px-4 border-b border-overlay-header">
                            <h3 id="hs-focus-management-modal-label" className="font-semibold text-foreground">
                                {isEdit ? 'Update' : 'Create'} {open}
                            </h3>
                            <button type="button" className="btn icon_btn" onClick={handleClose}>
                                <span className="sr-only">Close</span>
                                <X className="size-5" />
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
