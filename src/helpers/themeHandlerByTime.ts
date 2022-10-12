import { Theme } from "constants/themeMode";

const { DARK, LIGHT } = Theme;

export const themeHandlerByTime = () => {
  const hour = new Date().getHours();

  if (hour >= 18 || hour <= 7) {
    return DARK;
  } else {
    return LIGHT;
  }
};
