import React from 'react';
import "./UsersCard.css";
import Avatar from "@mui/material/Avatar";
import stringAvatar from './StringAvatar';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


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
                    <Link className="link" to="/user/profile" state={{userData: user,usersList: usersList}}>
                        <Avatar {...stringAvatar(`${user.name}`)} />
                        <Typography className="user-name">{user.name}</Typography>
                    </Link>
                    
                </li>
            ))}
          </ul>
        </section>
        <footer className="card-footer"></footer>
      </main>
  )
}

export default UsersCard