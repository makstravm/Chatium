import { Theme } from "constants/themeMode";

const { DARK, LIGHT } = Theme;

export interface IThemeContext {
  themeMode: string;
  changeTheme: (theme: typeof LIGHT | typeof DARK) => void;
}
