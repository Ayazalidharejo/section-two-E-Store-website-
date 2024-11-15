import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signin = () => {
  const [showpassword ,setshowpassword]=useState(false)
  return (
    <Box className=' w-50 container mt-5'>
<Typography className='text-center my-2' variant='h5'> Sign in to FreshCart</Typography>
<Typography className='text-center my-3' variant='body1'> Welcome back to FreshCart! Enter your email to get started.</Typography>
<Box><TextField fullWidth type='text' size='small' placeholder='E-Mail '/></Box>
<Box><TextField className='my-4' fullWidth type={showpassword?"text":"password"} size='small'
slotProps={{
  input: {
    endAdornment: (
      <InputAdornment position="start" onClick={()=>setshowpassword(!showpassword)}>
        < VisibilityIcon />
      </InputAdornment>
    ),
  },
}}
placeholder='password '/></Box>
<Box><Button fullWidth size='small' variant='contained'>  Sign in</Button></Box>
   
   
   
   <Typography className='mt-4 text-center' variant='body2'> Don’t have an account? <Link to="/signup"> Sign Up</Link> </Typography>
    </Box>


  )
}

export default Signin