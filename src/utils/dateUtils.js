import { format, isValid } from "date-fns";

export const dateFormat = (date, pattern = "dd-MMMM-yyyy") => {
  if (!date) return "";

  const parsedDate = new Date(date);

  return isValid(parsedDate) ? format(parsedDate, pattern) : "";
};