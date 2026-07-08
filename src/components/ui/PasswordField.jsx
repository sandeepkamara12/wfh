import { Eye, EyeOff, Lock } from "lucide-react"
import { useState } from "react"

const PasswordField = ({ label, id, error, ...props }) => {
    const [viewPassword, setViewPassword] = useState(false);
    const toggleView = () => {
        setViewPassword(prev => !prev);
    }
    return (
        <div className={`col-span-1`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy mb-1">{label}</label>
            <div className="relative">
                <input type={`${viewPassword ? 'text' : 'password'}`} name={id} id={id} className={`input-field ps-10 ${error ? 'border-red-500' : ''}`} {...props} />
                <div className="absolute inset-y-0 inset-s-0 flex items-center pointer-events-none z-20 ps-4">
                    <Lock className="size-4 text-muted-foreground" />
                </div>
                <button type="button" className="absolute inset-y-0 inset-e-0 z-20 btn btn_with_text w-auto" onClick={toggleView}>
                    {
                        !viewPassword ?
                            <Eye className="size-4 text-muted-foreground" />
                            :
                            <EyeOff className="size-4 text-muted-foreground" />
                    }
                </button>
            </div>
            {
                error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )
            }
        </div>
    )
}

export default PasswordField
