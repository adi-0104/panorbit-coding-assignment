import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import React from "react";
import "./UserPage.css"

const UserPage = () => (
  <Container
    maxWidth="xl"
    className="userpage-container"
  >
    <SideBar />
    <Outlet />
  </Container>
);

export default UserPage;
