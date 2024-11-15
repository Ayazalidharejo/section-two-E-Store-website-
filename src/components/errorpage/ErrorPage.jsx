import { Box, Typography } from '@mui/material'
import Hero from "../../acsses/error.svg"
import React from 'react'

const ErrorPage = () => {
  return (
    <Box className="d-flex justify-content-between container align-items-center mt-5">
  <Box>
<Typography variant='h4'>Something’s wrong here...</Typography>
<Typography variant='body2'>We can’t find the page you’re looking for.
Check out our help center or head back to home.</Typography>

  </Box>
  <Box>

<img src={Hero} alt="" />
  </Box>
  </Box>
  )
}

export default ErrorPage