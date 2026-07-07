import { Navigate } from "react-router-dom";
import { roleRedirect } from "../const/constant";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const user = auth?.user;
  if (user?.jwtToken && user?.role) {
    console.log('hello')
    return (
      <Navigate
        to={roleRedirect[user.role] || "/"}
        replace
        />
    );
  }
  return children;
};

export default PublicRoute;