import { Box, Button, IconButton, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon  from '@mui/icons-material/Close';


const BasicSnackBar = () => {
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
        <Button onClick={handleOpen}>Open SnacBar</Button>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="basic SnackBar"
            action={action}
        />   
    </Box>
  )
}

export default BasicSnackBar

