import { BottomNavigation, BottomNavigationAction, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const SimpleNavigation = () => {
    const [value,setValue]=useState(0)
  return (
    <Box>
        <Typography>Bottom navigation with label</Typography>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event,newValue)=>setValue(newValue)}
        >
            <BottomNavigationAction label="home" icon={<HomeIcon/>}/>
            <BottomNavigationAction label="message" icon={<CommentIcon/>}/>
            <BottomNavigationAction label="camera" icon={<CameraAltIcon/>}/>

        </BottomNavigation>
    </Box>
  )
}

export default SimpleNavigation