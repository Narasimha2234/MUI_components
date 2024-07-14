import { Box } from '@mui/material'
import React from 'react'
import BasicAccordian from './BasicAccordian'

const Accodrians = () => {
  return (
    <Box sx={{
        height:"80vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <BasicAccordian/>
    </Box>
  )
}

export default Accodrians