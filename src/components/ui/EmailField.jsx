import { Mail } from "lucide-react"

const EmailField = ({ label, id, error, required = false, disabled = false, ...props }) => {
    return (
        <div className={`col-span-1`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy mb-1">
                {label}
                {required ? <span className='text-red-500 ms-1'>*</span> : null}
            </label>
            <div className="relative">
                <input type="email" name={id} id={id} className={`input-field ps-10 ${error ? 'border-red-500' : ''} ${disabled ? 'cursor-not-allowed' : ''}`} {...props} disabled={disabled} />
                <div className="absolute inset-y-0 inset-s-0 flex items-center pointer-events-none z-20 ps-4">
                    <Mail className="size-4 text-muted-foreground" />
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

export default EmailField
