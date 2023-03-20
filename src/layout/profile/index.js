import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import IMage from  '../../images/profile.png'

import Card from '../../Container/statisticcards/completeTask.js'

const index = () => {
  return (
   <>
<Container maxWidth="lg" style={{ height: '50vh', backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg")', backgroundSize: 'cover',marginTop:"30px"  ,   borderRadius:'16px'}}>
       
        </Container>

<Container maxWidth="lg" sx={{ bgcolor: 'rgb(255, 255, 255)', height: '130vh' ,borderRadius:'16px',boxShadow: 3 }}>


        <Box display ="flex" flexDirection="column"  justifyContent='space-between' >

<Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" mt={5}>

        <Box display="flex" flexDirection="column" >
         
         <h4>Platform settings</h4>



        </Box>


        <Box display="flex" flexDirection="row" ml={4}>
        
     
        <FormGroup>
    
        
      <FormControlLabel control={<Switch defaultChecked />} label=" Email me when someone follows me" />
      <FormControlLabel control={<Switch defaultChecked />} label="Email me when someone answers on my post" />
      <FormControlLabel control={<Switch defaultChecked />} label=" Email me when someone mentions me" />
      
    </FormGroup>


 
        </Box>

        <h4>Application</h4>

        <Box display="flex" flexDirection="row" ml={4}>
        
     
        <FormGroup>
    
        <FormControlLabel control={<Switch defaultChecked />} label="
New launches and projects " />
      <FormControlLabel control={<Switch defaultChecked />} label="Email me when someone answers on my post" />
      <FormControlLabel control={<Switch defaultChecked />} label=" 
Subscribe to newsletter" />
      
      
    </FormGroup>


 
        </Box>

        

     

        </Box>

        <Box display="flex" flexDirection="column" mt={5}>

     
        <Box display="flex" flexDirection="column" >
         
        <h4>Profile Information</h4>



        </Box>
         
         
         <p>
         Hi, I’m Alec Thompson, Decisions: If you can’t decide,<br/>the answer is no. If two equally difficult <br/>paths, choose the one more painful in the short term <br/> (pain avoidance is creating an illusion of equality).
         </p>

   

       <Box >
        <p>Full Name:  
 Alec M. Thompson</p>
        <p>Mobile:  
 (44) 123 1234 123</p>
 <p>Email:  
 alecthompson@mail.com</p>
 <p>Location:  
 USA</p>
       </Box>

        </Box>



        <Box display="flex" flexDirection="column" mt={5}>

        <Box display="flex" flexDirection="column" >
         
        <h4>Conversation</h4>



        </Box>

       <Box >
       <TableContainer>
  <Table sx={{ borderCollapse: 'collapse' }}>
    <TableBody>
      <TableRow>
        <TableCell sx={{ py: 2 }}>
          <img src={IMage } alt="Profile Icon" style={{ width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '10px' }}>John Doe</span>
        </TableCell>
        <TableCell sx={{ py: 2 }}>Reply</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ py: 2 }}>
        <img src={IMage } alt="Profile Icon" style={{ width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '10px' }}>John Doe</span>
        </TableCell>
        <TableCell sx={{ py: 2 }}>Reply</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ py: 2 }}>
        <img src={IMage } alt="Profile Icon" style={{ width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '10px' }}>John Doe</span>
        </TableCell>
        <TableCell sx={{ py: 2 }}>Reply</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ py: 2 }}>
        <img src={IMage } alt="Profile Icon" style={{ width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '10px' }}>John Doe</span>
        </TableCell>
        <TableCell sx={{ py: 2 }}>Reply</TableCell>
      </TableRow>
      
    </TableBody>
  </Table>
</TableContainer>
       </Box>

        </Box>

        



        </Box>


<Box display="flex" flexDirection="row" ml={1}>
<h4>projects</h4>
<br/>

</Box>

<Box display="flex" flexDirection="row" justifyContent='space-between'>
<Card />
<Card/>
<Card/>



</Box>
        </Box>
      </Container>

   </>
  )
}

export default index
