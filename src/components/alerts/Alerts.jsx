import { Alert, AlertTitle, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Battery2BarIcon from '@mui/icons-material/Battery2Bar';
import OpenAndClose from './OpenAndClose';

const Alerts = () => {
  return (
    <Box  sx={{
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
       <Box>
             {basic}

            {Action}
            <OpenAndClose/>
       </Box>
    </Box>
  )
}

export default Alerts

const basic=(
    <Box>
        <Typography gutterBottom>basic and varients</Typography>
        <Stack direction={"column"} spacing={4}>
        <Alert severity='success' variant='outlined' sx={{width:"400px"}}>
            success
        </Alert>
        <Alert severity='warning' variant='filled' sx={{width:"400px"}}>
            warning
        </Alert>
        <Alert severity='error' variant='standard' sx={{width:"400px"}}>
            error
        </Alert>
        <Alert severity='info' variant='outlined' sx={{width:"400px"}}>
            info
        </Alert>
    </Stack>
    </Box>

)

const Action=(
    <Box mt={3}>
        <Typography gutterBottom>with action buttons</Typography>
        <Stack direction={"column"} spacing={4}>
        <Alert severity='warning' variant='outlined' sx={{width:"400px"}} onClose={()=>{}}>
           close
        </Alert>
        <Alert severity='success' variant='standard' sx={{width:"400px"}}
            action={
                <Button>
                    UNDO
                </Button>
            }
        >
            undo
        </Alert>

        <Alert icon={<Battery2BarIcon/>} severity='error'>
            added battery icon for low battery warning
        </Alert>

        <Alert icon={<Battery2BarIcon/>} severity='error'>
            <AlertTitle>low Battery</AlertTitle>
            added battery icon for low battery warning
        </Alert>
    </Stack>
    </Box>

)

