import { Badge, Box,  Divider, Stack } from '@mui/material'
import React from 'react'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FacebookIcon from '@mui/icons-material/Facebook';
import ChangeContent from './ChangeContent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HideAndShow from './HideAndShow';

const BadgesComp = () => {
  return (
    <Box mt={5} sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }} >
            <Box>
                {basic}
                <Divider/>
                <ChangeContent/>
                <Divider/>
                <HideAndShow/>
            </Box>
    </Box>
  )
}

export default BadgesComp

const basic=(
   <Stack direction={"row"} spacing={5} mb={5}>
     <Badge badgeContent={4} color='primary'>
        <LocalPostOfficeIcon />
    </Badge>

    <Badge badgeContent={0} color='primary'>
        <WhatsAppIcon />
    </Badge>

    <Badge badgeContent={2} color='primary'>
        <FacebookIcon />
    </Badge>
   </Stack>

)

