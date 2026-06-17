const TextField = ({label, id, placeholder="", value="", onChange}) => {
    return (
        <div className={`col-span-1`}>
            <label htmlFor={id} className="block text-sm font-medium text-navy mb-1">{label}</label>
            <input type="text" name={id} id={id} value={value} placeholder={placeholder} className="input-field" onChange={onChange} />
        </div>
    )
}

export default TextField
