import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const CurrentUser = (props) => {
  const [contextEmail, setContextEmail] = useState("");
  const [name, setName] = useState("Guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contextAddress, setContextAddress] = useState("")
  const [contextPhoneNumber, setContextPhoneNumber] = useState("")
  const [contextMobileNumber, setContextMobileNumber] = useState("")


  return (
    <UserContext.Provider value={[
      name, setName, 
      isLoggedIn, setIsLoggedIn, 
      contextEmail, setContextEmail,
      contextAddress, setContextAddress,
      contextPhoneNumber, setContextPhoneNumber,
      contextMobileNumber, setContextMobileNumber]}>
      {props.children}
    </UserContext.Provider>
  );
};
