import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

 function TextVariant() {
    console.log("button");
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant='h4' color={"primary"} textAlign={"center"}>Text varient</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text">Default</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" color="primary">Primary</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" color="secondary">Secondary</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" color="success">Success</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" color="error">Error</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" color="info">Info</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" color="warning">Warning</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" size="small">Small</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" size="medium">Medium</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" size="large">Large</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" disabled>Disabled</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" fullWidth>Full Width</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" startIcon={<DeleteIcon />}>Delete</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="text" endIcon={<SendIcon />}>Send</Button>
      </Grid>
    </Grid>
  </Box>
  );
}
export default TextVariant