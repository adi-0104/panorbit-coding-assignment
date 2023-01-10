import { Box } from "@mui/system";
import React from "react";
import "./SampleConversation.css";
const SampleConversation = () => {
  const MyMessage = ({message}) => {
    return (
        <div className="my-message message">{message}</div>
    )
  };

  const FriendMessage = ({ message }) => {
    return <div className="friend-message message">{message}</div>;
  };

  const ConversationStartTime = ({time}) => {
    return(
        <div className="conversation-time">
            {time}
        </div>
    )
  }
  return (
    <Box className="conversation-window">
      <FriendMessage
        message={"Excepteurd velit duids consectetur aliquip excepteur Lorem."}
      />
      <FriendMessage message={"velit duids consectetur  excepteur Lorem."} />
      <ConversationStartTime time="9:16 AM"/>
      <MyMessage message={"velit duids consectetur  excepteur Lorem."} />
      <MyMessage message={"veluids Lorem."} />
      <FriendMessage message={"velit duids consectetur  excepteur Lorem."} />
      <ConversationStartTime time="8:20 AM"/>
      <MyMessage message={"velit duids consectetur  excepteur Lorem."} />
      <MyMessage message={"veluids Lorem."} />
    </Box>
  );
};

export default SampleConversation;
