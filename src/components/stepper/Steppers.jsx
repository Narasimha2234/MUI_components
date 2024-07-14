import { Box, Stack } from '@mui/material'
import React from 'react'
import BasicStepper from './BasicStepper'
import NonLinearStepper from './NonLinearStepper'
import ErrorStepper from './ErrorStepper'
import MobileDeviceStepper from './MobileStepper'


const Steppers = () => {
  return (
    <Box ml={20} mt={3}>
      <Stack direction={"row"} spacing={10}>
      <BasicStepper/>
      <NonLinearStepper/>
      </Stack>
      <Stack mt={10} direction={"row"} spacing={10}>
        <ErrorStepper/>
        <MobileDeviceStepper/>
        </Stack>
    </Box>
  )
}

export default Steppers