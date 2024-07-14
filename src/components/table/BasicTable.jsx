import {Box, IconButton, ListItem, ListItemText, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const BasicTable = () => {
    const [densePadding,setPadding]=useState(false)
    const changeHandler=()=>{
        setPadding((prev)=>!prev)
    }

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
  return (
   <Box>
    <Typography variant='h6'>Basic Table</Typography>
    <ListItem>
        
        <Switch value={densePadding} onChange={changeHandler}/>
        <ListItemText primary="dense padding"/>
    </ListItem>
        <TableContainer component={Paper} sx={{
    width:"700px"
   }}>
        <Table size={densePadding===false?"medium":"small"}>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>calories</TableCell>
                    <TableCell>fat</TableCell>
                    <TableCell>carbs</TableCell>
                    <TableCell>protein</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((data)=>{
                return(
                    <TableRow>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.calories}</TableCell>
                        <TableCell>{data.fat}</TableCell>
                        <TableCell>{data.carbs}</TableCell>
                        <TableCell>{data.protein}</TableCell>
                     </TableRow>
                )
               })}
            </TableBody>
        </Table>
   </TableContainer>
   </Box>
  )
}

export default BasicTable