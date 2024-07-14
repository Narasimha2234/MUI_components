import { Box } from '@mui/material'
import React from 'react'
import BasicAvatar from './BasicAvatar'
import GroupAvatar from './GroupAvatar'

const Avatars = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <Box>
            <BasicAvatar/>

            <GroupAvatar/>
        </Box>
    </Box>
  )
}

export default Avatars