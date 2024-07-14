import { Badge, Button, ButtonGroup, Stack } from "@mui/material"
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ChangeContent=()=>{
    const [count,setCount]=useState(0)
    const decreaseHandler=()=>{
        if(count>1){
            setCount((prev)=>prev-1)
        }
    }
    const increaseHandler=()=>{
      
            setCount((prev)=>prev+1)
       
    }
    return(
    <Stack direction={"row"} spacing={4} mt={3} mb={2}>
        <Badge badgeContent={count} color='primary'>
        <WhatsAppIcon />
        </Badge>
        <ButtonGroup>
            <Button onClick={decreaseHandler} disabled={count===1 || count===0}>
                <RemoveIcon/></Button>
            <Button onClick={increaseHandler}><AddIcon/></Button>
        </ButtonGroup>
    </Stack>

)}
export default ChangeContent