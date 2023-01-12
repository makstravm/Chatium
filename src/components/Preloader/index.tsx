import { FC, useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { Box, Grid } from "@mui/material";
import logoLight from "assets/logoLight.png";
import logoDark from "assets/logoDark.png";
import style from "./Preloader.module.scss";
import { Theme } from "src/constants/themeMode";
import { colors } from "src/themes/colors";

const { DARK } = Theme;

const { spinnerLight, spinnerDark } = colors;

export const Preloader: FC = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <Grid container alignItems="center" justifyContent="center" height="100vh">
      <Grid
        className={style.preloader}
        container
        alignItems="center"
        justifyContent="center"
        width="20vh"
        height="18vh"
      >
        <Box
          component="img"
          className={style.img}
          alt="The loader with logo website."
          src={themeMode !== Theme.DARK ? logoDark : logoLight}
        />
        <Box
          className={style.spinner}
          style={{
            borderColor: themeMode !== DARK ? spinnerDark : spinnerLight,
          }}
        />
      </Grid>
    </Grid>
  );
};
