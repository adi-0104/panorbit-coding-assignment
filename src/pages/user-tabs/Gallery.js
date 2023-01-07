import {Box, Divider } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import PlaceHolder from '../../components/PlaceHolder';
import TabHeader from '../../components/TabHeader';
import "./Profile.css"

function Gallery() {

  let location = useLocation();
  let {userData, usersList} = location.state;
  return (
      <Box maxWidth="lg" className='main-content'>
        <TabHeader heading="Gallery" userData = {userData} usersList={usersList}/>
        <Divider sx={{my: 2}}/>
        <Box maxWidth="lg" className='tab-content'>
          <PlaceHolder />

        </Box>

      </Box>
  )
}

export default Gallery;