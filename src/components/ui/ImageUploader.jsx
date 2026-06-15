import { Image, Upload } from 'lucide-react';
import { useState } from 'react'

const ImageUploader = () => {
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    return (
        <div className="flex items-start flex-col justify-center">
            <label className="relative cursor-pointer group">

                {/* Image Circle */}
                <div className="w-24 h-24 rounded-full overflow-hidden border border-navy">
                    {image ? (
                        <img
                        src={image}
                        alt="preview"
                        className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-white flex items-center justify-center text-gray-400">
                           <Image />
                        </div>
                    )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 rounded-full bg-navy/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                   <Image />
                </div>

                {/* Hidden Input */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                />
            </label>
                    <label htmlFor="teacher-name" className="mt-1 block font-medium text-navy text-sm">Upload Teacher Image</label>
        </div>
    )
}

export default ImageUploader
