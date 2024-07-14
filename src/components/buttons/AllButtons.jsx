import { Box} from '@mui/material'
import React from 'react'
import TextVariant from './TextVariant'
import ContainedVariant from './ContainedVariant'
import OutlinedVarient from './OutlinedVarient'
import Group from './Group'


const AllButtons = () => {
  return (
   <Box>
   
        <TextVariant></TextVariant>
        <ContainedVariant></ContainedVariant>
        <OutlinedVarient></OutlinedVarient>
        <Group></Group>
     
   </Box>
  )
}

export default AllButtons