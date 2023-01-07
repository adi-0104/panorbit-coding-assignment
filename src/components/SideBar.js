import { Box } from "@mui/system";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";

const MenuItemsButton = ({ href, children }) => {
  let location = useLocation();
  let path = location.pathname;
  let { userData, usersList } = location.state;

  return (
    <li className={path === href ? "menu-item-active" : "menu-item"}>
      <Link
        className={path === href ? "menu-link-active" : "menu-link"}
        to={href}
        state={{ userData, usersList }}
      >
        {children}
      </Link>
    </li>
  );
};

const SideBar = () => {
  return (
    <>
      <Box className="side-menu-desktop">
        <ul className="menu-items">
          <MenuItemsButton href="/user/profile">Profile</MenuItemsButton>
          <MenuItemsButton href="/user/posts">Posts</MenuItemsButton>
          <MenuItemsButton href="/user/gallery">Gallery</MenuItemsButton>
          <MenuItemsButton href="/user/todo">ToDo</MenuItemsButton>
        </ul>
      </Box>
    </>
  );
};

export default SideBar;
