import React from "react";
import ProfilePageHeader from "./ProfilePageDetailsHeader"
import "../NewProfilePage/DetailsStyle.css"


const ProfileDetails = (props) => {

  let content = (
    <div className="App">
      <div className="Wrapper">
        <ProfilePageHeader/>
      </div>
    </div>
  );

  return content;
};

export default ProfileDetails;