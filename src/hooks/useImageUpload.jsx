import { useEffect, useMemo } from "react";

const useImageUpload = ({ value, setValue, setTouched}) => {

  const preview = useMemo(() => {
    if (!value) return null;
    return URL.createObjectURL(value);
  }, [value]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setValue(file);
    setTouched(true);
  };

  const handleRemove = () => {
    setValue(null);
    setTouched(false);
  };

  return { preview, handleChange, handleRemove };
};

export default useImageUpload;