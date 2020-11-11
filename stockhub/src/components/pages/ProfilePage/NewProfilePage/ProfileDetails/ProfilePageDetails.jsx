import React from "react";
import ProfilePageHeader from "./ProfilePageDetailsHeader"
import "./DetailsStyle.css"
import Client from "../ProfileDetails/Client"

const ProfileDetails = (props) => {

  let content = (
    <div className="App">
      <div className="Wrapper">
        <ProfilePageHeader/>
        <Client/>
      </div>
    </div>
  );

  return content;
};

export default ProfileDetails;