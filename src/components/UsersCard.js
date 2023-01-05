import React from 'react';
import "./UsersCard.css";
import stringToColor from "../utilities/stringToColor";
import Avatar from "@mui/material/Avatar";

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 30,
        height: 30,
        mr: 1
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

function UsersCard({usersList}) {
  return (
    <main className="users-card">
        <h2 className="card-header">
          <span>Select an account</span>
        </h2>
        <section className="users-list">
          <ul>
            {usersList.map((user) => (
                <li className="user-item" key={user.id}>
                    <Avatar {...stringAvatar(`${user.name}`)} />
                    <p className="user-name">{user.name}</p>
                </li>
            ))}
          </ul>
        </section>
        <footer className="card-footer"></footer>
      </main>
  )
}

export default UsersCard