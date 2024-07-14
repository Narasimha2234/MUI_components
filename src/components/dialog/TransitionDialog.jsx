import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';

const TransitionDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            <Button onClick={handleOpen} variant='text'>Click to open transition dialog</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <DialogTitle>
                    <Typography>hii welcome</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tempora, recusandae! Minima vel porro nobis. Iure quasi voluptatum fugit maiores praesentium!
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default TransitionDialog;

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction='up' ref={ref} {...props} />;
});