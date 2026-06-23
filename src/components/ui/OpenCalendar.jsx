import DatePicker from 'react-datepicker'

const OpenCalendar = ({formik, onChangeHandler, maxDate, name, label, required=false}) => {
  
    return (
        <>
            <label className="block text-sm font-medium text-navy mb-1">{label}  {required?<span className='text-red-500 ms-1'>*</span>:null} <span className="text-xs text-red-500">(A teacher should be 18 years old)</span></label>
            <DatePicker
                inline
                showYearDropdown
                scrollableYearDropdown
                maxDate={maxDate}
                yearDropdownItemNumber={100}
                selected={formik.values[name]}
                onChange={(date) => onChangeHandler(date)}
                calendarClassName="custom-calendar"
                className="custom-datepicker-input"
                dateFormat="dd-MM-yyyy"
            />
            {formik.errors[name] && (
                <p className="text-red-500 text-sm">{formik.errors[name]}</p>
            )}
        </>
    )
}

export default OpenCalendar
