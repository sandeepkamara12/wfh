import { useState } from 'react';
import DatePicker from 'react-datepicker'
import BottomDrawer from './BottomDrawer';

const OpenCalendar = ({ onChangeHandler, error, maxDate, selected, label, required = false, needWarning = true }) => {
    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showYearPicker, setShowYearPicker] = useState(false);
    return (
        <>
            <label className="block text-sm font-medium text-navy mb-1">{label}  {required ? <span className='text-red-500 ms-1'>*</span> : null} <span className={`${needWarning ? '' : 'hidden'} text-xs text-red-500`}>(A teacher should be 18 years old)</span></label>
            <DatePicker
                inline
                showYearDropdown
                scrollableYearDropdown
                maxDate={maxDate}
                // yearDropdownItemNumber={60}
                selected={selected}
                onChange={(date) => onChangeHandler(date)}
                calendarClassName="custom-calendar"
                className="custom-datepicker-input"
                dateFormat="dd-MM-yyyy"
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    changeMonth,
                    changeYear,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                }) => {
                    const months = [
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                    const years = Array.from({ length: 60 }, (_, i) => new Date().getFullYear() - i);

                    return (
                        <div className="flex justify-between items-center px-3 py-2 border-b bg-navy">
                            <button
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                className={`px-2 ${prevMonthButtonDisabled ? "opacity-40" : ""}`}
                            >
                                ◀
                            </button>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => setShowMonthPicker(true)}
                                    className="font-medium"
                                >
                                    {months[date.getMonth()]}
                                </button>

                                <button
                                    onClick={() => setShowYearPicker(true)}
                                    className="font-medium"
                                >
                                    {date.getFullYear()}
                                </button>
                            </div>

                            <button
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                className={`px-2 ${nextMonthButtonDisabled ? "opacity-40" : ""}`}
                            >
                                ▶
                            </button>

                            {showMonthPicker && (
                                <BottomDrawer isDrawerOpen={showMonthPicker} onClose={() => setShowMonthPicker(false)}>
                                    {months.map((m, i) => (
                                        <div
                                            key={m}
                                            onClick={() => {
                                                changeMonth(i);
                                                setShowMonthPicker(false);
                                            }}
                                            className="p-4 text-center border-b border-navy text-navy text-sm font-semibold"
                                        >
                                            {m}
                                        </div>
                                    ))}
                                </BottomDrawer>
                            )}

                            {showYearPicker && (
                                <BottomDrawer isDrawerOpen={showYearPicker} onClose={() => setShowYearPicker(false)}>
                                    {years.map((y) => (
                                        <div
                                            key={y}
                                            onClick={() => {
                                                changeYear(y);
                                                setShowYearPicker(false);
                                            }}
                                            className="p-4 text-center border-b border-navy text-navy text-sm font-semibold"
                                        >
                                            {y}
                                        </div>
                                    ))}
                                </BottomDrawer>
                            )}
                        </div>
                    );
                }}
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </>
    )
}

export default OpenCalendar
