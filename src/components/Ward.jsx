const Ward = ({ward, id, name}) => {
    return (
        <div className="relative flex items-start">
            <div className="flex items-center h-5 mt-1">
                <input id={`hs-radio-${id.toLowerCase()}`} name={`hs-radio-with-description-${name}`} type="radio" className="shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed" aria-describedby={`hs-radio-${id.toLowerCase()}-description`} checked />
            </div>
            <label for={`hs-radio-${id.toLowerCase()}`} className="ms-3">
                <span className="block text-sm font-semibold text-foreground">{ward}</span>
            </label>
        </div>
    )
}

export default Ward