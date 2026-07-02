const Switch = ({ checked, onChangeHandler, label, previousLabel }) => {
    return (
        <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-x-3">
                <label htmlFor="hs-tooltip-example" className="text-sm font-medium">{previousLabel}</label>
                <label htmlFor="hs-basic-usage" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input
                        type="checkbox"
                        id="hs-basic-usage"
                        className="peer sr-only"
                        onChange={onChangeHandler}
                        checked={checked}
                    />
                    <span className="absolute inset-0 bg-white border-2 border-navy rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-orange peer-checked:border-orange"></span>
                    <span className="absolute top-1/2 inset-s-1 -translate-y-1/2 size-4 bg-navy rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-[calc(100%+5px)] peer-checked:bg-white"></span>
                </label>
                <label htmlFor="hs-tooltip-example" className="text-sm font-medium">{label}</label>
            </div>
        </div>
    )
}

export default Switch
