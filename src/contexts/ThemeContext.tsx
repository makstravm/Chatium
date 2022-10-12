import { Theme } from "constants/themeMode";
import { themeHandlerByTime } from "helpers/themeHandlerByTime";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { IThemeContext } from "types";

const { DARK, LIGHT } = Theme;

export const ThemeContext = createContext<IThemeContext>({
  themeMode: LIGHT,
  changeTheme: () => {},
});

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setTheme] = useState(LIGHT);

  const changeTheme = (theme: typeof LIGHT | typeof DARK) => {
    localStorage.theme = theme;
    setTheme(theme);
  };

  useEffect(() => {
    if (localStorage?.theme) {
      setTheme(localStorage.theme);
    } else {
      const themeMode = themeHandlerByTime();

      setTheme(themeMode);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
