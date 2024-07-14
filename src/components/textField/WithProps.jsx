import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const WithProps = () => {
  return (
    <Box >
        <Stack direction={"column"} spacing={5}>
        {textFieldWithProps}

        {ErrorTextField}
    </Stack>
    </Box>
  )
}

export default WithProps

const textFieldWithProps=(
    <>
    <Typography variant='h5' gutterBottom> textField with props</Typography>
    <Stack direction={"row"} spacing={5}>
       <Stack direction={"column"} spacing={4}>
       <TextField label={"name"}  variant='standard' defaultValue={"narasimha"} />
        <TextField label={"email"} variant='outlined' type='email' required/>
        <TextField label={"password"} variant='filled' type='password'/>
        <TextField label={"search"} variant='outlined' type='search'/>
       </Stack>
        <Stack direction={"column"} spacing={4}>
        <TextField label={"state"} variant='outlined' type='text' defaultValue={"andhra pradesh"} InputProps={{readOnly:true}}/>
        <TextField label={"city"} variant='outlined' type='text' autoComplete='bhimavaram'/>
        <TextField label={"country"} variant='outlined' type='text' defaultValue={"india"} disabled/>
        <TextField label={"pin code"} variant='outlined' type='number' defaultValue={"india"} helperText="enter pin code"/>
        </Stack>
    </Stack>
    </>
)

const ErrorTextField=(
    <>
        <Typography variant='h5' gutterBottom>errors</Typography>
        <Stack direction={"column"} spacing={4}>
    <TextField label={"name"}  variant='standard' defaultValue={"narasimha"} error helperText="invalid name"/>
     <TextField label={"email"} variant='outlined' type='email' required error helperText="email required"/>
     <TextField label={"password"} variant='filled' type='password' error helperText="enter password"/>
     <TextField label={"search"} variant='outlined' type='search' error helperText="search anything"/>
    </Stack>
    </>
)