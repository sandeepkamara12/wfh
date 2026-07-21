import { X } from 'lucide-react';

const Modal = ({ open, handleClose, isEdit, children }) => {
    return (
        <>
            <div onClick={handleClose} className={`overlay ${(open != 'teacher' && open != 'student' && open != 'filter' && open !== null) ? '' : 'opacity-0 invisible'}`}></div>
            <div className={`modal-wrapper ${(open != 'teacher' && open != 'student' && open != 'filter' && open !== null) ? '' : 'opacity-0 invisible'}`} role="dialog" tabIndex="-1" aria-labelledby="hs-basic-modal-label">
                <div className={`${(open != 'teacher' && open != 'student' && open != 'filter' && open !== null) ? 'mb-7 opacity-100 duration-500' : 'mb-0 opacity-0'} flex items-end ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto`}>
                    <div className="modal-inner-wrap">
                        <div className="flex justify-between items-center py-2 px-4 border-b border-gray-200">
                            <h3 id="hs-focus-management-modal-label" className="font-semibold text-foreground capitalize">
                                {isEdit ? 'Update' : 'Create'} {open}
                            </h3>
                            <button type="button" className="btn icon_btn_small navy-btn" onClick={handleClose}>
                                <span className="sr-only">Close</span>
                                <X className="own-icon" />
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
