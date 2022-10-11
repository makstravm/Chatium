import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { IThemeContext } from "types";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  changeTheme: () => {},
});

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (theme: string) => {
    localStorage.theme = theme;
    setTheme(theme);
  };

  useEffect(() => {
    if (localStorage?.theme) {
      setTheme(localStorage.theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
