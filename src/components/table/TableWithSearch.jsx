import { Box, InputAdornment, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const dummyData = [
  { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com', city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com', city: 'Los Angeles' },
  { id: 3, name: 'Michael Johnson', age: 35, email: 'michael.johnson@example.com', city: 'Chicago' },
  { id: 4, name: 'Emily Davis', age: 28, email: 'emily.davis@example.com', city: 'Houston' },
  { id: 5, name: 'David Wilson', age: 40, email: 'david.wilson@example.com', city: 'Phoenix' }
];

const TableWithSearch = () => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);

    const filteredData = dummyData.filter(data =>
      (data.name && data.name.toLowerCase().includes(searchValue)) ||
      (data.age && data.age.toString().includes(searchValue)) ||
      (data.email && data.email.toLowerCase().includes(searchValue)) ||
      (data.city && data.city.toLowerCase().includes(searchValue))
    );

    setFilterData(filteredData);
  };

  return (
    <Box mt={5}>
        <Typography variant='h6'>table with Search</Typography>
      <Stack width={"70%"} ml={47} mb={2}>
        <TextField
          placeholder='search here'
          variant="outlined"
          onChange={handleSearch}
        />
      </Stack>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(filterData.length > 0 ? filterData : dummyData).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableWithSearch;
