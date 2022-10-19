import { Theme } from "constants/themeMode";
import { UserInfo } from "firebase/auth";

const { DARK, LIGHT } = Theme;

export interface IThemeContext {
  themeMode: string;
  changeTheme: (theme: typeof LIGHT | typeof DARK) => void;
}

export interface IAuthContext {
  user: UserInfo | null;
  loading: boolean;
}
