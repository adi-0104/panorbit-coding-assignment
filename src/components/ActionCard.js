import { Avatar, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import stringAvatar from "./StringAvatar";
import "./ActionCard.css";
import randomIndexGenerator from "../utilities/randomIndexGenerator";
const ActionCard = ({ userData, usersList }) => {
  

  //Note: function to temporarily add two random users in the card for Navigation
  let userTwo = usersList[randomIndexGenerator(usersList)];
  let userThree = usersList[randomIndexGenerator(usersList)];
  
  return (
    <Box className="action-card">
      <Box className="action-items">
        <Box className="action-display">
        <Avatar src={`${userData.profilepicture}`} sx={{ height: 70, width: 70, mb: 1 }} />
          <h4>{userData.name}</h4>
          <p>{userData.email}</p>
        </Box>
        <Box className="action-other-users">
          <Link className="action-link" to="/user/profile" state={{userData:userTwo,usersList: usersList}}>
            <Box className="action-other-user">
              <Avatar src={`${userTwo.profilepicture}`} sx={{width: 28, height: 28}}/>
              <span>{userTwo.name}</span>
            </Box>
          </Link>
          <hr className="card-divider" />
          <Link className="action-link" to="/user/profile" state={{userData:userThree,usersList: usersList}}>
            <Box className="action-other-user">
              <Avatar src={`${userThree.profilepicture}`} sx={{width: 28, height: 28}}/>
              <span>{userThree.name}</span>
            </Box>
          </Link>
        </Box>
        <Box className="action-signout">
          <Link className="action-link" to="../..">
            <button className="signout-button">Sign out</button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default ActionCard;
