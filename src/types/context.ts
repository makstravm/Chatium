import { Dispatch, SetStateAction } from "react";
import { Theme } from "constants/themeMode";
import { IUserProfile } from "./user";

const { DARK, LIGHT } = Theme;

export interface IThemeContext {
  themeMode: string;
  changeTheme: (theme: typeof LIGHT | typeof DARK) => void;
}

export interface IAuthContext {
  userData: IUserProfile | null;
  setUserData: Dispatch<SetStateAction<IUserProfile | null>>;
}
