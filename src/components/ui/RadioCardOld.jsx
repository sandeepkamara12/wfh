const RadioCard = ({ icon, text, group, id, error, className="", formik}) => {
    return (
        <>
            <label htmlFor={id} className={`relative ${className ? className : ''}`}>
                <input type="radio" id={id} name={group} value={id} checked={formik.values[group] === id}  onChange={formik.handleChange} className="opacity-0 absolute shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 peer" />
                <span className="radioCard">
                    {icon}
                    <span>{text}</span>
                </span>
            </label>
            {
                error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )
            }
        </>
    )
}

export default RadioCard
