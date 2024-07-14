import { Box, Button, Modal } from '@mui/material';

import * as React from 'react';


const style = {
  position: 'absolute',
  top: '40%',
  left: '40%',
  width: 400,
  bgcolor: 'background.paper',
  pt: 2,
  px: 4,
  pb: 3,
};
const NestedModal=()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 >Parent Model</h2>
          <p >
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, fugit?
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
export default NestedModal

const ChildModal=()=> {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Box>
        <Button onClick={handleOpen}>Open Child </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 >Text in a child modal</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child</Button>
          </Box>
        </Modal>
      </Box>
    );
  }
