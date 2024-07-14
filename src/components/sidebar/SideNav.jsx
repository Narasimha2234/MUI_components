import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from 'react-router-dom';

const SideNav = ({show,handleShow}) => {
  return (
   <div >
     <Drawer open={show} onClose={handleShow}>
        <Box sx={{ width: 230 ,}} role="presentation" onClick={handleShow} >
          <List>
           
              <ListItem  component={Link} to={"/"}>
                <ListItemButton>
                  <ListItemIcon>
                   <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"home"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/button"}>
                <ListItemButton>
                  <ListItemIcon>
                   <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Button"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/checkbox"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"CheckBox"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/fab"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"FAB"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/radio"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Radio"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/rating"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Rating"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/select"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"select"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/sliders"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"sliders"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/switches"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"switches"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/textfield"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"textfield"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/togglebtn"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"ToggleButton"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/avatar"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Avatars"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/badge"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Badge"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/chip"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Chip"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/list"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"List"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/tables"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Tables"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/tooltips"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"ToolTip"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/typography"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Typography"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/alert"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Alert"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/backDrop"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"BackDrops"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/dialog"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Dialog"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/progress"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Progress"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/skeleton"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Skeleton"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/snackbar"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"SnackBar"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/accordion"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Accordion"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/card"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Card"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/paper"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Paper"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/bottom"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Bottom Navigation"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/breadcrumbs"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Breadcrumbs"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/menu"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Menu"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/pagination"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Pagination"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/speeddail"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"SpeedDail"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/stepper"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Stepper"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/model"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Model"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/poppover"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Poppover"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/form"}>
                <ListItemButton>
                  <ListItemIcon>
                   <CheckBoxIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={"Form"} />
                </ListItemButton>
              </ListItem>
          </List>
         </Box>
     </Drawer>
   </div>
  )
}

export default SideNav