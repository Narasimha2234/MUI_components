import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const OpenAndClose=()=> {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' ,marginTop:"20px"}}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              onClick={() => {
                setOpen(false);
              }} >
              <CloseIcon  />
            </IconButton>
          } >
          Click the close icon 
        </Alert>
      </Collapse>
      <Button
        disabled={open} 
        onClick={() => {
          setOpen(true);
        }}>
        Open
      </Button>
    </Box>
  );
}
export default OpenAndClose
