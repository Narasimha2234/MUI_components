import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';

const BasicList = () => {
  return (
    <Box>
       {basicList}
    </Box>
  )
}

export default BasicList

 const basicList=(
    <Box> 
        <Typography variant='h6'>Basic List</Typography>
        <List >
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="home"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary="about"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <CallIcon/>
                    </ListItemIcon>
                    <ListItemText primary="contact"/>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
 )