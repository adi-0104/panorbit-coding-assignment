import { Avatar, Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from "@mui/icons-material/Close";
import "./ChatComponent.css";
import SampleConversation from "./SampleConversation";
import randomIndexGenerator from "../utilities/randomIndexGenerator";

const ChatComponent = ({ usersList }) => {
  let [isChatListClosed, setisChatListClosed] = useState(true);
  let [isIndividualChatOpen, setIsIndividualOpen] = useState(false);
  let [activeChatData, setActiveChatData] = useState({
    userName: "",
    userPic: "",
  });


  const handleChatBox = () => {
    setisChatListClosed((prevState) => !prevState);
  };

  const handleIndividualChat = (user = null) => {
    if (user) {
      setActiveChatData({ userName: user.name, userPic: user.profilepicture });
      setIsIndividualOpen(true);
    } else setIsIndividualOpen(false);
  };


  const ChatListHeader = ({ isChatListClosed }) => {
    return (
      <Box className="header-content" onClick={handleChatBox}>
        <Box className="header-title">
          <ModeCommentOutlinedIcon sx={{ mt: 0.5 }} />
          <div>Chats</div>
        </Box>
        {isChatListClosed ? (
          <ExpandLessOutlinedIcon sx={{ mr: 0.8, mt: 0.5, cursor: "pointer" }} fontSize="small" />
        ) : (
          <ExpandMoreOutlinedIcon sx={{ mr: 0.8, mt: 0.5, cursor: "pointer" }} fontSize="small" />
        )}
      </Box>
    );
  };

  const IndividualChatBox = () => {
    let [newMessage,setNewMessage] = useState(""); 

    const HandleSend = () => {
      setNewMessage("");
    }
  
    const HandleInputMessage = (event) => {
      setNewMessage(event.target.value);
    }
    return (
      <Box>
        <Box className="individual-chat-header">
          <Box className="individualchat-header-display">
            <Avatar
              src={activeChatData.userPic}
              sx={{ width: 24, height: 24, mx: 0.5 }}
            />
            <p>{activeChatData.userName}</p>
          </Box>
          <Box className="individualchat-header-actions">
            <ExpandMoreOutlinedIcon
              className="action-icon"
              onClick={handleChatBox}
            />
            <CloseIcon
              className="action-icon"
              onClick={() => handleIndividualChat()}
            />
          </Box>
        </Box>
        <Box className="conversation-container">
          <SampleConversation />
        </Box>
        <Box className="send-message-wrapper">
          <OutlinedInput sx={{borderRadius: 0}}
            value={newMessage}
            onChange={(e) =>  HandleInputMessage(e)}
            id="outlined-message-input"
            endAdornment={<InputAdornment position="end" onClick={HandleSend}><SendIcon fontSize="small"
            sx={{color: "#2C65C8", cursor:"pointer"}}/></InputAdornment>}
          />
          </Box>
      </Box>
    );
  };
  const ChatListItems = ({ usersList, isIndividualChatOpen }) => {
    return (
      <ul>
        {usersList.map((user) => {
          // Note: function to temporarily generate online offline status for users
          let isOnline = randomIndexGenerator([0,1]);
          return (
          <li key={user.id} className="chat-list-item">
            <Box
              className="display-friend"
              onClick={() => handleIndividualChat(user)}
            >
              <Avatar
                src={user.profilepicture}
                sx={{ width: 28, height: 28 }}
              />
              <p className="display-friend-name">{user.name}</p>
            </Box>
            <Box>
              <div className={isOnline ? "user-status status-online": "user-status status-offline"}></div>
            </Box>
            {isIndividualChatOpen && (
              <Box className="individual-chat-box">
                <IndividualChatBox />
              </Box>
            )}
          </li>
        )})}
      </ul>
    );
  };
  return (
    <>
      {isChatListClosed ? (
        <Box className="chat-list-closed">
          <ChatListHeader isChatListClosed={isChatListClosed} />
        </Box>
      ) : (
        <Box className="chat-list-open">
          <ChatListHeader isChatListClosed={isChatListClosed} />
          <Box className="chat-list-box">
            <ChatListItems
              usersList={usersList}
              isIndividualChatOpen={isIndividualChatOpen}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ChatComponent;
