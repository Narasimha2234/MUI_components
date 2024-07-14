import { Box } from '@mui/material'
import React from 'react'
import BasicDialog from './BasicDialog'
import TransitionDialog from './TransitionDialog'
import FormDialog from './FormDialog'
import FullScreenDialog from './FullScreenDialog'

const Dialogs = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginRight:"10px"
    }}>
        <BasicDialog/>
        <TransitionDialog/>
        <FormDialog/>
        <FullScreenDialog/>
    </Box>
  )
}

export default Dialogs