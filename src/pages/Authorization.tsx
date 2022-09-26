import React from "react";
import { Box, Container, Paper } from "@mui/material";

import logo from "public/logo.png";

const Authorization = () => (
  <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ borderRadius: "15px" }}>
        <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="logo" width="100" />
        </Box>
      </Paper>
    </Container>
  </Box>
);

export default Authorization;
