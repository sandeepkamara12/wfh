const PhoneField = ({ label, id, placeholder = "", value="", onChange }) => {
    return (
        <div className={`col-span-1`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy mb-1">{label}</label>
            <input type="tel" name={id} id={id} placeholder={placeholder} className="input-field" value={value} onChange={onChange} />
        </div>
    )
}

export default PhoneField
