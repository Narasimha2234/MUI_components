import { Box } from '@mui/material'
import React from 'react'
import BasicSnackBar from './BasicSnackBar'
import SnackBarPositions from './SnackBarPositions'
import SlideTransitionSnackBar from './SlideTransitionSnackBar'

const SnackBars = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <Box>
        <BasicSnackBar/>

            <SnackBarPositions/>

            <SlideTransitionSnackBar/>
        </Box>

    </Box>
  )
}

export default SnackBars