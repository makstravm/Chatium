import { useContext } from "react";
import { Box } from "@mui/material";
import { ThemeContext } from "contexts/ThemeContext";
import { Theme } from "constants/themeMode";
import logoLight from "assets/logoChatiumLight.png";
import logoDark from "assets/logoChatiumDark.png";

const LogoSmall = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <Box sx={{ pb: 1, pt: 1, display: "flex" }}>
      <img
        src={themeMode === Theme.DARK ? logoDark : logoLight}
        alt="logo"
        width="100"
      />
    </Box>
  );
};

export default LogoSmall;
