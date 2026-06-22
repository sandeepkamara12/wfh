const PasswordField = ({ label, id, error, ...props }) => {
    return (
        <div className={`col-span-1`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy mb-1">{label}</label>
            <input type="password" name={id} id={id} className="input-field" {...props} />
            {
                error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )
            }
        </div>
    )
}

export default PasswordField
