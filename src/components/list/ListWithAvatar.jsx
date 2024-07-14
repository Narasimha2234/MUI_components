import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const ListWithAvatar = () => {
  return (
    <Box>
        <Typography variant='h6'>List with Avatar</Typography>
        <List >
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccessAlarmIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="time" secondary=" loacl time "/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <DateRangeIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="date" secondary=" current date "/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PublicIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="country" secondary=" nation "/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LocationCityIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="city" secondary=" current city "/>
            </ListItem>
        </List>
    </Box>
  )
}

export default ListWithAvatar