import { Box, Fab, Stack } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';
import BuildIcon from '@mui/icons-material/Build';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const FAB = () => {
  return (
   <Box sx={{
    height:"60vh",
    width:"100%",
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    justifyContent:"center",
    alignItems:"center"
   }}>
       <Stack direction={"row"} spacing={5}>
               <Fab >  <AddIcon/></Fab>
                <Fab>  <EditIcon/></Fab>
                <Fab>  <FavoriteIcon/></Fab>
                <Fab variant='extended' >  <NavigationIcon/>navigate to</Fab>
       </Stack>
       <Stack direction={"row"} spacing={5}>
               <Fab  color='primary'>  <AddShoppingCartIcon/></Fab>
                <Fab color='secondary'>  <BluetoothSearchingIcon/></Fab>
                <Fab color='error'>  <BuildIcon/></Fab>
                <Fab variant='extended' >  <ColorLensIcon/></Fab>
       </Stack>
   </Box>
  )
}

export default FAB