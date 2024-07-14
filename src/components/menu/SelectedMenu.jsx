import { Box, List, ListItemButton, ListItemText, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const SelectedMenu = () => {
    const[anchor,setAnchor]=useState(null)
    const [selectedItem,setSelectedItem]=useState(1)
    const open=Boolean(anchor)
    const handleOpen=(event)=>{
        setAnchor(event.currentTarget)
    }
    const handleClose=()=>{
        setAnchor(null)
    }
    const handleItemClick=(event ,index)=>{
        setSelectedItem(index)
        setAnchor(null)
    }
    const secondaryText=[
        "allow notifications","silent incoming calls","hide all notifications","hide sensitivi content"
    ]
  return (
    <Box>
        <List>
            <ListItemButton  onClick={handleOpen}>
                <ListItemText primary="selected option" secondary={secondaryText[selectedItem]}/>
            </ListItemButton>
        </List>
        <Menu open={open}
                anchorEl={anchor}
                onClose={handleClose}
        >
           
            {secondaryText.map((item,index)=>{
                return(
                    <MenuItem  onClick={(event)=>handleItemClick(event,index)}
                    key={item}
                    
                    selected={index===selectedItem}  
                    >
                        {item}
                    </MenuItem>
                )
            })}
        </Menu>
    </Box>
  )
}

export default SelectedMenu