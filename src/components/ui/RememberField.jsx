import { Check } from 'lucide-react'

const RememberField = ({checked, handleChecked,handleOpen }) => {
    return (
        <div className='remember_me'>
            {/* <label className="remember_me_label">

                <input type="checkbox" checked={checked} onChange={() => handleChecked(!checked)} className="hidden" />

                <div
                    className={`remmeber_me_checkbox ${checked ? "bg-orange border-orange" : "border-navy bg-white"}`}>
                    {checked && (
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                </div>
                <span className="remember_me_text">Remember me</span>
            </label> */}
            <div className='login_forgot_password' onClick={handleOpen}>Forgot Password?</div>
        </div>
    )
}

export default RememberField
