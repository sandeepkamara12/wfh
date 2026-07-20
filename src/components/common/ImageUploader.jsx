import { ImageUp, Trash2, UserRound } from 'lucide-react'

const ImageUploader = ({ fileRef, updateImageHandler, removeImageHandler, preview, handleImageUploadTrigger, error }) => {
    return (
        <div className='w-full'>
            <div className='flex flex-wrap items-center gap-2'>
                <span className="inline-block size-20 bg-white rounded-full relative group">
                    <span className="inline-flex flex-wrap items-center justify-center border-2 border-gray-200 size-20 rounded-full overflow-hidden relative z-40">
                        <input
                            type="file"
                            ref={fileRef}
                            accept="image/*"
                            className="absolute opacity-0 w-full h-full cursor-pointer z-40 hidden"
                            onChange={updateImageHandler}
                        />
                        {preview ? (
                            <img src={preview} className="w-full h-full object-cover" alt="profile preview" />
                        ) : (
                            <UserRound className="size-6" />
                        )}
                    </span>
                </span>
                <div className="inline-flex flex-col gap-1">
                    <div className="inline-flex gap-2">
                        <button type="button" className="btn btn_with_text navy-btn w-auto" onClick={handleImageUploadTrigger}>
                            {/* <ImageUp className='hidden md:block shrink-0 size-4' /> */}
                            Upload Picture
                        </button>
                        <button type="button" className="btn icon_btn size-12 bg-red-600 border-red-600" onClick={removeImageHandler}>
                            <Trash2 className='shrink-0 size-5 mx-auto' />
                        </button>
                    </div>
                    <p className='text-xs font-medium text-red-600'>JPG, PNG, JPEG, Max size 2MB.</p>
                </div>
            </div>
                {
                    error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}
        </div>
    )
}

export default ImageUploader
