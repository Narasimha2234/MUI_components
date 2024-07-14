import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CustomeHeightMenu = () => {
    const [anchorEl,setAnchorEl]=useState(null)
    const open=Boolean(anchorEl)
    const openHandler=(event)=>{
        setAnchorEl(event.currentTarget)
    }
    const closeHandler=()=>{
        setAnchorEl(null)
    }
    const menuItems=[ 'None','Atria','Callisto','Dione', 'Ganymede', 'Hangouts Call', 'Luna', 'Oberon', 'Phobos', 'Pyxis', 'Sedna', 'Titania', 'Triton', 'Umbriel',]
  return (
    <Box>
        <Typography variant='h6'>more Icon</Typography>
        <IconButton
             onClick={openHandler}
        >
           <MoreVertIcon/>
        </IconButton>
        <Menu open={open}
              anchorEl={anchorEl}
              onClose={closeHandler}
              sx={{
                height:"300px",
                width:"200px"
              }}
            >
           {menuItems.map((item,index)=>{
            return(
                <MenuItem key={index} onClick={closeHandler}>
                    {item}
                </MenuItem>
            )
           })}
        </Menu>
    </Box>
  )
}

export default CustomeHeightMenu