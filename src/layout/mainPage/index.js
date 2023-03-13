import { Box, Grid } from "@mui/material";
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import Card from '../../components/cards/index';

function Mainpage() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <MyAppBar />
        </Grid> 

        <Grid item xs={12} sm={3}>
          <Sidebar sx={{ marginTop: '15px' }} />
        </Grid>

        <Grid item xs={12} sm={9}>
          <Grid container spacing={2} sx={{ marginTop: '0px' }}>
            <Grid item xs={12} sm={4}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mainpage;
