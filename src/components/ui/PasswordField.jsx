const PasswordField = ({label, id}) => {
    return (
        <div className={`col-span-1`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy mb-1">{label}</label>
            <input type="password" name={id} id={id} className="input-field" />
        </div>
    )
}

export default PasswordField
