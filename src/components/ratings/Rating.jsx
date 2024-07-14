import { Box, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const RatingComp = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }} 
    >
       <Stack container direction={"row"} spacing={5}>
            <Grid item xs={12} lg={4} >{rating}</Grid>
            <Grid item xs={12} lg={4}>{halfRating}</Grid>
       </Stack>
    </Box>
  )
}

export default RatingComp


const rating =(

    <Box>
        <Typography component="h2">Controlled</Typography>
            <Rating name="control" />
            <Typography component="legend">view</Typography>
            <Rating name="view" defaultValue={3} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" defaultValue={2} disabled />
            <Typography component="h2">No rating</Typography>
            <Rating name="no"  />
  </Box>
)

const halfRating =(

    <Box>
        <Typography component="legend">Controlled</Typography>
            <Rating name="control" precision={0.5} size='large'/>
            <Typography component="legend">view</Typography>
            <Rating name="view" defaultValue={3} precision={0.5} readOnly size='large'/>
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" defaultValue={2.5} precision={0.5} disabled size='large'/>
            <Typography component="legend" precision={0.5}>No rating</Typography>
            <Rating name="no"  size='large' precision={0.5}/>
  </Box>
)