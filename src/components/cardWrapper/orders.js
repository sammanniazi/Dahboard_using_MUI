import { Box } from '@mui/material'
import React from 'react'
import { Card, CardContent } from "@mui/material";
import  OrderList  from '../orders/index'


const index = () => {
  return (
    <div>

    <Box sx={{ borderRadius: 2 }}>
  
    <Card>
    <h4>Orders Review</h4>
   
    <CardContent>
    
<OrderList/>

    </CardContent>

    </Card>



    </Box>
      
    </div>
  )
}

export default index
