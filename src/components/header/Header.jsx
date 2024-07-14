import { AppBar, Avatar,  IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import {  useTheme } from '../theme/ThemeProviderComp';
const Header = (props) => {
    const {toggleTheme ,mode}=useTheme()
    const {handleShow}=props
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
               
                sx={{ml:2}}
                size='large'
            >
                    <Avatar sx={{bgcolor:"blue"}}>C</Avatar>
            </IconButton>
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