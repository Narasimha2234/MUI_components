import { Box, Button, Fade, Stack, Tooltip, Typography, Zoom } from '@mui/material'
import React from 'react'
import AddAlertIcon from '@mui/icons-material/AddAlert';

const ToolTips = () => {
    return (
        <Box >
           <Box >
           {basic}

            {delay}

            {arrow}

            {transition}

            {fallowCursor}
           </Box>

        </Box>
    )
}

export default ToolTips


const basic = (
    <Box ml={5}>
        <Typography variant='body1' mt={1}>basic with positions</Typography>
        <Stack direction={"row"} spacing={10} mt={4}>
            <Tooltip title="subscribe">
                <AddAlertIcon />
            </Tooltip>
            <Tooltip title="left" placement='left'>
                <Typography variant='body1'>Left</Typography>
            </Tooltip>
            <Tooltip title="right" placement='right'>
                <Typography variant='body1'>right</Typography>
            </Tooltip>
            <Tooltip title="top" placement='top'>
                <Typography variant='body1'>top</Typography>
            </Tooltip>
            <Tooltip title="bottom" placement='bottom'>
                <Typography variant='body1'>down</Typography>
            </Tooltip>
        </Stack>
    </Box>
)

const delay = (
    <Box ml={5}>
        <Typography variant='body1' mt={4}>with delay times</Typography>
        <Stack direction={"row"} spacing={10} mt={4}>
            <Tooltip title="subscribe" enterDelay={200} leaveDelay={100}>
                <AddAlertIcon />
            </Tooltip>
            <Tooltip title="left" placement='left' enterDelay={500} leaveDelay={500}>
                <Typography variant='body1'>Left</Typography>
            </Tooltip>
        </Stack>
    </Box>
)

const arrow = (

    <Box ml={5}>
        <Typography variant='body1' mt={4}>Arrow tooltip</Typography>
        <Stack direction={"row"} spacing={10} mt={4}>
            <Tooltip title="subscribe" arrow>
                <AddAlertIcon />
            </Tooltip>
        </Stack>
    </Box>

)

const transition = (
    <Box mt={3} ml={2}>
        <Typography></Typography>
        <Stack direction={"row"} spacing={10}>
            <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Add"
            >
                <Button>Fade</Button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Add">
                <Button>Zoom</Button>
            </Tooltip>
        </Stack>
    </Box>
)

const fallowCursor = (
    <Tooltip title="hovering on button" followCursor mt={5}>
        <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', width:"100px" ,padding:2,ml:3}}>
            hover me
        </Box>
    </Tooltip>
)