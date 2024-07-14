import { Button, Popover, Typography } from '@mui/material';
import * as React from 'react';


export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>  Open Popover </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose} >
        <Typography sx={{ p: 2 }}>This is the poppover content</Typography>
      </Popover>
    </div>
  );
}
