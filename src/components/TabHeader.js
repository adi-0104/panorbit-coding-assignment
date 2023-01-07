import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import stringAvatar from "./StringAvatar";
import React, { useEffect, useRef, useState } from "react";
import "./TabHeader.css";
import ActionCard from "./ActionCard";

//handle user click outside of card
const useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) handler();
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const TabHeader = ({ heading, userData, usersList }) => {
  let [showActionCard, setShowActionCard] = useState(false);
  let actionCardRef = useClickOutside(() => setShowActionCard(false));

  return (
    <Box className="tab-header">
      <h3>{heading}</h3>
      <Box ref={actionCardRef} className="action-center">
        <Avatar
          {...stringAvatar(`${userData.name}`)}
          onClick={() => setShowActionCard(!showActionCard)}
          className="avatar-button"
        />
        <h4 className="display-name-desktop">{userData.name}</h4>
        {showActionCard && (
          <ActionCard userData={userData} usersList={usersList} />
        )}
      </Box>
    </Box>
  );
};

export default TabHeader;
