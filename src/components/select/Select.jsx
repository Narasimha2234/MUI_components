import { Box, Divider } from '@mui/material'
import React from 'react'
import BasicSelect from './BasicSelect'
import SizeAndWidth from './SizeAndWidth'
import MultipleSelectComp from './MultipleSelectComp'

const Select = () => {
  return (
    <Box ml={7} mt={2}> 
        <BasicSelect />
        <Divider></Divider>
        <SizeAndWidth/>
        <Divider></Divider>
        <MultipleSelectComp/>
    </Box>
  )
}

export default Select