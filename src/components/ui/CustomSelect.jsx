import { ChevronDown } from "lucide-react";
import Select from "react-select"

const CustomSelect = ({ options, selectType, label, value, onChange, placeholder = "", className = "", isSearchable = true }) => {
    const CustomOption = (props) => {
        const { selectType } = props.selectProps;
        const Icon = props.data.icon;
        return (
            (selectType === 'teacher' || selectType === 'student') ?
                (<div {...props.innerProps} className="flex items-center gap-2 py-2 px-3 hover:bg-navy/10 text-sm font-medium">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-navy/50">
                        <img src={props.data.image} alt={props.label} className="w-full h-full rounded-full aspect-square" />
                    </div>
                    <div className='flex flex-col'>
                        <span>{props.label}</span>
                        <span className="text-xs leading-3! text-gray-500">#{props.value}</span>
                    </div>
                </div>)
                :
                (selectType === 'stream' || selectType === 'subject') ? (
                    <div {...props.innerProps} className="p-2 hover:bg-navy/10 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            {/* <Icon className="size-5" /> */}
                            {props.label}
                        </div>
                    </div>
                )
                    :
                    (<div {...props.innerProps} className="p-2 hover:bg-navy/10 text-sm font-medium">{props.label}</div>)
        );
    };

    const CustomSingleValue = (props) => {
        const { selectType } = props.selectProps;
        const Icon = props.data.icon;
        return (
            (selectType === 'teacher' || selectType === 'student') ?
                (<div className="inline-flex items-center gap-2 text-sm font-medium rounded w-[calc(100%-10px)]!">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                        <img src={props.data.image} alt={props.data.label} className="w-full h-full rounded-full aspect-square" />
                    </div>
                    <div className='flex flex-col'>
                        <span>{props.data.label}</span>
                        <span className="text-black text-xs leading-3">#{props.data.value}</span>
                    </div>
                    {/* <button type="button" onClick={(e) => { e.stopPropagation(); props.selectProps.onChange(null); }} className="ml-auto justify-self-end text-red-500 font-bold">✕</button> */}
                </div>)
                :
                (selectType === 'stream' || selectType === 'subject') ?
                    (<div className="inline-flex items-center gap-2 text-sm font-medium rounded w-[calc(100%-10px)]!">
                        <div className="flex items-center gap-2">
                            {/* <Icon className="size-5" /> */}
                            {props.data.label}
                        </div>
                        {/* <button type="button" onClick={(e) => { e.stopPropagation(); props.selectProps.onChange(null); }} className="ml-auto justify-self-end text-red-500 font-bold">✕</button> */}
                    </div>)
                    :
                    <div className="inline-flex items-center gap-2 text-sm font-medium rounded w-[calc(100%-10px)]!">
                        <span>{props.data.label}</span>
                        {/* <button type="button" onClick={(e) => { e.stopPropagation(); props.selectProps.onChange(null); }} className="ml-auto justify-self-end text-red-500 font-bold">✕</button> */}
                    </div>
        );
    };

    const CustomDropdownIndicator = (props) => {
        const { menuIsOpen } = props.selectProps;
        return (
            <div {...props.innerProps} className={` flex items-center transition-transform ${menuIsOpen ? "rotate-180" : ""}`}>
                <ChevronDown size={18} />
            </div>
        );
    };

    return (
        <div className={`${className} col-span-1`}>
            <label htmlFor="" className="block text-sm font-medium text-black mb-1">{label}</label>
            <Select
                options={options}
                value={options.find(opt => opt.value === value) || null}
                onChange={(selected) => onChange(selected?.value)}
                placeholder={placeholder}
                selectType={selectType}
                isSearchable={isSearchable}
                components={{
                    Option: CustomOption,
                    SingleValue: CustomSingleValue,
                    DropdownIndicator: CustomDropdownIndicator,
                }}
                // menuIsOpen={true}
                styles={{
                    dropdownIndicator: (base) => ({
                        ...base,
                        color: "#122c4f"
                    }),
                    indicatorSeparator: (base) => ({
                        ...base,
                        display: "none",
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: "#122c4f",
                        fontSize: '14px',
                        fontWeight: 500,
                    }),
                    control: (base) => ({
                        ...base,
                        minHeight: "auto",
                        height: "auto",
                        border: '2px solid #122c4f',
                        padding: '6px 12px'
                    }),
                    valueContainer: (base) => ({
                        ...base,
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                    }),
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 50,
                    }),
                }}
            />
        </div>
    )
}

export default CustomSelect
