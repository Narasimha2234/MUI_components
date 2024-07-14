import { Box, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'

const LinearProgressComp = () => {
  return (
    <Box mt={3}>
         
          {basic}

          {LinearWithColor}
        
    </Box>
  )
}

export default LinearProgressComp

const basic=(
    <Box>
        <Typography>Linear Progress</Typography>
        <LinearProgress/>
    </Box>
)

const LinearWithColor=(
    <Box mt={4}>
    <Typography>Linear with colors</Typography>
    <Stack direction={"column"} spacing={6}>
    <LinearProgress color='success'/>
    <LinearProgress color='warning'/>
    <LinearProgress color='secondary'/>
    <LinearProgress color='primary'/>
    </Stack>
</Box>

)