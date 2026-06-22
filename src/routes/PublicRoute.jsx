import { Navigate } from "react-router-dom";
import { roleRedirect } from "../const/constant";

const PublicRoute = ({ children }) => {
  const storedData = localStorage.getItem("jwtToken");
  const user = storedData ? JSON.parse(storedData) : null;

  if (user?.jwtToken) {
    return <Navigate to={roleRedirect[user.role] || "/"} />;
  }

  return children;
};

export default PublicRoute;