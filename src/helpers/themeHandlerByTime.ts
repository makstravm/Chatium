import { Theme } from "constants/themeMode";
import { TimeOfTheDayForTheme } from "constants/timeOfTheDayForTheme";

const { DARK, LIGHT } = Theme;

const { MORNING, EVENING } = TimeOfTheDayForTheme;

export const themeHandlerByTime = () => {
  const hour = new Date().getHours();

  if (hour >= EVENING || hour <= MORNING) {
    return DARK;
  } else {
    return LIGHT;
  }
};
