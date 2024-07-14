import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Fade, Slide, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const BasicAccordian = () => {
   
 

  const accordion=(
    <Accordion >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            <Typography variant='h6'>Basic Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsam eos unde dolor quos aliquam quaerat nihil voluptas itaque architecto deserunt?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, alias?
            </Typography>
        </AccordionDetails>
    </Accordion>
)

  const accordionWithActions=(
    <Accordion >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            <Typography variant='h6'>Accordion With Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsam eos unde dolor quos aliquam quaerat nihil voluptas itaque architecto deserunt?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, alias?
            </Typography>
        </AccordionDetails>
        <AccordionActions>
            <Button >close</Button>
            <Button>open</Button>
        </AccordionActions>
    </Accordion>
)

const defaultExpandAccordion=(
    <Accordion  defaultExpanded>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon/>}
        >
            <Typography variant='h6'>default open Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsam eos unde dolor quos aliquam quaerat nihil voluptas itaque architecto deserunt?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, alias?
            </Typography>
        </AccordionDetails>
        <AccordionActions>
            <Button >close</Button>
            <Button>open</Button>
        </AccordionActions>
    </Accordion>
)
const disabled=(
    <Accordion   disabled>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon/>}
        >
            <Typography variant='h6'>Disabled</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsam eos unde dolor quos aliquam quaerat nihil voluptas itaque architecto deserunt?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, alias?
            </Typography>
        </AccordionDetails>
        <AccordionActions>
            <Button >close</Button>
            <Button>open</Button>
        </AccordionActions>
    </Accordion>
)

return (
    <Box width={"60%"}>
       {accordion}

       {accordionWithActions}

       {defaultExpandAccordion}

       {disabled}
           </Box>
  )
}

export default BasicAccordian



