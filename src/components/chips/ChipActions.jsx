import { Box, Chip, Stack, Typography } from "@mui/material"

const ChipActions=()=>{
    const handleClick=()=>{
        window.alert("clicked on chip")
    }
    return(
    <Box>
        <Typography variant='h6' mt={3} gutterBottom>clickable</Typography>
        <Stack direction={"row"} spacing={4} >
            <Chip label="click on me" color='secondary' onClick={handleClick}/>      
         </Stack>
    </Box>
)}
export default ChipActions