import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";
import  Table from '../Table/index'


const index = () => {
  return (


    <Box sx={{ borderRadius: 2,width: { xs: '100%', md: '50%' }}}>
  
    <Card>
   
    <CardContent >
    
<Table/>

    </CardContent>

    </Card>



    </Box>
      
  
  )
}

export default index
