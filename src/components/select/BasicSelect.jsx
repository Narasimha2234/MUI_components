import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'

const BasicSelect = () => {
  return (
    <Box  mb={3} >
        {basic}
        
       <Stack direction={"row"} spacing={3}>
       {filled}
       {outlined}
       {standard}
       </Stack>
    </Box>
  )
}

export default BasicSelect

const basic=(
    <Box width={"200px"} mb={3}>
    <FormControl fullWidth >
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={22}>22</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
    </FormControl>
  </Box>
)

const standard=(
    <Box width={"200px"} mb={3}>
    <FormControl fullWidth  variant='standard'>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={22}>22</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
    </FormControl>
  </Box>
)
const outlined=(
    <Box width={"200px"} mb={3}>
    <FormControl fullWidth  variant='outlined'>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={22}>22</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
    </FormControl>
  </Box>
)
const filled=(
    <Box width={"200px"} mb={3}>
    <FormControl fullWidth  variant='filled'>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={22}>22</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
    </FormControl>
  </Box>
)