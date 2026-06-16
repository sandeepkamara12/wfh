const RadioCard = ({ icon, text, group, id }) => {
    return (
        <label htmlFor={id} name={`radio-in-${group}`} className="relative w-auto">
            <input type="radio" name={`radio-in-${group}`} id={id} className="opacity-0 absolute shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 peer disabled:opacity-50 disabled:pointer-events-none" />
            <span className="radioCard">
                {/* {icon} */}
                <span>{text}</span>
            </span>
        </label>
    )
}

export default RadioCard
