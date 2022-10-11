import { ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lightTheme: ThemeOptions = {
  typography: {
    fontFamily: ["-apple-system", "Comfortaa", "cursive"].join(","),
    allVariants: { color: grey[900] },
  },
  palette: {
    mode: "light",
    background: { default: grey[200] },
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[900],
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 1000px ${grey[300]} inset`,
            },
          },
        },
      },
    },
  },
};
