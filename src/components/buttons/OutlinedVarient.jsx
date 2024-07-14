import { Box, Button, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

const OutlinedVarient = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Typography variant="h4" color="primary" textAlign="center">
            Outlined Variant
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined">Default</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" color="primary">Primary</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" color="secondary">Secondary</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" color="success">Success</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" color="error">Error</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" color="info">Info</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" color="warning">Warning</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" size="small">Small</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" size="medium">Medium</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" size="large">Large</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" disabled>Disabled</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" fullWidth>Full Width</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button variant="outlined" endIcon={<SendIcon />}>Send</Button>
            </Grid>
          </Grid>
        </Box>
      );
}

export default OutlinedVarient