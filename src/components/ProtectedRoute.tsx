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

  const getAccountData = async () => {
    const user = await getAccountInfo();

    setUserData(user);
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    if ((!userData && sessionStorage?.token) || localStorage?.token) {
      getAccountData();
    } else {
      setIsLoading(!isLoading);
    }
  }, []);

  if (isLoading) {
    return <Preloader />;
  } else if (!userData) {
    return <Navigate to={RoutesUrls.SIGN_IN} state={location} replace />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
