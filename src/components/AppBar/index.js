import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CreateIcon from '@mui/icons-material/Create';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

const LightAppBar = styled(AppBar)({
  backgroundColor: '#f2f2f2',
  color: '#333',
  alignItems:'center',


});

export default function MyAppBar() {
  return (
    <Container maxWidth='lg'>
    <LightAppBar position="static" sx={{borderRadius:2}}>
      <Toolbar>
        <IconButton >
          <DashboardIcon  />
        </IconButton>
        <Typography variant="h6" component="div"  >
          Dashboard
        </Typography>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Profile
        </Typography>
        <IconButton>
          <CreateIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Sign Up
        </Typography>
        <IconButton>
          <ExitToAppIcon />
        </IconButton>
        <Typography variant="h6" component="div" >
          Sign In
        </Typography>
      </Toolbar>
    </LightAppBar>
    </Container>
  );
}
