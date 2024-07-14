import { Box, Stack} from '@mui/material'
import React from 'react'
import BasicCard from './BasicCard'
import CardWithMedia from './CardWithMedia'
import PrimaryActionCard from './PrimaryActionCard'

const Cards = () => {
  return (
    <Box ml={30} mt={20}>
       
      <Stack direction={"row"} spacing={10}>
          <BasicCard/>

         <CardWithMedia/>
         <PrimaryActionCard/>
      </Stack>
      
       
    </Box>
  )
}

export default Cards
