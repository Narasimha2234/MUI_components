import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

const BasicBreadCrumbs = () => {
  return (
    <Box>
        <Typography variant='h6' gutterBottom>Basic breadCrumbs</Typography>
        <Breadcrumbs>
            <Link underline='hover' href="/button">button</Link>
            <Link underline='hover' href="/avatar">avatar</Link>
            <Link underline='hover' href="/accordion">accordion</Link>
            <Typography>breadcrumbs</Typography>
        </Breadcrumbs>

        {withActiveLast}

        {withCustomSeperator}

        {breadcrumbWithIcon}

        {CollapsedBreadcrumbs}
    </Box>
  )
}

export default BasicBreadCrumbs

const withActiveLast=(
    <Box mt={5}>
        <Typography variant='h6' gutterBottom>with Active Last breadCrumbs</Typography>
        <Breadcrumbs >
            <Link underline='hover' href="/button">button</Link>
            <Link underline='hover' href="/avatar">avatar</Link>
            <Link underline='hover' href="/accordion">accordion</Link>
            <Link underline='hover' href="/breadcrumbs">breadcrumbs</Link>
        </Breadcrumbs>
    </Box>
)

const withCustomSeperator=(
    <Box mt={5}>
        <Typography variant='h6' gutterBottom>with Custom seperator</Typography>
        <Breadcrumbs separator=">">
            <Link underline='hover' href="/button">button</Link>
            <Link underline='hover' href="/avatar">avatar</Link>
            <Link underline='hover' href="/accordion">accordion</Link>
            <Link underline='hover' href="/breadcrumbs">breadcrumbs</Link>
        </Breadcrumbs>
    </Box>
)

const breadcrumbWithIcon=(
    <Box mt={5}>
        <Typography variant='h6' gutterBottom>with Icons</Typography>
        <Breadcrumbs separator="-">
            <Link underline='hover' href="/button" sx={{display:"flex",alignItems:"center"}}><EditAttributesIcon />button</Link>
            <Link underline='hover' href="/avatar" sx={{display:"flex",alignItems:"center"}}><AccountCircleIcon/>avatar</Link>
            <Link underline='hover' href="/accordion" sx={{display:"flex",alignItems:"center"}}><ExpandMoreIcon/>accordion</Link>
            <Link underline='hover' href="/breadcrumbs" sx={{display:"flex",alignItems:"center"}}><BakeryDiningIcon/>breadcrumbs</Link>
        </Breadcrumbs>
    </Box>
)
const CollapsedBreadcrumbs=(
    <Box mt={5}>
        <Typography variant='h6' gutterBottom>with Custom seperator</Typography>
        <Breadcrumbs maxItems={2}>
            <Link underline='hover' href="/button">button</Link>
            <Link underline='hover' href="/avatar">avatar</Link>
            <Link underline='hover' href="/accordion">accordion</Link>
            <Link underline='hover' href="/breadcrumbs">breadcrumbs</Link>
        </Breadcrumbs>
    </Box>
)