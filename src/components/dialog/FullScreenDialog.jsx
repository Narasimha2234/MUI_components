import { AppBar, Box, Button, Dialog, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const FullScreenDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Box>
        <Button onClick={handleOpen}>open FullScreen Dialog</Button>
        <Dialog open={open}
        fullScreen
        onClose={handleClose}
        >
                <AppBar>
                    <Toolbar>
                        <Typography flexGrow={1}>full Screen Dialog</Typography>
                        <IconButton onClick={handleClose} >
                        <CloseIcon />
                    </IconButton>
                    </Toolbar>
                    
                </AppBar>
        </Dialog>
    </Box>
  )
}

export default FullScreenDialog