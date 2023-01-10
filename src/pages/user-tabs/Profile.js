import React from 'react'
import {Box, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ProfileTab from '../../components/ProfileTab';
import TabHeader from '../../components/TabHeader';
import "./Profile.css"
import ChatComponent from '../../components/ChatComponent';

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
        <ChatComponent usersList={usersList}/>
      </Box>
  )
}

export default Profile;