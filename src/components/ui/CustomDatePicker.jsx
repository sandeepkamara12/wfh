import DatePicker from 'react-datepicker'

const CustomDatePicker = ({ selectedDate, handler }) => {
    return (
        <div className={`relative col-span-1 datepicker-wrapper ${selectedDate ? "has-value" : ""}`}>
            <label htmlFor="" className="block text-sm font-medium text-black mb-1">Select Date</label>
            <DatePicker
                showIcon
                isClearable
                toggleCalendarOnIconClick
                selected={selectedDate}
                placeholderText="Select Date"
                onChange={handler}
                className="bg-white border border-navy py-1.5! ps-3! pe-9! rounded text-sm text-black font-medium leading-8 w-full placeholder:text-black"
                calendarClassName="rasta-stripes-big"
            />
        </div>
    )
}

export default CustomDatePicker
