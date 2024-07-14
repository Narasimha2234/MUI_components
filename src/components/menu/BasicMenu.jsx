import { Box, Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const BasicMenu = () => {
    const [anchorEl,setAnchorEl]=useState(null)
    const open=Boolean(anchorEl)
    const openHandler=(event)=>{
        setAnchorEl(event.currentTarget)
    }
    const closeHandler=()=>{
        setAnchorEl(null)
    }
  return (
    <Box>
        <Button
        variant='contained'
        onClick={openHandler}>
            Click to open Menu
        </Button>
        <Menu open={open}
              anchorEl={anchorEl}
              onClose={closeHandler}
            >
            <MenuItem onClick={closeHandler}>home</MenuItem>
            <MenuItem onClick={closeHandler}>about</MenuItem>
            <MenuItem onClick={closeHandler}>contact</MenuItem>
            <MenuItem onClick={closeHandler}>logout</MenuItem>
        </Menu>
    </Box>
  )
}

export default BasicMenu