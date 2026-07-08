import { X } from 'lucide-react';

const Modal = ({isOpen, title, handleCloseModal, children}) => {
    return (
        <>
        <div className={`overlay ${isOpen ? '' : 'hidden'}`}></div>
        <div className={`modal-wrapper ${isOpen ? 'flex' : ''}`} role="dialog" tabindex="-1" aria-labelledby="hs-basic-modal-label">
            <div className={`modal-inner-wrapper ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <div className="modal">
                    <div className="flex justify-between items-center p-4 border-b border-overlay-header">
                        <h3>
                            {title}
                        </h3>
                        <button type="button" className="btn icon_btn" onClick={handleCloseModal}>
                            <span className="sr-only">Close</span>
                            <X className="size-5" />
                        </button>
                    </div>
                    {children}                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal
