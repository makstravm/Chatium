import { FC, useContext } from "react";
import { Box } from "@mui/material";
import { ThemeContext } from "src/context/ThemeContext";
import { Theme } from "constants/themeMode";
import logoLight from "assets/logoSmallLight.png";
import logoDark from "assets/logoSmallDark.png";

export const LogoSmall: FC = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <Box sx={{ pb: 1, pt: 1, display: "flex" }}>
      <img
        src={themeMode === Theme.DARK ? logoDark : logoLight}
        alt="Logo for Chatium, instant messaging system"
        width="100"
      />
    </Box>
  );
};
