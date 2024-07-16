import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'

import React, { useState } from 'react'

const BasicDialog = () => {
    const[open,setOpen]=useState(false)
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
  return (
    <Box >
        <Button onClick={handleOpen} variant='contained'>Click to open basic dialog</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <Typography>hii welcome</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempora, recusandae! Minima vel porro nobis. Iure quasi voluptatum fugit maiores praesentium !</Typography>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose}>open</Button>
                    <Button onClick={handleClose}>close</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </Box>
  )
}

export default BasicDialog