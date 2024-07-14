import { Box, Paper, Stack } from '@mui/material'
import React from 'react'

const Papers = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"90%",
        margin:"auto",
        display:"flex",
        justifyItems:"center",
        alignItems:"center"    }} >
           
           <Box>
           {paper}

           {paperVariation}
           </Box>
    </Box>
  )
}

export default Papers

const paper=(
    <Stack direction={"row"} spacing={10} >
       
        <Paper   sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}> simple paper </Paper>
        <Paper elevation={5}  sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}> elevation 5</Paper>
        <Paper elevation={10}  sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}> elevation 10</Paper>
        <Paper elevation={15}  sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}>elevation 15 </Paper>
       
    </Stack>

)

const paperVariation=(
    <Stack direction={"row"} spacing={10} mt={5}>
       
        <Paper variant='elevation' sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}> elevation varient</Paper>
        <Paper variant='outlined'  sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}>  outlined varient</Paper>
        <Paper variant='elevation'  sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}> elevation varient</Paper>
        <Paper variant='outlined'  sx={{height:"200px",width:"200px" , display:"flex",justifyContent:"center",alignItems:"center"}}> outlined varient</Paper>
       
    </Stack>
)