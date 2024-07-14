

import { Box, Stack, Typography } from '@mui/material'


const Home = () => {
  

  
  return (
    
    <Box sx={{
     width:"100%",
     height:"91vh",
     backgroundImage:"url(https://www.imarc.com/writable/images/thought-hero-images/pexels-photo-238118_copy1.jpeg)",
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
     color:"inherit"
     
    }} component={"div"}>
    <Stack direction={'column'}>
    <Box sx={{
     position:"absolute",
     left:"80px",
     top:"250px"
      
    }}>
      <Typography variant='h2'>hi i'm</Typography>
    <Typography variant='h2' gutterBottom>Lakshmi Narasimhaswamy</Typography>
    <Typography variant='h3' gutterBottom>Java FullStack Developer</Typography>
    <Typography variant='h5'> contact : +91 9666164055</Typography>
    </Box>

    </Stack>
    
    </Box>


  )
}

export default Home

