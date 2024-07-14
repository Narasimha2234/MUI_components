import {Grid } from '@mui/material'
import React from 'react'
import BasicList from './BasicList'
import ListWithAvatar from './ListWithAvatar'
import AlignedList from './AlignedList'
import WifiAndBt from './WifiAndBt'

const ListsComp = () => {
  return (
    <Grid container spacing={1} ml={5}>
       <Grid item xs={12} md={6} lg={4}> <BasicList/></Grid>
       <Grid item xs={12} md={6} lg={4}>  <ListWithAvatar/></Grid>
       <Grid item xs={12} md={6} lg={4}>  <AlignedList/></Grid>
       <Grid item xs={12} md={6} lg={4}>  <WifiAndBt/></Grid>
    </Grid>
  )
}

export default ListsComp
