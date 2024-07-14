import { Avatar, Box, Stack } from '@mui/material'
import { deepOrange, deepPurple} from '@mui/material/colors'
import React from 'react'

const BasicAvatar = () => {
  return (
    <Box>
        {simpleAvatar}

        {imageAvatar}
    </Box>
  )
}

export default BasicAvatar

const simpleAvatar=(
    <Stack direction={"row"} spacing={3} mt={3}>
        <Avatar sx={{bgcolor: deepOrange[200]}} >N</Avatar>
        <Avatar sx={{bgcolor: deepPurple[200]}}>R</Avatar>
        <Avatar sx={{bgcolor: deepOrange[200]}}>K</Avatar>
    </Stack>
)

const imageAvatar=(
    <Stack direction={"row"} spacing={3} mt={3}>
        <Avatar sx={{bgcolor: deepOrange[200]}} src='https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_960_720.jpg' alt='profile'/>
        <Avatar sx={{bgcolor: deepPurple[200]}} src='https://cdn.pixabay.com/photo/2020/04/14/11/21/fox-5042242_960_720.jpg' alt='profile'/>
        <Avatar sx={{bgcolor: deepOrange[200]}} src='https://cdn.pixabay.com/photo/2022/02/16/18/10/fox-7017260_960_720.jpg' alt='profile'/>
    </Stack>
)