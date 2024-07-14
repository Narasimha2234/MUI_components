import { Backdrop, Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const options = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
const BackDropSpeedDail = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box >
        <Backdrop open={open}/>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', left:16 ,top:80}}
        direction='down'
        icon={<SpeedDialIcon />}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {options.map((option) => (
          <SpeedDialAction
            key={option.name}
            icon={option.icon}
            tooltipTitle={option.name}
            onClick={handleClose}
            tooltipOpen
            tooltipPlacement='right'
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default BackDropSpeedDail