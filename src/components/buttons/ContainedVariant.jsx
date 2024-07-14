
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const ContainedVariant = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
    <Typography variant="h4" color="primary" textAlign="center">
      Contained Variant
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained">Default</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" color="primary">Primary</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" color="secondary">Secondary</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" color="success">Success</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" color="error">Error</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" color="info">Info</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" color="warning">Warning</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" size="small">Small</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" size="medium">Medium</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" size="large">Large</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" disabled>Disabled</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" fullWidth>Full Width</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
      </Grid>
    </Grid>
  </Box>
  )
}

export default ContainedVariant