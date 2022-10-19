import { Container, Grid, Paper } from "@mui/material";
import Footer from "components/Footer";
import LogoSmall from "components/LogoSmall";

const Layout = () => (
  <Container maxWidth="xl">
    <Grid container wrap="nowrap" height="100vh" flexDirection="column">
      <LogoSmall />
      <Grid container component={Paper} flexGrow="1">
        <Grid item xs={3}>
          Aside
        </Grid>
        <Grid item xs={9}>
          Chat
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  </Container>
);

export default Layout;
