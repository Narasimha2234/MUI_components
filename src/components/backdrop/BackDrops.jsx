import { Backdrop, Box, Button, CircularProgress} from '@mui/material'
import React, { useState } from 'react'

const BackDrops = () => {
    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <Box  sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <Button onClick={handleOpen} color='primary'>click me</Button>
        <Backdrop open={open} onClick={handleClose}>
            <CircularProgress/>
        </Backdrop>
    </Box>
    
  )
}

export default BackDrops