import { useContext } from "react";
import { Box } from "@mui/material";
import { ThemeContext } from "src/context/ThemeContext";
import { Theme } from "constants/themeMode";
import logoLight from "assets/logoLight.png";
import logoDark from "assets/logoDark.png";

const Logo = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <Box sx={{ p: 2, pt: 3, display: "flex", justifyContent: "center" }}>
      <img
        src={themeMode !== Theme.DARK ? logoDark : logoLight}
        alt="The big logo for Chatium, instant messaging system"
        width="100"
      />
    </Box>
  );
};

export default Logo;
