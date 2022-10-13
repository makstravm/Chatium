import { ThemeOptions } from "@mui/material";
import { colors } from "./colors";

const {
  fontsLight,
  backgroundLight,
  primaryMainLight,
  secondaryMainLight,
  autoFillBgcTextFieldLight,
  errorLight,
} = colors;

export const lightTheme: ThemeOptions = {
  typography: {
    fontFamily: ["-apple-system", "Comfortaa", "cursive"].join(","),
    allVariants: { color: fontsLight },
  },
  palette: {
    mode: "light",
    background: { default: backgroundLight },
    primary: {
      main: primaryMainLight,
    },
    secondary: {
      main: secondaryMainLight,
    },
    error: {
      main: errorLight,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 1000px ${autoFillBgcTextFieldLight} inset`,
            },
          },
        },
      },
    },
  },
};
