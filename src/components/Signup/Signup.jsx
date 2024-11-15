import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
  const [showpassword,setshowpassword]=useState(false)
  return (
    <Box className=' w-50 container mt-4'>
<Typography className='text-center' variant='h5'> Sign in to FreshCart</Typography>
<Typography className='text-center' variant='body1'> Welcome back to FreshCart! Enter your email to get started.</Typography>
<Box><TextField fullWidth type='text' size='small' placeholder='First Name '/></Box>
<Box><TextField className='my-4' fullWidth type='password' size='small' placeholder='Second Name  '/></Box>
<Box><TextField className='my-4' fullWidth type='password' size='small' placeholder='Email'/></Box>
<Box><TextField className='my-4' fullWidth type={showpassword ?"text":"password"} size='small'  slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=>setshowpassword(!showpassword)}>
                <VisibilityIcon />
              </InputAdornment>
            ),
          },
        }} placeholder='password '/></Box>
<Box>
  <Button fullWidth size='small' variant='contained'>  Sign in</Button></Box>
    </Box>
  )
}

export default Signup