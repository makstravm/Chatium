import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "contexts/AuthContex";
import { RoutesUrls } from "constants/routes";

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <div>LOADING ................</div>;
  }

  if (!user) {
    return <Navigate to={RoutesUrls.SIGN_IN} state={location} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
