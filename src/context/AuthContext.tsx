import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, UserInfo } from "firebase/auth";
import { auth } from "src/firebase";
import { IAuthContext } from "types";

export const AuthContext = createContext<IAuthContext>({
  auth: null,
  isLoading: true,
});

export const AuthProviderWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserInfo | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserData(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth: userData, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
