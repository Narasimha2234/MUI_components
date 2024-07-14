import { Box } from '@mui/material'
import React from 'react'
import BasicBreadCrumbs from './BasicBreadCrumbs'

const BreadCrumbs = () => {
  return (
  <Box sx={{
    height:"70vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}}>
        <BasicBreadCrumbs/>
  </Box>
  )
}

export default BreadCrumbs