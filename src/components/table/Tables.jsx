import {  Grid } from '@mui/material'
import React from 'react'
import BasicTable from './BasicTable'
import TableWithPagination from './TableWithPagination'
import TableWithSearch from './TableWithSearch'

const Tables = () => {
  return (
    <Grid container spacing={4} ml={5}>
       <Grid item xs={12} md={6} lg={10}> <BasicTable/></Grid>
       <Grid item xs={12} md={6} lg={6}> <TableWithPagination/></Grid>
       <Grid item xs={12} md={6} lg={10}> <TableWithSearch/></Grid>
    </Grid>
  )
}

export default Tables