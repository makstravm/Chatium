import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Container, Typography } from "@mui/material";

import logo from "public/logo.png";

const Authorization = () => (
  <Box sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
    <Container maxWidth="xs">
      <Box sx={{ p: 2, pt: 3, display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="logo" width="100" />
      </Box>
      <Outlet />
      <Typography variant="body2" align="center" pt={2} pb={2}>
        © 2022 Chatium. Produced by Ukraine
      </Typography>
    </Container>
  </Box>
);

export default Authorization;
