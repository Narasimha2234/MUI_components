import React from 'react'
import {  Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';

const BasicCard = () => {
  return (
    <Card sx={{height:"200px",width:"260px"}}>
        <CardContent >
            <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Itaque aliquam architecto quisquam neque tenetur animi, 
            </Typography>
        </CardContent>
        <CardActionArea>
            <Button>
                more
            </Button>
        </CardActionArea>
    </Card>
  )
}

export default BasicCard