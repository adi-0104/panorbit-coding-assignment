import React from "react";
import { useState, useEffect } from "react";
import "./LandingPage.css";
import axios from "axios";
import { config } from "../App";
import UsersCard from "../components/UsersCard";


const LandingPage = () => {
  let [usersList, setUsersList] = useState([]);

  let getUsers = async () => {
    try{
        let response = await axios.get(`${config.endpoint}`);
        let data = await response.data;
        setUsersList(data.users);
        return;
    }
    catch(error){
        console.log(error.message);
        return;
    }
  }
   
  useEffect(() => {
    getUsers();
    
  } ,[])
  return (
    <div className="lp-background">
      <UsersCard usersList={usersList}/>
    </div>
  );
}

export default LandingPage;
