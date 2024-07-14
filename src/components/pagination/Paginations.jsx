import { Box, Stack } from '@mui/material'
import React from 'react'
import BasicPagination from './BasicPagination'
import CustomPaginations from './CustomPaginations'

const Paginations = () => {
  return (
    <Box>
       <Stack direction={"row"} spacing={10}>
       <BasicPagination/>
       <CustomPaginations/>
       </Stack>
    </Box>
  )
}

export default Paginations