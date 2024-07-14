import { Box } from '@mui/material'
import React from 'react'
import CircularProgressComp from './CircularProgressComp'
import CircularProgressValue from './CircularProgressValue'
import LinearProgressComp from './LinearProgressComp'
import LinearProgressWithValue from './LinearProgressWithVAlues'

const ProgressComp = () => {
  return (
    <Box>
        <CircularProgressComp/>
        <CircularProgressValue/>
        <LinearProgressComp/>
        <LinearProgressWithValue/>
    </Box>
  )
}

export default ProgressComp