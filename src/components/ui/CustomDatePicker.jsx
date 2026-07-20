import DatePicker from 'react-datepicker'

const CustomDatePicker = ({ formik, onChangeHandler, error, minDate, maxDate, selected, label, required = false, needWarning = true, selectedDate, handler }) => {
    return (
        <div className={`relative col-span-1 datepicker-wrapper ${selectedDate ? "has-value" : ""}`}>
            <label className="block text-sm font-medium text-black mb-1">{label}  {required ? <span className='text-red-500 ms-1'>*</span> : null}
                <span className={`${needWarning ? '' : 'hidden'} text-xs text-red-500`}>
                    {formik?.values?.role === "teacher"
                        ? "(Teacher must be at least 18 years old)"
                        : "(Student must be at least 3 years old)"}
                </span>
            </label>
            <DatePicker
                showIcon
                isClearable
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                minDate={minDate}
                maxDate={maxDate}
                yearDropdownItemNumber={75}
                selected={selected}
                onChange={(date) => onChangeHandler(date)}
                calendarClassName="custom-calendar"
                className="input-field py-3! px-4! "
                dateFormat="dd-MM-yyyy"
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    )
}

export default CustomDatePicker
