import { Box } from '@mui/material'
import React from 'react'
import BasicModel from './BasicModel';
import NestedModal from './ChildModels';
import TransitionsModal from './TransitionModel';

const Models = () => {
  return (
    <Box sx={{height:"70vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Box>
          <BasicModel/>
          <NestedModal/>
          <TransitionsModal/>
        </Box>
    </Box>
  )
}

export default Models