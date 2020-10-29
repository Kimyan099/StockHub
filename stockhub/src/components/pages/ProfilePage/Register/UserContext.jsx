import React, { useEffect, useState, createContext } from "react";
import axios from "axios";


export const UserContext = createContext();

export const CurrentUser = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("Guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <UserContext.Provider value={[name, setName, isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </UserContext.Provider>
  );
};