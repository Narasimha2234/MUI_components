import { Badge, Stack, Switch } from '@mui/material'
import React, { useState } from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';

const HideAndShow = () => {
    const [visible,setVisible]=useState(false)
  return (
    <Stack direction={"row"} spacing={4} mt={2}>
        <Badge badgeContent={3} color='secondary' invisible={visible} >
             <TelegramIcon />
        </Badge>

        <Switch checked={visible} onClick={()=>setVisible(!visible)}/>
    </Stack>
  )
}

export default HideAndShow