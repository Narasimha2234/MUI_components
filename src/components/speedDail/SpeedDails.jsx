import { Box} from '@mui/material'
import React from 'react'
import BasicSpeedDail from './BasicSpeedDail'
import ControlledSpeedDial from './ControlledSpeedDail'
import BackDropSpeedDail from './BackDropSpeedDail'

const SpeedDails = () => {
  return (
    <Box>
     
       <BasicSpeedDail/>
       <ControlledSpeedDial/>
       <BackDropSpeedDail/>
      
    </Box>
  )
}

export default SpeedDails