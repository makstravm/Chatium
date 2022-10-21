import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { RoutesUrls } from "constants/routes";

const ProtectedRoute = () => {
  const { auth, isLoading } = useContext(AuthContext);

  const location = useLocation();

  if (isLoading) {
    return <div>LOADING ................</div>;
  }

  if (auth) {
    return <Navigate to={RoutesUrls.SIGN_IN} state={location} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
