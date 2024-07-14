import { Box, Button, IconButton, Slide, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon  from '@mui/icons-material/Close';

const Transition=((props)=>{
    return <Slide {...props} direction='up'/>
})
const SlideTransitionSnackBar = () => {
    const[open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen((prev)=>!prev)
    }
    const handleClose=()=>{
        setOpen((prev)=>!prev)
    }
    const action=(
        <Box>
            <Button onClick={handleClose}>
                UNDO
            </Button>
            <IconButton onClick={handleClose} color='primary'>
                <CloseIcon />
            </IconButton>
        </Box>
    )

  return (
    <Box>
        <Button onClick={handleOpen}>Slide transition SnackBar</Button>
        <Snackbar
            anchorOrigin={{vertical:"top",horizontal:"top-center"}}
            open={open}
            TransitionComponent={Transition}
            autoHideDuration={6000}
            onClose={handleClose}
            message="basic SnackBar"
            action={action}
        />   
    </Box>
  )
}

export default SlideTransitionSnackBar

