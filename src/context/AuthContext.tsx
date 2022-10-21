import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/firebase";
import { IAuthContext } from "types";

export const AuthContext = createContext<IAuthContext>({
  auth: null,
  isLoading: true,
});

export const AuthProviderWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<IAuthContext>({
    auth: null,
    isLoading: true,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({ auth: user, isLoading: false });
      } else {
        setUserData({ auth: user, isLoading: false });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};
