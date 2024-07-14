import { Box, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ToggleButtons = () => {
  return (
    <Box sx={{
        height:"90vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <Stack direction={"column"} spacing={5} >
        <ToggleBtn/>

        <ToggleButtonsMultiple/>

        <VerticalToggleButtons/>
    </Stack>
    </Box>
  )
}

export default ToggleButtons

const ToggleBtn=()=>{
    const [alignment,setAlignment]=useState("center")
    const handleAlignment=(event,newalignemnt)=>{
        
        setAlignment(newalignemnt)
    }
    return(
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified">
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
)}


const ToggleButtonsMultiple=()=> {
    const [formats, setFormats] = useState( ['bold', 'italic']);
  
    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };
  
    return (
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }

  const VerticalToggleButtons=()=> {
    const [view, setView] = React.useState('list');
  
    const handleChange = (event, nextView) => {
      setView(nextView);
    };
  
    return (
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="top" aria-label="list">top</ToggleButton>
        <ToggleButton value="middle" aria-label="module">middle</ToggleButton>
        <ToggleButton value="bottom" aria-label="quilt">bottom</ToggleButton>
      </ToggleButtonGroup>
    );
  }