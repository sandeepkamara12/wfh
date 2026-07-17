const Switch = ({ checked, onChangeHandler, type='', label, id, previousLabel }) => {
    return (
            <div className={`switch`}>
                {
                    previousLabel && <label htmlFor={id} className="switch-label">{previousLabel}</label>
                }
                <label htmlFor={id} className={`switcher ${type=='small' ? 'small' : 'big'}`}>
                    <input
                        type="checkbox"
                        id={id}
                        className="peer sr-only"
                        onChange={onChangeHandler}
                        checked={checked}
                    />
                    <span className="switcher-bar"></span>
                    <span className="switcher-circle"></span>
                </label>
                {
                    label && <label htmlFor={id} className="switch-label">{label}</label>
                }
            </div>
    )
}

export default Switch
