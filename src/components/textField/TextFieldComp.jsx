import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import Basic from './Basic'
import WithProps from './WithProps'
import MultiLineAndIcons from './MultiLineAndIcons'

const TextFieldComp = () => {
  return (
    <Box ml={4}>
    <Stack direction={"column"} spacing={4}>
        <Basic/>
        <Divider/>
        <WithProps/>
        <Divider/>
        <MultiLineAndIcons/>
    </Stack>
    </Box>
  )
}

export default TextFieldComp