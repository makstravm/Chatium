import React from "react";
import { Box, Container, Typography } from "@mui/material";

import logo from "public/logo.png";
import { Outlet } from "react-router-dom";

const Authorization = () => (
  <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
    <Container maxWidth="sm">
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="logo" width="100" />
      </Box>
      <Outlet />
      <Typography variant="body2" align="center" pt={2}>
        © 2022 Chatium. Produced by Ukraine
      </Typography>
    </Container>
  </Box>
);

export default Authorization;
