import { FC, useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { RoutesUrls } from "constants/routes";

const ProtectedRoute: FC = () => {
  const { auth, isLoading } = useContext(AuthContext);

  const location = useLocation();

  if (isLoading) {
    return <div>LOADING ................</div>;
  }

  // this conditional is mocked in this branch

  if (auth) {
    return <Navigate to={RoutesUrls.SIGN_IN} state={location} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
