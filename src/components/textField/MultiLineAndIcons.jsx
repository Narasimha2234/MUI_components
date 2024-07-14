import { AccountCircle } from '@mui/icons-material'
import { Box, FormControl, FormLabel, Input, InputAdornment, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const MultiLineAndIcons = () => {
  return (
    <>
    <Typography>MultiLine </Typography>
    <Stack direction={"column"} spacing={3}>
          <Stack>  {multiLine} </Stack>
         
          <Stack>  {Adornments} </Stack>
    </Stack>
    </>
  )
}

export default MultiLineAndIcons


const multiLine=(
    <Stack spacing={3}  direction={"row"}>
        <TextField multiline label="multiLine" variant='standard' required maxRows={3}/>
        <TextField multiline label="multiLine" variant='filled'  rows={3}/>
        <TextField multiline label="multiLine" variant='outlined' maxRows={3}/>
    </Stack>
)

const Adornments=(
    <Box  mb={5}>
        <Typography gutterBottom>Adornments</Typography>
      <FormControl variant="standard" sx={{marginRight:"10px"}}>
        <InputLabel >
          adornment
        </InputLabel>
        <Input 
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        label="name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        sx={{marginRight:"10px"}}
      />
        <FormControl>
            <InputLabel>email</InputLabel>
            <Input
                startAdornment={
                    <InputAdornment position='start'>@</InputAdornment>
                }
                sx={{marginRight:"10px"}}
                color='secondary'
            />
        </FormControl>

        <TextField
        label="name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              Kg
            </InputAdornment>
          ),
        }}
        variant="filled"
        size='small'
        color='primary'
        sx={{marginRight:"10px"}}
      />

    </Box>
)