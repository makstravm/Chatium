import { ThemeOptions } from "@mui/material";
import { colors } from "./colors";

const {
  fontsLight,
  backgroundLight,
  primaryMainLight,
  secondaryMainLight,
  autoFillBgcTextFieldLight,
  errorLight,
  backgroundPaperLight,
  boxShadowPaperLight,
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
    MuiOutlinedInput: {
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: fontsLight,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: backgroundPaperLight,
          borderRadius: "10px",
        },
        elevation3: {
          boxShadow: `0 0 10px 0px ${boxShadowPaperLight}`,
        },
      },
      defaultProps: {
        elevation: 3,
      },
    },
  },
};
