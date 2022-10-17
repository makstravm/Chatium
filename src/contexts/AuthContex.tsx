import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "src/firebase";

export const AuthContext = createContext<{ user: User | null }>({
  user: null,
});

const AuthContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      user ? setUserData(user) : setUserData(null)
    );
  }, []);

  return (
    <AuthContext.Provider value={{ user: userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
