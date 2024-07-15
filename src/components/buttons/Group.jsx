import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material'
import React from 'react'

const Group = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
    <Typography variant="h4" color="primary" textAlign="center">
      Button Groups
    </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
             </Grid>
             <Grid item xs={12} md={6} lg={4}>
                <ButtonGroup variant="text" aria-label="Basic button group" orientation='vertical' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
             </Grid>
             <Grid item xs={12} md={6} lg={4}>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
             </Grid>

        </Grid>
    </Box>
  )
}

export default Group