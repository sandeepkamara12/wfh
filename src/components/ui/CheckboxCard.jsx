const CheckboxCard = ({ icon, text, id, checked, onChange, group }) => {
  return (
    <label htmlFor={id} name={`checkbox-in-${group}`} className="relative w-auto">
      
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        id={id}
        name={`checkbox-in-${group}`}
        checked={checked}
        onChange={onChange}
        className="opacity-0 absolute shrink-0 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 peer disabled:opacity-50 disabled:pointer-events-none peer"
      />

      {/* UI Card */}
      <span className="radioCard">
        {icon}
        <span>{text}</span>
      </span>
    </label>
  );
};

export default CheckboxCard;