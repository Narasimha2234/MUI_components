import * as React from 'react';
import { Box, Popover, Typography } from '@mui/material';

const MouseEventPopover=()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Typography
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
                             Hover on me </Typography>
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>move away the cursor to close</Typography>
      </Popover>
    </Box>
  );
}
export default MouseEventPopover