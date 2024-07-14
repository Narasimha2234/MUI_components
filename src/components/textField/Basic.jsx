import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Basic = () => {
  return (
    <Box>
       {basicTextField}
    </Box>
  )
}

export default Basic


const basicTextField=(
    <>
    <Typography variant='h5' gutterBottom>basic textField</Typography>
    <Stack direction={"row"} spacing={5}>
        <TextField label={"name"}  variant='standard'/>
        <TextField label={"email"} variant='outlined'/>
        <TextField label={"password"} variant='filled'/>
    </Stack>
    </>
)