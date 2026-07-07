import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const auth = useSelector((state) => state.auth);
  if (!auth?.user?.jwtToken) return <Navigate to="/login" />;
  let role = auth?.user?.role;
  return allowedRoles.includes(role)
    ? children
    : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;