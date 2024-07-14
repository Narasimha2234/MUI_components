import { Box, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Stack, Switch, Typography } from '@mui/material'
import React from 'react'

const Switches = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"90%",
        margin:"auto",
        display:"flex",
        justifyItems:"center",
        alignItems:"center"    }}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={4}>{defaultSwitch}</Grid>
            <Grid item xs={12} sm={6} lg={4}> {SwitchWithLAbel}</Grid>
            <Grid item xs={12} sm={6} lg={4}>{SizeAndColor}</Grid>
            <Grid item xs={12} sm={6} lg={4}>{SwitchGroup}</Grid>
            <Grid item xs={12} sm={6} lg={4}>{positions}</Grid>
        </Grid>
    </Box>
  )
}

export default Switches


const defaultSwitch=(
   <Box>
    <Typography variant='h5'>default switch</Typography>
     <Stack direction={"column"} spacing={3}>
        <Switch />
        <Switch defaultChecked/>
        <Switch disabled defaultChecked/>
    </Stack>
   </Box>
)

const SwitchWithLAbel=(
    <Box>
     <Typography variant='h5'>Labelled switch</Typography>
      <Stack direction={"column"} spacing={3}>
        <FormControlLabel control={<Switch/>} label={"switch"}/>
        <FormControlLabel control={<Switch defaultChecked/>}  label={"switch"}/>
        <FormControlLabel control={<Switch disabled/>} label={"switch"} />
     </Stack>
    </Box>
 )

 const SizeAndColor=(
    <Box>
     <Typography variant='h5'>size and color </Typography>
      <Stack direction={"column"} spacing={3}>
        <FormControlLabel control={<Switch color='secondary' />} label={"switch"} />
        <FormControlLabel control={<Switch defaultChecked size='small' color='error'/>}  label={"switch"}/>
        <FormControlLabel control={<Switch color='warning'/>} label={"switch"} />
     </Stack>
    </Box>
 )


 const SwitchGroup=(
    <FormControl>
        <FormLabel >group switch</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Switch  name='react'/>} label={"react"} />
            <FormControlLabel control={<Switch  name='jav'/>} label={"java"} />
            <FormControlLabel control={<Switch defaultChecked name='mui'/>} label={"mui"} />
        </FormGroup>
        <FormHelperText>select switch</FormHelperText>
    </FormControl>
 )

 const positions=(
    <FormControl>
        <FormLabel >label positions</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Switch  name='start' />} label={"start"} labelPlacement='start'/>
            <FormControlLabel control={<Switch  name='top'/>} label={"top"} labelPlacement='top'/>
            <FormControlLabel control={<Switch defaultChecked name='bottom'/>} label={"bottom"}  labelPlacement='bottom'/>
        </FormGroup>
    </FormControl>
 )