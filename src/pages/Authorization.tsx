import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import Logo from "components/Logo";

const Authorization = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
      <Container maxWidth="xs">
        <Logo />
        <Outlet />
        <Typography variant="body2" align="center" pt={2} pb={2}>
          © 2022 Chatium. {t("auth.footerText")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Authorization;
