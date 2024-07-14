import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CircularProgressValue = () => {
    const[progress,setProgress]=useState(0)
    useEffect(()=>{
        const timer=setInterval(()=>{
            setProgress((prev)=>(prev>=100?0:prev+20))
        },1000)
        
        return ()=>{clearInterval(timer)}
    },[])
  return (
    <Box mt={2} display={"flex"} width={"100vw"}  justifyContent={"center"}>
        <Box>
        <Typography gutterBottom>progress with values</Typography>
        <Stack direction={"row"} spacing={4}>
                <CircularProgress color='primary' variant='determinate' value={25}/>
                <CircularProgress color='secondary' variant='determinate' value={50}/>
                <CircularProgress color='warning' variant='determinate' value={75}/>
                <CircularProgress color='error'variant='determinate' value={progress}/>
        </Stack>
        </Box>
       </Box>
  )
}

export default CircularProgressValue