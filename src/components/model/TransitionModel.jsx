import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TransitionsModal=()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h2"> Text in a modal</Typography>
            <Typography  sx={{ mt: 2 }}> Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
export default TransitionsModal
