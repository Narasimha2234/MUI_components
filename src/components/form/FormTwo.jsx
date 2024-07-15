import { Box, Button, TextField, Typography} from '@mui/material'
import React, { useState } from 'react'


const FormHandlingTwo = () => {
    const [data,setData]=useState({
        "name":"",
        "email":"",
        "phone":Number,
        "address":"",
        resume:null

    })
    const [errors,setErrors]=useState({
        "name":"",
        "email":"",
        "phone":"",
        "address":"",
        resume:null
    }
    )
    const [resume,setResume]=useState("")

    const changeHandler=(event)=>{
            const{name,value,files}=event.target
            setData({...data,[name]:files?files[0]:value})
            setResume(()=>files?files[0].name:null)
            setErrors({...errors,[name]:""})
    }
    const validateForm=(formdata)=>{
        let valid=true
        let newErrors={}
         if(formdata.name===""){
            newErrors.name="name is required"
            valid=false
        }
        if(formdata.email===""){
            newErrors.email="email is required"
            valid=false
        }
        if(formdata.phone === '' || isNaN(formdata.phone)){
            newErrors.phone="phone number is required"
            valid=false
        }
        if(formdata.address===""){
            newErrors.address="address is required"
            valid=false
        }
        if(formdata.resume===null){
            newErrors.resume="upload resume"
            valid=false
        }
        setErrors(newErrors)
        return valid
    }
   const submitHandler=(event)=>{
    event.preventDefault()
    if(validateForm(data)){
        console.log("success");
    }
    else{
        console.log("fail");
    }

   }
    return (
        <Box component="form" onSubmit={submitHandler} sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: 2, 
                            width: '300px',
                            margin: 'auto', 
                            mt: 5 }} >

            <Typography variant="h5" sx={{ mb: 2 }}> Form Handling  </Typography>
            
     
         
          <TextField label="Name" name="name" 
                    fullWidth placeholder='enter your name' 
                    onChange={changeHandler} 
                    error={errors.name}
                    helperText={`${errors.name?errors.name:""}`}/>
                    
         
          
          <TextField label="Email" name="email" type="email"  
                    placeholder='enter your email' 
                    fullWidth 
                    onChange={changeHandler}
                    error={errors.email}
                    helperText={`${errors.email?errors.email:""}`}/>
          
          <TextField  label="Phone"  name="phone"  type="tel"  
                        placeholder='enter your phone number'  
                        fullWidth 
                        onChange={changeHandler}
                        error={errors.phone}
                        helperText={`${errors.phone?errors.phone:""}`}/>
         
          <TextField type='text' label="Address"  name="address" 
                    placeholder='enter your address' 
                    fullWidth 
                    onChange={changeHandler}
                    error={errors.address}
                    helperText={`${errors.address?errors.address:""}`}/>
         
         <Box>
         <Button  variant="contained"  component="label" fullWidth > Upload Resume
            <input type="file" name="resume" hidden  onChange={changeHandler}/>
          </Button>
            {resume&&(
                <Typography variant='body2'>{resume}</Typography>
            )}{errors.resume&&(
                <Typography color={"error"} variant='body2'>{errors.resume}</Typography>
            )}
         </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>

         
          
        </Box>
      );
}

export default FormHandlingTwo

