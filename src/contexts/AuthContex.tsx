import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/firebase";
import { IAuthContext } from "types";

export const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: true,
});

const AuthContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<IAuthContext>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({ user, loading: false });
      } else {
        setUserData({ user, loading: false });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextWrapper;
