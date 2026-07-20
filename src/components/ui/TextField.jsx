import { icons } from '../../const/constant';
import * as Icons from 'lucide-react';

const TextField = ({ label, subHeading, id, error, required = false, inputClassName = "", className = "", ...props }) => {
    const IconComponent = Icons[icons[id]];
    
    return (
        <div className={`${className ? className : 'w-full'}`}>
            {
                label &&
                <label htmlFor={id} className="block text-sm font-medium text-black">
                    {label}
                    {required ? <span className='text-red-500 ms-1'>*</span> : null}
                </label>
            }
            <p className='text-xs tracking-wide font-light text-gray-400 mb-1'>{subHeading}</p>
            <div className="relative">
                <input type="text" {...props} name={id} id={id} className={`${inputClassName ? inputClassName : ''} input-field ${IconComponent ? 'ps-10' : ''} ${error ? 'border-red-500' : ''}`} />
                <div className="absolute inset-y-0 inset-s-0 flex items-center pointer-events-none z-20 ps-4">
                    {/* {IconComponent && <IconComponent className="size-4 text-muted-foreground" />} */}
                </div>
            </div>
            {
                error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )
            }
        </div>
    )
}

export default TextField