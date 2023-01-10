import { Box, Grid } from '@mui/material'
import React from 'react'
import "./PlaceHolder.css"

const PlaceHolder = () => {
  return (
    <Grid container spacing={2.5} sx={{ mt: 0.8 }}>
        <Grid item className='message-wrapper'><p>Coming Soon</p></Grid>
    </Grid>
    
  )
}

export default PlaceHolder