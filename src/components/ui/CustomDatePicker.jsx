import { CalendarDays } from 'lucide-react';
import { useRef } from 'react';
import DatePicker from 'react-datepicker'

const CustomDatePicker = ({ formik, onChangeHandler, error, minDate, maxDate, selected, label, required = false, needWarning = true, selectedDate }) => {
    const datepickerRef = useRef(null);
    const handleIconClick = () => {
        datepickerRef.current.setOpen(true);
    };
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
                ref={datepickerRef}
                isClearable
                showMonthDropdown
                showYearDropdown
                showPopperArrow={false}
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
            <button
                type="button"
                onClick={handleIconClick}
                className="btn icon_btn_small text-black border-none absolute right-2 bottom-2.5"
            >
                <CalendarDays className='own-icon' />
            </button>
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    )
}

export default CustomDatePicker
