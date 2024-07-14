import {  Stack } from '@mui/material'
import React from 'react'
import SimpleNavigation from './SimpleNavigation'
import NavigationWithoutLAbel from './NavigationWithoutLabel'

const BottomNavigations = () => {
  return (
    <Stack sx={{
      height:"70vh",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
  }} 
  direction={"column" }spacing={20}>
        <SimpleNavigation/>
        <NavigationWithoutLAbel/>

    </Stack>
  )
}

export default BottomNavigations

