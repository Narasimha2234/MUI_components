
import { Box, Checkbox, Chip, Divider, FormControl,  InputLabel,  ListItemText,  MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useState } from 'react'


const data=["react","mui","java","angular","python","spring","node"]

const MultipleSelectComp = () => {
    var [selectedValue,setSelectedValue]=useState([])
    const handleChange=(event)=>{
        console.log(event.target.value);
            setSelectedValue(event.target.value)
    }

  return (
    <Box mt={4} width={"250px"}>
        <Typography component={"div"} variant='h4' gutterBottom>MultiSelect</Typography>
       <FormControl fullWidth  >
            <InputLabel id="select"  >skills</InputLabel>
            <Select multiple value={selectedValue} labelId='select' 
            name='select' 
            onChange={handleChange}
            input={<OutlinedInput label="skill" />}
            >           
               {data.map((skill)=>{
                return(
                    <MenuItem key={skill} value={`${skill}`}>{skill}</MenuItem>
                )
               })}
            </Select>
        </FormControl>
        <Divider/>
             <MultiChecked/>
             <Divider/>
             <MultiCheckWithChip/>
    </Box>
  )
}

export default MultipleSelectComp

const MultiChecked = () => {
    var [selectedval,setSelected]=useState([])
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        console.log(value);
        setSelected(
          typeof value === 'string' ? value.split(',') : value,
        );
      };
   
  return (
    <Box mt={4} width={"250px"}>
       <FormControl fullWidth  >
            <InputLabel id="select"  >skills</InputLabel>
            <Select multiple 
            value={selectedval}
            renderValue={(selected) => selected.join(', ')}
            labelId='select' name='select'
             onChange={handleChange}
             input={<OutlinedInput label="skill" />}
             >           
               {data.map((skill)=>{
                return(
                    <MenuItem key={skill} value={`${skill}`}>
                         <Checkbox checked={selectedval.indexOf(skill) > -1} />
                         <ListItemText primary={skill} />
                    </MenuItem>
                )
               })}
            </Select>
        </FormControl>
    </Box>
  )
}

const MultiCheckWithChip = () => {
    var [selectedval,setSelected]=useState([])
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        console.log(value);
        setSelected(
          typeof value === 'string' ? value.split(',') : value,
        );
      };
   
  return (
    <Box mt={4} width={"250px"}>
       <FormControl fullWidth  >
            <InputLabel id="select"  >skills</InputLabel>
            <Select multiple 
            value={selectedval}
            renderValue={(selected) => {
                return(
                    <Box >
                        {selected.map((val)=>
                        <Chip sx={{marginLeft:"3px"}} value={val} label={val}></Chip>
                        )}
                        
                    </Box>
                )
            }}
            labelId='select' name='select'
             onChange={handleChange}
             input={<OutlinedInput label="skill" />}
             >           
               {data.map((skill)=>{
                return(
                    <MenuItem key={skill} value={`${skill}`}>
                         <Checkbox checked={selectedval.indexOf(skill) > -1} />
                         <ListItemText primary={skill} />
                    </MenuItem>
                )
               })}
            </Select>
        </FormControl>
    </Box>
  )
}



