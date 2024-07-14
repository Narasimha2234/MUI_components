import { Box, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'

const SizeAndWidth = () => {
  return (
    <Box mt={4} mb={2}>
        <Typography mb={3}>Size & Width</Typography>
        <Stack direction={"row"} spacing={3}>
            
            {small}

            {medium}

            {AutoWidth}
        </Stack>
    </Box>
  )
}

export default SizeAndWidth

const small=(
   <Box width={"200px"}>
     <FormControl size='small' fullWidth>
        <InputLabel>small</InputLabel>
        <Select label="size" >
            <MenuItem value="home">home</MenuItem>
            <MenuItem value="about">about</MenuItem>
            <MenuItem value="contact">contact</MenuItem>
        </Select>
    </FormControl>
   </Box>
)

const medium=(
    <Box width={"200px"}>
      <FormControl size='medium' fullWidth>
         <InputLabel>small</InputLabel>
         <Select label="size" >
             <MenuItem value="home">home</MenuItem>
             <MenuItem value="about">about</MenuItem>
             <MenuItem value="contact">contact</MenuItem>
         </Select>
     </FormControl>
    </Box>
 )

 const AutoWidth=(
    <Box width={"200px"}>
    <FormControl  AutoWidth>
       <InputLabel>Width</InputLabel>
       <Select label="size" >
           <MenuItem value="narasimha">narasimha</MenuItem>
           <MenuItem value="ramesh">ramesh</MenuItem>
           <MenuItem value="jagadish">jagadish</MenuItem>
           <MenuItem value="narasimha Swamy">narasimha Swamy</MenuItem>
       </Select>
   </FormControl>
  </Box>
 )

 