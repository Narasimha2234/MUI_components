import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const BasicModal=()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Click Me</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={ {position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,}}>
          <Typography variant="h6" >this is model</Typography>
          <Typography mt={2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo soluta, possimus expedita amet harum doloribus modi ea unde a. Dolore? </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
export default BasicModal
