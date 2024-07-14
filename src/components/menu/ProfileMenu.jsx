import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const ProfileMenu = () => {
    const[anchor,setAnchor]=useState(null)
    const open=Boolean(anchor)
    const openHandler=(event)=>{
        setAnchor(event.currentTarget)
    }
    const closeHandler=()=>{
        setAnchor(null)
    }
  return (
    <Box>
        <Typography variant='h5'>profile Menu</Typography>
        <IconButton onClick={openHandler}>
            <Avatar src='https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg' alt='profile pic'/>
        </IconButton>
        <Menu open={open}
            anchorEl={anchor}
            onClose={closeHandler}
            
        >
            <MenuItem onClick={closeHandler} >
                <Avatar/> <Typography ml={1}>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={closeHandler}>
                <Avatar/><Typography ml={1}>My Account</Typography>
            </MenuItem>
            <Divider/>
            <MenuItem onClick={closeHandler}>
                <IconButton>
                <PersonAdd/>
                </IconButton>
                Add Another account
            </MenuItem>
            <MenuItem onClick={closeHandler}>
             <IconButton>
                <Settings/>
                </IconButton>
              
                settings
            </MenuItem>
            <MenuItem onClick={closeHandler}>
                <IconButton>
                <Logout/>
                </IconButton>
                LogOut
            </MenuItem>
        </Menu>
    </Box>
  )
}

export default ProfileMenu