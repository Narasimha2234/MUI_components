import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
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
const BasicSpeedDail = () => {
  return (
    <Box >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16,right:16 }}
        icon={<SpeedDialIcon />}
      >
        {options.map((option) => (
          <SpeedDialAction
            key={option.name}
            icon={option.icon}
            tooltipTitle={option.name}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default BasicSpeedDail