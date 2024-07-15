import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';

const SideNav = ({show,handleShow}) => {
  return (
   <div >
     <Drawer open={show} onClose={handleShow}>
        <Box sx={{ width: 230 ,}} role="presentation" onClick={handleShow} >
          <List>
          <ListItem  component={Link} to={"/form"}>
                <ListItemButton>
                  <ListItemText  primary={"Form"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/"}>
                <ListItemButton>
                  <ListItemText  primary={"home"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/button"}>
                <ListItemButton>                
                  <ListItemText  primary={"Button"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/checkbox"}>
                <ListItemButton>                
                  <ListItemText  primary={"CheckBox"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/fab"}>
                <ListItemButton>                 
                  <ListItemText  primary={"FAB"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/radio"}>
                <ListItemButton>                
                  <ListItemText  primary={"Radio"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/rating"}>
                <ListItemButton>                
                  <ListItemText  primary={"Rating"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/select"}>
                <ListItemButton>
                  <ListItemText  primary={"select"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/sliders"}>
                <ListItemButton>                 
                  <ListItemText  primary={"sliders"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/switches"}>
                <ListItemButton>
                  <ListItemText  primary={"switches"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/textfield"}>
                <ListItemButton>
                  <ListItemText  primary={"textfield"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/togglebtn"}>
                <ListItemButton>
                  <ListItemText  primary={"ToggleButton"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/avatar"}>
                <ListItemButton>
                  <ListItemText  primary={"Avatars"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/badge"}>
                <ListItemButton>
                  <ListItemText  primary={"Badge"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/chip"}>
                <ListItemButton>
                  <ListItemText  primary={"Chip"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/list"}>
                <ListItemButton>
                  <ListItemText  primary={"List"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/tables"}>
                <ListItemButton>
                  <ListItemText  primary={"Tables"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/tooltips"}>
                <ListItemButton>
                  <ListItemText  primary={"ToolTip"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/typography"}>
                <ListItemButton>
                  <ListItemText  primary={"Typography"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/alert"}>
                <ListItemButton>
                  <ListItemText  primary={"Alert"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/backDrop"}>
                <ListItemButton>
                  <ListItemText  primary={"BackDrops"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/dialog"}>
                <ListItemButton>
                  <ListItemText  primary={"Dialog"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/progress"}>
                <ListItemButton>
                  <ListItemText  primary={"Progress"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/skeleton"}>
                <ListItemButton>
                  <ListItemText  primary={"Skeleton"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/snackbar"}>
                <ListItemButton>
                  <ListItemText  primary={"SnackBar"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/accordion"}>
                <ListItemButton>
                  <ListItemText  primary={"Accordion"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/card"}>
                <ListItemButton>
                  <ListItemText  primary={"Card"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/paper"}>
                <ListItemButton>
                  <ListItemText  primary={"Paper"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/bottom"}>
                <ListItemButton>
                  <ListItemText  primary={"Bottom Navigation"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/breadcrumbs"}>
                <ListItemButton>
                  <ListItemText  primary={"Breadcrumbs"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/menu"}>
                <ListItemButton>
                  <ListItemText  primary={"Menu"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/pagination"}>
                <ListItemButton>
                  <ListItemText  primary={"Pagination"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/speeddail"}>
                <ListItemButton>
                  <ListItemText  primary={"SpeedDail"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/stepper"}>
                <ListItemButton>
                  <ListItemText  primary={"Stepper"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/model"}>
                <ListItemButton>
                  <ListItemText  primary={"Model"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/poppover"}>
                <ListItemButton>
                  <ListItemText  primary={"Poppover"} />
                </ListItemButton>
              </ListItem>
              
          </List>
         </Box>
     </Drawer>
   </div>
  )
}

export default SideNav