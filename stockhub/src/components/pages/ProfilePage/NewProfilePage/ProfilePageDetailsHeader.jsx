import React from 'react';
 
export default class Header extends React.Component {
  render(){
    return (
      <header className="Header">
        <h1 className="Branding">
          <img src={"https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"} alt="Social network logo" className="Logo" />
          Profile Details
        </h1>
      </header>
    );
  }
}