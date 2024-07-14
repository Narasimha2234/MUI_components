import { Box, Pagination, Stack, TablePagination, Typography } from '@mui/material'
import React, { useState } from 'react'

const CustomPaginations = () => {
    const [page,setPage]=useState(0)
    const[rowsPerPage,setRowsPerPage]=useState(10)
    const pageHandler=(event,newPage)=>{
        setPage(newPage)
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
  return (
    <Box>
        <Typography variant='h5' gutterBottom>Custom Paginations</Typography>
        <Stack direction={"column"} spacing={5}>
        <Pagination count={10} showFirstButton showLastButton />
        <Pagination count={10} hidePrevButton showLastButton/>
        <Pagination count={10} defaultPage={5}/>
        <Pagination count={10} siblingCount={0} defaultPage={5} boundaryCount={2}/>
        <Typography variant='h5' gutterBottom mt={2}>Table Pagination</Typography>
            <TablePagination
                count={50}
                page={page}
                onPageChange={pageHandler}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Stack>
    </Box>
  )
}

export default CustomPaginations