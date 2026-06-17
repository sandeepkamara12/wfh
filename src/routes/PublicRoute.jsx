import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth");

  return isAuth === "true" ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;