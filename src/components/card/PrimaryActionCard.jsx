import {  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const PrimaryActionCard = () => {
  return (
    <Card sx={{marginTop:"20px",
        height:"350px",
        width:"300px"
    }}>
        <CardActionArea>
            <CardMedia
                height={"200"}
                
                component={"img"}
                src='https://cdn.pixabay.com/photo/2024/04/15/17/51/ai-generated-8698374_960_720.png'
                alt='image'
            />
            <CardContent>
                <Typography variant='h6' component={"div"}>Bird</Typography>
                <Typography variant='subtittle1'>this bird lives in india</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button>share</Button>
        </CardActions>

    </Card>
  )
}

export default PrimaryActionCard