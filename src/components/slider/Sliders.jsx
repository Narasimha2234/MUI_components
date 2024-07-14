import { Box, Divider, Grid, Slider, Stack, Typography } from '@mui/material'
import React from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Sliders = () => {
  return (
   <Box sx={{
    height:"70vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
   }}>
   
      <Stack direction={"row"} spacing={10}>
       

        {defaultSlide}

        {stepper}

        {volumeSlider}

        {verticalSlide}
      </Stack>
   </Box>
  )
}

export default Sliders



const defaultSlide=(
    <Box>
    <Typography>Default Sliders</Typography>
    <Stack width={"200px"} direction={"column"} spacing={3} >
        <Slider size='small'/>
        <Slider size='medium' defaultValue={35} valueLabelDisplay='auto'/>
    </Stack>
    </Box>
)

const stepper=(
    <Box width={"200px"} mb={3}>
         <Typography gutterBottom mb={6}>Stepper Slider</Typography>
         <Slider  size='medium' valueLabelDisplay='on' step={5} marks />

         <Slider step={30} marks defaultValue={20} disabled />
    </Box>
)

const volumeSlider=(
    <Box>
         <Typography  gutterBottom>Volume Slider</Typography>
    <Grid container direction={"row"} spacing={3}>
        
        <Grid item><VolumeUpIcon/></Grid>
        <Grid item width={"250px"}><Slider valueLabelDisplay='auto'/></Grid>
    </Grid>
    </Box>
)
const verticalSlide=(
    <Box height={"200px"} mb={3}>
        <Typography gutterBottom>Vertical Slider</Typography>
         <Slider size='medium' defaultValue={35} valueLabelDisplay='auto' orientation='vertical'/>
    </Box>
)