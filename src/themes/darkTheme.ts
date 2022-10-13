import { ThemeOptions } from "@mui/material";
import { colors } from "./colors";

const {
  fontsDark,
  backgroundDark,
  primaryMainDark,
  secondaryMainDark,
  autoFillBgcTextFieldDark,
  errorDark,
} = colors;

export const darkTheme: ThemeOptions = {
  typography: {
    fontFamily: ["-apple-system", "Comfortaa", "cursive"].join(","),
    allVariants: { color: fontsDark },
  },
  palette: {
    mode: "dark",
    background: { default: backgroundDark },
    primary: {
      main: primaryMainDark,
    },
    secondary: {
      main: secondaryMainDark,
    },
    error: {
      main: errorDark,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 1000px ${autoFillBgcTextFieldDark} inset`,
            },
          },
        },
      },
    },
  },
};
