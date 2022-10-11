import { ThemeOptions } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const darkTheme: ThemeOptions = {
  typography: {
    fontFamily: ["-apple-system", "Public Sans", "sans-serif"].join(","),
    allVariants: { color: grey[100] },
  },
  palette: {
    mode: "dark",
    background: { default: grey[900] },
    primary: {
      main: grey.A400,
    },
    secondary: {
      main: grey[100],
    },
    error: {
      main: red[300],
    },
    text: {
      primary: grey[100],
      secondary: grey[400],
      disabled: grey[700],
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 1000px ${grey[700]} inset`,
            },
          },
        },
      },
    },
  },
};
