import DatePicker from 'react-datepicker'

const OpenCalendar = ({ onChangeHandler, error, maxDate, selected, label, required = false, needWarning = true }) => {
    return (
        <>
            <label className="block text-sm font-medium text-navy mb-1">{label}  {required ? <span className='text-red-500 ms-1'>*</span> : null} <span className={`${needWarning ? '' : 'hidden'} text-xs text-red-500`}>(A teacher should be 18 years old)</span></label>
            <DatePicker
                inline
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                maxDate={maxDate}
                yearDropdownItemNumber={60}
                selected={selected}
                onChange={(date) => onChangeHandler(date)}
                calendarClassName="custom-calendar"
                className="custom-datepicker-input"
                dateFormat="dd-MM-yyyy"
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </>
    )
}

export default OpenCalendar
