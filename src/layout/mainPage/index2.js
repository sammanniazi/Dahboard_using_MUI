import { Box ,useTheme } from '@mui/material';
import MyAppBar from "../header/appBar";
import Sidebar from "../sideBar/index";
import Card from '../../Container/cards/index';
import StaticCard from '../../Container/statisticcards/index'
import LinechartCard from '../../Container/statisticcards/lineChart'
import CompleteTask from '../../Container/statisticcards/completeTask'
import Table from '../../components/cardWrapper/index'
import Order from '../../components/cardWrapper/orders'
import Footerbar from '../../components/Foooter/index'

function App() {

    const theme = useTheme();
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column',sm:'column' ,md: 'row' },
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        }
      }}>
        <Box sx={{
          width: { xs: '100%',sm:'100%', md: '25%' },
          [theme.breakpoints.down('md')]: {
            width: '100%'
          }
        }}>
          <Sidebar sx={{ width: '100%', maxWidth: '200px' }} />
        </Box>
        <Box sx={{ flex: '1' }}>
          <MyAppBar sx={{ width: '100%' }} />
  
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            gap: '16px',
            marginRight: { xs: 0, md: '30px' },
            marginTop: { xs: '30px', md: 0 },
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>
            <Card sx={{
              width: { xs: '100%',sm:'100%', md: '33%' }
            }} />
  
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            gap: '16px',
            marginRight: { xs: 0, md: '30px' },
            marginTop: '30px',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>
            <StaticCard sx={{
              width: { xs: '100%',sm:'100%', md: '33%' }
            }} />
            <LinechartCard sx={{
              width: { xs: '100%',sm:'100%', md: '33%' }
            }} />
            <CompleteTask sx={{
              width: { xs: '100%',sm:'100%', md: '33%' }
            }} />
  
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' },
            gap: '16px',
            marginRight: { xs: 0, md: '30px' },
            marginTop: '30px',
            marginBottom: '60px',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          }}>
            <Table sx={{
              width: { xs: '100%',sm:'100%', md: '50%' }
            }} />
            <Order sx={{
              width: { xs: '100%', sm:'100%',md: '50%' }
            }} />
  
  
          </Box>
  
          <Box sx={{display: 'flex',
            flexDirection: { xs: 'column',sm:'column' , md: 'row' }, marginTop: '30px' ,  marginLeft: { xs: 0,sm:0, md: 0 },
         [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          
          }}>
            <Footerbar sx={{
              width: { xs: '100%', md: '33%' }
            }}  />
          
          
        </Box>

      </Box>
    </Box>
  );
}
export default App;