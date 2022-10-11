import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Logo from "components/Logo";

const Authorization = () => (
  <Box sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
    <Container maxWidth="xs">
      <Logo />
      <Outlet />
      <Typography variant="body2" align="center" pt={2} pb={2}>
        © 2022 Chatium. Produced by Ukraine
      </Typography>
    </Container>
  </Box>
);

export default Authorization;
