import { Box, Stack } from '@mui/material'
import React from 'react'
import BasicMenu from './BasicMenu'
import SelectedMenu from './SelectedMenu'
import ProfileMenu from './ProfileMenu'
import OptionsMenu from './OptionsMenu'
import CustomeHeightMenu from './CustomeHeightMenu';

const MenuBlocks = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <Box>
       <Stack direction={"row"} spacing={10}>
       <BasicMenu/>
       <SelectedMenu/>
       </Stack>
       <Stack direction={"row"} spacing={17}>
        <ProfileMenu/>

        <OptionsMenu/>
        </Stack>
        <CustomeHeightMenu/>
        </Box>
    </Box>
  )
}

export default MenuBlocks