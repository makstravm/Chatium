import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import logo from "assets/logo.png";

const Authorization = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
      <Container maxWidth="xs">
        <Box sx={{ p: 2, pt: 3, display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="logo" width="100" />
        </Box>
        <Outlet />
        <Typography variant="body2" align="center" pt={2} pb={2}>
          © 2022 Chatium. {t("auth.footerText")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Authorization;
