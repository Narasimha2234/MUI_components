import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

const BasicSkeletons = () => {
  return (
    <Box>
        {basicSkeleton}
    </Box>
  )
}

export default BasicSkeletons

const basicSkeleton=(
    <Stack width={200} spacing={2}>
        <Skeleton variant='text' sx={{fontSize:"30px"}}/>
        <Skeleton variant='circular' width={50} height={50}  animation={"pulse"}/>
        <Skeleton variant='rectangular' width={200} height={100} animation={"wave"}/>
        <Skeleton variant='rounded' width={200} height={50} animation={false}/>
    </Stack>
)