import { AppBar, Avatar,  IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import {  useTheme } from '../theme/ThemeProviderComp';
const Header = (props) => {
    const {toggleTheme ,mode}=useTheme()
    const {handleShow}=props

    const[anchor,setAnchor]=useState(null)
    const openMenuHandler=(event)=>{
        console.log("open");
        setAnchor(event.currentTarget)
    }
    const open=Boolean(anchor)
    const closeHandler=()=>{
        setAnchor(null)
    }
  return (
    <AppBar>
        <Toolbar>
            <IconButton
             size='large'
             edge="start"
             sx={{mr:2}}
             color='inherit'
             
            >
            <MenuIcon onClick={handleShow}/>
            </IconButton>
            <Typography variant='h6' sx={{flexGrow:1}}>MUI COMPONENTS</Typography>
            <IconButton
                color='inherit'
                onClick={openMenuHandler}
                sx={{ml:2}}
                size='large'
            >
                    <Avatar sx={{bgcolor:"blue"}} >C</Avatar>
            </IconButton>
                 <Menu open={open}
                    anchorEl={anchor}
                    onClose={closeHandler}
                >
                <MenuItem onClick={closeHandler}>home</MenuItem>
                <MenuItem onClick={closeHandler}>about</MenuItem>
                <MenuItem onClick={closeHandler}>contact</MenuItem>
                <MenuItem onClick={closeHandler}>logout</MenuItem>
                </Menu>
            <IconButton
                color='inherit'
                edge="end"
                sx={{ml:2}}
                size='large'
                onClick={toggleTheme}
            >
                 {mode==="light" ?<Brightness5Icon/>:<Brightness4Icon/> }
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header
