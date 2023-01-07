import {Box, Divider } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import ProfileTab from '../../components/ProfileTab';
import TabHeader from '../../components/TabHeader';
import "./Profile.css"

const Profile = () => {

  let location = useLocation();
  let {userData,usersList}= location.state;
  return (
      <Box maxWidth="lg" className='main-content'>
        <TabHeader heading="Profile" userData = {userData} usersList={usersList}/>
        <Divider sx={{my: 2}}/>
        <Box maxWidth="lg" className='tab-content'>
          <ProfileTab userData={userData}/>
        </Box>

      </Box>
  )
}

export default Profile;