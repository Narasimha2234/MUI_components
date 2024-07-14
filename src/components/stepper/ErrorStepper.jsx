import * as React from 'react';
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const ErrorStepper=()=> {
  const isStepFailed = (step) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: '100%',marginTop:5 }}>
        <Typography variant='h5'>stepper with error</Typography>
      <Stepper activeStep={1} orientation='vertical'>
        {steps.map((label, index) => {
          const labelProps = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="body2" color="error">
                Alert message
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
export default ErrorStepper
