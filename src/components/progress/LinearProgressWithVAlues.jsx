import { Box,  LinearProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const LinearProgressWithValue = () => {
    const[progress,setProgress]=useState(0)
    useEffect(()=>{
        const timer=setInterval(()=>{
            setProgress((prev)=>(prev>=100?0:prev+20))
        },1000)
        
        return ()=>{clearInterval(timer)}
    },[])
  return (
    <Box mt={2} >
        <Box>
        <Typography gutterBottom>progress with values</Typography>
        <Stack direction={"column"} spacing={4}>
                <LinearProgress color='primary' variant='determinate' value={25}/>
                <LinearProgress color='secondary' variant='determinate' value={50}/>
                <LinearProgress color='warning' variant='determinate' value={75}/>
                <LinearProgress color='success'variant='determinate' value={progress}/>
        </Stack>
        </Box>
       </Box>
  )
}

export default LinearProgressWithValue