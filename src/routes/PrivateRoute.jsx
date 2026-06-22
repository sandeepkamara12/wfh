import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const storedData = localStorage.getItem("jwtToken");

  return storedData?.jwtToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
