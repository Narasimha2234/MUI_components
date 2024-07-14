import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useState } from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';

const WifiAndBt = () => {
    const [wifi,setWifi]=useState(false)
    const handleWifi=()=>{
      setWifi((prev)=>!prev)
    }
    const [bt,setbt]=useState(false)
    const handleBt=()=>{
      setbt((prev)=>!prev)
    }
  return (
    <Box>
        <List sx={{width:"350px"}} >
            <ListItem >
            <ListItemIcon>
                <WifiIcon/>
            </ListItemIcon>
            <ListItemText primary="Wifi" secondary={`${wifi===true ? "wifi turned on":""}`}/>
            <Switch onChange={handleWifi} name='wifi' checked={wifi}/>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon>
                <BluetoothIcon/>
            </ListItemIcon>
            <ListItemText primary="Bluetooth" secondary={`${bt===true ? "bluetooth turned on":""}`}/>
            <Switch name='bt' checked={bt} onChange={handleBt} />
            </ListItem>
        </List>
    </Box>
  )
}

export default WifiAndBt

