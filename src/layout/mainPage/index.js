import { Box, Grid } from "@mui/material";
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import Card from '../../Container/cards/index';
import StaticCard from '../../Container/statisticCards/index'
import LinechartCard from '../../Container/statisticCards/lineChart'
import CompleteTask from '../../Container/statisticCards/completeTask'

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
          <Grid item xs={12} sm={9}>
  <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '16px', marginTop: '30px' }}>
    <StaticCard sx={{ minWidth: '300px', flexGrow: 1 }} />
    <LinechartCard sx={{ minWidth: '300px', flexGrow: 1 }} />
    <CompleteTask sx={{ minWidth: '300px', flexGrow: 1 }} />
  </Box>
</Grid>
        </Grid>

        
      </Grid>
     
    </Box>
  );
}

export default Mainpage;
