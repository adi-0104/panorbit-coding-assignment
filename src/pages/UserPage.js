import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import React from "react";

const UserPage = () => (
  <Container
    maxWidth="lg"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      my: 2,
    }}
  >
    <SideBar />
    <Outlet />
  </Container>
);

export default UserPage;
