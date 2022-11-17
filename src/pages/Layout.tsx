import { Container, Divider, Grid, Paper } from "@mui/material";
import Footer from "components/Footer";
import { LogoSmall } from "components/LogoSmall";
import { AsideContainer } from "src/components/SideContainer/SideContainer";

const Layout = () => (
  <Container maxWidth="xl">
    <Grid container wrap="nowrap" height="100vh" flexDirection="column">
      <LogoSmall />
      <Grid
        container
        component={Paper}
        flexGrow="1"
        maxHeight={"calc(100vh - 78px)"}
      >
        <Grid item md={3} xs={4} justifyContent="space-between">
          <AsideContainer />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
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
