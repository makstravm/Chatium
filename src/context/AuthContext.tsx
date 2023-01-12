import { createContext, FC, ReactNode, useState } from "react";
import { IAuthContext, IUserProfile } from "types";

export const AuthContext = createContext<IAuthContext>({
  userData: null,
  setUserData: () => {},
});

export const AuthProviderWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<IUserProfile | null>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
