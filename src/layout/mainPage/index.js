import { Box, Grid } from "@mui/material";
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import Card from '../../Container/cards/index';

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
          <Box sx={{ display: 'flex', gap: '16px',flexWrap: 'wrap' }}>
            <Card sx={{ minWidth: '300px', flexGrow: 1 }} />
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mainpage;
