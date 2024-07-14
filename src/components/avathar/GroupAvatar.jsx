import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'

const GroupAvatar = () => {
  return (
    <Box>{group}
    
    {Maxgroup}

    {varient}
    </Box>
  )
}

export default GroupAvatar

const group=(
<Stack direction='row' spacing={1} mt={3}>
<AvatarGroup >
  <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
  <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
  <Avatar
    src='https://randomuser.me/api/portraits/women/79.jpg'
    alt='name'
  />
  <Avatar
    src='https://randomuser.me/api/portraits/men/51.jpg'
    alt='name'
  />
</AvatarGroup>
</Stack>
)

const Maxgroup=(
    <Stack direction='row' spacing={1} mt={3} >
    <AvatarGroup max={2}>
      <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
      <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
      <Avatar
        src='https://randomuser.me/api/portraits/women/79.jpg'
        alt='name'
      />
      <Avatar
        src='https://randomuser.me/api/portraits/men/51.jpg'
        alt='name'
      />
    </AvatarGroup>
    </Stack>
    )

    const varient=(
        <Stack direction={"row"} spacing={4} mt={5}>
            <Avatar variant='rounded'>A</Avatar>
            <Avatar variant='square'>B</Avatar>
        </Stack>
    )