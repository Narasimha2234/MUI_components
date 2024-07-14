import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import ChipActions from './ChipActions'
import ChipAdornments from './ChipAdornments'

const Chips = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
         <Box>
            {basic}

            <ChipActions/>
            <ChipAdornments/>
         </Box>

    </Box>
  )
}

export default Chips

const basic=(
    <Stack direction={"row"} spacing={4}>
            <Chip label="simple" color='secondary'/>
            <Chip label="chip" color='primary'/>
            <Chip label="narasimha" variant='outlined'/>
    </Stack>
)

