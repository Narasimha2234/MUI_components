import {  Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardWithMedia = () => {
  return (
    <Card sx={{marginTop:"20px"}}>
        <CardHeader
         title="card Tittle"
         subheader="sub heading"
         avatar={
            <Avatar>N</Avatar>
         }
         action={
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
         }
        />
            
       <CardMedia
        component="img"
        height="194"
        width="194"
        image="https://cdn.pixabay.com/photo/2018/03/26/20/51/beach-3264058_960_720.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='body1'>
            Name
        </Typography>
        <Typography variant='subtittle1'>
            thanks welcome again
        </Typography>
      </CardContent>
        <CardActions>
            <IconButton>
            <FavoriteIcon/>
            </IconButton>
           
            <IconButton>
            <ShareIcon/>
            </IconButton>
            
        </CardActions>
    </Card>
  )
}

export default CardWithMedia