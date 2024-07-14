import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'

const AlignedList = () => {
  return (
    <Box sx={{width:"300px",backgroundColor:"lightgray"}}>
        <List subheader={
            <ListSubheader>Aligned list items</ListSubheader>
        }>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='image' src='https://media.istockphoto.com/id/172856683/photo/teenage-boy-using-laptop-and-doing-homework.jpg?s=2048x2048&w=is&k=20&c=xdeXz7sONQGSsTgO5p3hCAhXPdbRGwR9l8pjCqUFcoM='/>
                </ListItemAvatar>
                <ListItemText primary="profile" secondary="this is your profile"/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='image' src='https://media.istockphoto.com/id/172856683/photo/teenage-boy-using-laptop-and-doing-homework.jpg?s=2048x2048&w=is&k=20&c=xdeXz7sONQGSsTgO5p3hCAhXPdbRGwR9l8pjCqUFcoM='/>
                </ListItemAvatar>
                <ListItemText primary="profile" secondary="this is your profile"/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='image' src='https://media.istockphoto.com/id/172856683/photo/teenage-boy-using-laptop-and-doing-homework.jpg?s=2048x2048&w=is&k=20&c=xdeXz7sONQGSsTgO5p3hCAhXPdbRGwR9l8pjCqUFcoM='/>
                </ListItemAvatar>
                <ListItemText primary="profile" secondary="this is your profile"/>
            </ListItem>
        </List>
    </Box>
  )
}

export default AlignedList