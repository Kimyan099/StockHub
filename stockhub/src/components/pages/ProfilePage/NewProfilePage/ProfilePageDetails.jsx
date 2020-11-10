import React from "react";
import ProfilePageHeader from "./ProfilePageDetailsHeader"
import "../NewProfilePage/DetailsStyle.css"
import Client from "./Client"

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