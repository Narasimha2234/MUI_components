import { Box, Pagination, Stack, Typography } from '@mui/material'
import React from 'react'

const BasicPagination = () => {
  return (
    <Box>
        <Typography variant='h5' gutterBottom>basic paginations</Typography>
        <Stack direction={"column"} spacing={5}>
        <Pagination count={7}/>
        <Pagination count={7} color='primary'/>
        <Pagination count={7} color='secondary' variant='text'/>
        <Pagination count={7} variant='outlined' color='primary'/>
        <Pagination count={7} color='secondary' shape='rounded' variant='text'/>
        <Pagination count={7} variant='outlined' shape='rounded' color='primary'/>
        <Pagination count={7} color='secondary' size='small' shape='rounded' variant='text'/>
        <Pagination count={7} variant='outlined' size='large' shape='rounded' color='primary'/>
    </Stack>
    </Box>
  )
}

export default BasicPagination