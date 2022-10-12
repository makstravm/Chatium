import { useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import { Box } from "@mui/material";
import logoLight from "assets/logoLight.png";
import logoDark from "assets/logoDark.png";
import { Theme } from "constants/themeMode";

const Logo = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <Box sx={{ p: 2, pt: 3, display: "flex", justifyContent: "center" }}>
      <img
        src={themeMode === Theme.DARK ? logoDark : logoLight}
        alt="logo"
        width="100"
      />
    </Box>
  );
};

export default Logo;
