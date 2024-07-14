import React, { useEffect, useState } from 'react';
import { Box, Divider, Stack } from '@mui/material';
import SkeletonVarient from './SkeletonVarient';
import BasicSkeletons from './BasicSkeletons';

const Skeletons = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Unique = setInterval(() => {
      setLoading((prev) => !prev);
    }, 8000);
    return () => clearInterval(Unique);
  }, []);

  return (
    <Box sx={{
        height:"70vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center" 
        }} >
      <Box>
      <BasicSkeletons />

      <SkeletonVarient loading={loading} />
      </Box>
    </Box>
  );
};

export default Skeletons;
