import { useEffect, useMemo } from "react";

const useImageUpload = (formik, fieldName) => {
  const file = formik.values[fieldName];

  const preview = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChange = (e) => {
    const selectedFile = e.currentTarget.files[0];
    formik.setFieldValue(fieldName, selectedFile);
  };

  const handleRemove = () => {
    formik.setFieldValue(fieldName, null);
  };

  return {
    preview,
    handleChange,
    handleRemove,
  };
};

export default useImageUpload;