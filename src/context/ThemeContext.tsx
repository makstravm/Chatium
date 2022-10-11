import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { IThemeContext } from "types";

export const ThemeContext = createContext<IThemeContext>({
  themeMode: "light",
  changeTheme: () => {},
});

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setTheme] = useState("light");

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
    <ThemeContext.Provider value={{ themeMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
