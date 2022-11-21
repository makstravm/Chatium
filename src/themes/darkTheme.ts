import { ThemeOptions } from "@mui/material";
import { colors } from "./colors";

const {
  fontsDark,
  backgroundDark,
  primaryMainDark,
  secondaryMainDark,
  autoFillBgcTextFieldDark,
  errorDark,
  backgroundPaperDark,
  boxShadowPaperDark,
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
    MuiOutlinedInput: {
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
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: backgroundPaperDark,
          borderRadius: "10px",
        },
        elevation3: {
          boxShadow: `0 0 10px 0px ${boxShadowPaperDark}`,
        },
      },
      defaultProps: {
        elevation: 3,
      },
    },
  },
};
