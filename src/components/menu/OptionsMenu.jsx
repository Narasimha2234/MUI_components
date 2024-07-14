import { Avatar, Box, Button, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const OptionsMenu = () => {
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
        <Typography variant='h5'>Options Menu</Typography>
        <Button variant='contained' onClick={openHandler} endIcon={<KeyboardArrowDownIcon/>}>
            options
        </Button>
        <Menu open={open}
            anchorEl={anchor}
            onClose={closeHandler}
            
        >
           <MenuItem onClick={closeHandler}>
                <IconButton>
                <EditIcon/>
                </IconButton>
                Edit
            </MenuItem>
            <MenuItem onClick={closeHandler}>
                <IconButton>
                <FileCopyIcon/>
                </IconButton>
                Duplicate
            </MenuItem>
            <Divider/>
            <MenuItem onClick={closeHandler}>
                <IconButton>
                <ArchiveIcon/>
                </IconButton>
                Archive
            </MenuItem>
            <MenuItem onClick={closeHandler}>
             <IconButton>
                <MoreHorizIcon/>
                </IconButton>
              
                more settings
            </MenuItem>
        </Menu>
    </Box>
  )
}

export default OptionsMenu