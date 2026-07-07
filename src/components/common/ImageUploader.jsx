import { ImageUp, Trash2, UserRound } from 'lucide-react'

const ImageUploader = ({ ref, updateImageHandler, removeImageHandler, preview, handleImageUploadTrigger, formik }) => {
    return (
        <div className='col-span-6'>
            <div className='flex flex-wrap items-center gap-2'>
                <span className="inline-block size-20 bg-white rounded-full relative group">
                    <span className="inline-flex flex-wrap items-center justify-center border-2 border-navy size-20 rounded-full overflow-hidden relative z-50">
                        <input
                            type="file"
                            ref={ref}
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
                <div className="inline-flex flex-col gap-1 w-[calc(100%-112px)]">
                    <div className="inline-flex gap-2">
                        <button type="button" className="btn w-auto" onClick={handleImageUploadTrigger}>
                            <ImageUp className='hidden md:block shrink-0 size-4' />
                            Upload Picture
                        </button>
                        <button type="button" className="icon-btn size-12 bg-red border-red" onClick={removeImageHandler}>
                            <Trash2 className='shrink-0 size-5 mx-auto' />
                        </button>
                    </div>
                    <p className='text-xs font-medium text-red'>JPG, PNG, JPEG, Max size 2MB.</p>
                </div>
            </div>
                {
                    // formik.touched.file && 
                    formik.errors.file && (
                        <p className="text-red-500 text-sm">{formik.errors.file}</p>
                    )}
        </div>
    )
}

export default ImageUploader
