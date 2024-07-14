import React from 'react'
import BasicPoppover from './BasicPoppover'
import {  Stack } from '@mui/material'
import MouseEvenetPoppover from './MouseEventPoppover'

const Poppovers = () => {
  return (
    <Stack sx={{
        height:"80vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"
    }} direction={"row"} spacing={10}>
        <BasicPoppover/>
        <MouseEvenetPoppover/>
    </Stack>
  )
}

export default Poppovers