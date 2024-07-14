import React from 'react';
import { Box, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack } from '@mui/material';

const RadioComp = () => {
  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
      <Box component={"div"}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          {radio}
        </Grid>
      </Grid>
      <Divider></Divider>
      <Stack mt={5}>
        {radioColumn}
        <Divider></Divider>
        {position}
      </Stack>
      </Box>
    </Box>
  );
};

export default RadioComp;

const radio = (
  <>
    <FormLabel component="legend">Gender</FormLabel>
    <RadioGroup name="gender">
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </>
);

const radioColumn = (
  <FormControl>
    <FormLabel color='primary' component="legend">state</FormLabel>
    <RadioGroup name="state" row>
      <FormControlLabel value="AP" control={<Radio color='secondary' />} label="AP" />
      <FormControlLabel value="TS" control={<Radio size='large'/>} label="TS" />
      <FormControlLabel value="TN" control={<Radio />} label="TN" />
    </RadioGroup>
  </FormControl>
);

const position = (
    <FormControl>
      <FormLabel color='primary' component="legend">position</FormLabel>
      <RadioGroup name="state" row>
        <FormControlLabel value="left" control={<Radio color='secondary' />} labelPlacement='left' label="left" />
        <FormControlLabel value="top" control={<Radio disabled/>} labelPlacement='top' label="top" />
        <FormControlLabel value="down" control={<Radio />} label="down" labelPlacement='down' />
      </RadioGroup>
    </FormControl>
  );
