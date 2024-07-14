import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'

const CircularProgressComp = () => {
  return (
    <Box  display={"flex"} width={"100vw"}  justifyContent={"center"}>
       <Box>
        {Basicprogress}

        {progressWithColor}
       </Box>
    </Box>
  )
}

export default CircularProgressComp

const Basicprogress=(
    <Box>
        <Box>
        <Typography gutterBottom>Basic progress</Typography>
        <CircularProgress/>
        </Box>
    </Box>
)

const progressWithColor=(
       <Box mt={2}>
        <Typography gutterBottom>progress with colors</Typography>
        <Stack direction={"row"} spacing={4}>
                <CircularProgress color='primary'/>
                <CircularProgress color='secondary'/>
                <CircularProgress color='warning'/>
                <CircularProgress color='error'/>
        </Stack>
       </Box>
)

