import { FC, useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { RoutesUrls } from "constants/routes";
import { getAccountInfo } from "businessLogic/getAccountInfo";
import { Preloader } from "components/Preloader";

const ProtectedRoute: FC = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const location = useLocation();

  useEffect(() => {
    if (sessionStorage?.token || localStorage?.token) {
      const handlerToGetAccountInfo = async () => {
        const user = await getAccountInfo();

        setUserData(user);
        setIsLoading(!isLoading);
      };

      handlerToGetAccountInfo();
    } else {
      setIsLoading(!isLoading);
    }
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  if (!userData) {
    return <Navigate to={RoutesUrls.SIGN_IN} state={location} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
