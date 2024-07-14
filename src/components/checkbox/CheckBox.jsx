import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Stack } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const CheckBox = () => {
  return (
    <Box sx={{
        width:"70%",
        marginX:"auto",
        marginY:"30px"
    }}>
   <Grid container spacing={3}>
        <Grid item sx={12} sm={6} lg={4}> {hobbies}</Grid>
        <Grid item sx={12} sm={6} lg={4}> {Skills}</Grid>
        <Grid item sx={12} sm={6} lg={4}>{LabelPositions}</Grid>
        <Grid item sx={12} sm={6} lg={4}>{ColorAndSize}</Grid>
        <Grid item sx={12} sm={6} lg={4}>{Icons}</Grid>    
   </Grid>
     
  </Box>
  )
}

export default CheckBox

const hobbies=(
    <FormControl>
        <FormLabel component={"legend"}>hobbies</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="coding" />
            <FormControlLabel  control={<Checkbox />} label="playing" />
            <FormControlLabel  control={<Checkbox />} label="movies" />
        </FormGroup>
    </FormControl>
)

const Skills=(
    <FormControl component={"fieldset"}>
        <FormLabel component={"legend"}>Skills</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked  name='react' required/>} label="React" />
            <FormControlLabel  control={<Checkbox name='java' />} label="java" />
            <FormControlLabel  control={<Checkbox name='python'/>} label="python" />
            <FormControlLabel  control={<Checkbox disabled  name='php'/>} label="php" />
        </FormGroup>
        <FormHelperText>please select yoyr Skills</FormHelperText>
    </FormControl>
)

const LabelPositions=(
    <FormControl component={"fieldset"}>
        <FormLabel component={"legend"}>Diferent positions</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox    name='react'/>} label="React" labelPlacement="top"/>
            <FormControlLabel  control={<Checkbox name='java'/>} label="java" labelPlacement="left"/>
            <FormControlLabel  control={<Checkbox name='python'/>} label="python" labelPlacement="bottom"/>
        </FormGroup>
       
    </FormControl>
)

const ColorAndSize=(
    <FormControl component={"fieldset"}>
        <FormLabel component={"legend"}>Size and Color</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox    color='error' size='small'/>} label="Red"/>
            <FormControlLabel  control={<Checkbox  color='secondary' size="medium" />} label="voilet" />
            <FormControlLabel  control={<Checkbox  color='success' size='large'/>} label="Green" />
        </FormGroup>
       
    </FormControl>
)

const Icons=(
    <FormControl component={"fieldset"}>
    <FormLabel component={"legend"}>Icons</FormLabel>
    <FormGroup>
        <FormControlLabel control={<Checkbox    name='rate'  icon={<StarBorderIcon/>} checkedIcon={<StarRateIcon/>}/>} label="Rate"/>
        <FormControlLabel  control={<Checkbox name='save' icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>} label="save" />
        <FormControlLabel  control={<Checkbox name='like' icon={<ThumbUpOffAltIcon/>} checkedIcon={<ThumbUpAltIcon/>}/>} label="like" />
    </FormGroup>
   
</FormControl>
)