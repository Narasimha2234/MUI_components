import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

const ChipAdornments = () => {
  return (
    <Box mt={3}>
        <Typography variant='h6'>Chip Adornments</Typography>
        <Stack direction={"row"} spacing={4}>
                <Chip label="profile" avatar={<Avatar>P</Avatar>}/>
        </Stack>
        <Stack direction={"row"} spacing={4} mt={2}>
                <Chip size='medium' color='success' label="profile" avatar={<Avatar alt='profile' src='https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=2048x2048&w=is&k=20&c=yif473DFhN451o-tNC1tASFFoP5QTOYcqS26dhEbv6U='/>}/>
        </Stack>
    </Box>
  )
}

export default ChipAdornments