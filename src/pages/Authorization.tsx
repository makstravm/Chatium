import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Logo from "components/Logo";
import Footer from "components/Footer";

const Authorization = () => (
  <Box sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
    <Container maxWidth="xs">
      <Logo />
      <Outlet />
      <Footer />
    </Container>
  </Box>
);

export default Authorization;
