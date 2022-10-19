import { Container, Grid, Paper, Typography } from "@mui/material";
import Footer from "src/components/Footer";

const Layout = () => (
  <Container maxWidth="xl">
    <Grid container wrap="nowrap" height="100vh" flexDirection="column">
      <Typography variant="h5" className="header-message">
        Logo
      </Typography>
      <Grid container component={Paper} flexGrow="1">
        <Grid item xs={3}>
          Aside
        </Grid>
        <Grid item xs={9}>
          Chat
        </Grid>
      </Grid>
      <Grid container>
        <Footer />
      </Grid>
    </Grid>
  </Container>
);

export default Layout;
