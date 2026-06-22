import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const storedData = localStorage.getItem("jwtToken");
  let user = null;
  try {
    user = storedData ? JSON.parse(storedData) : null;
  } catch (e) {
    console.error("Invalid JSON in localStorage", e);
    localStorage.removeItem("jwtToken"); // cleanup bad data
  }
  if (!user) return <Navigate to="/login" />;

  return allowedRoles.includes(user.role)
    ? children
    : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;