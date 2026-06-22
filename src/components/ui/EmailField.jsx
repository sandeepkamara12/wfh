const EmailField = ({ label, id, error, disabled, ...props }) => {
    return (
        <div className={`col-span-1`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy mb-1">{label}</label>
            <input type="email" name={id} id={id} className={`input-field ${disabled ? 'cursor-not-allowed' : ''}`} {...props} disabled={disabled} />
            {
                error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )
            }
        </div>
    )
}

export default EmailField
