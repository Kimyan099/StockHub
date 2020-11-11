import React from 'react';
import { RiExchangeDollarFill } from 'react-icons/ri';

 
export default class ProfilePageDetailsHeader extends React.Component {
  render(){
    return (
      <header className="Header">
        <h1 className="Branding">
        <RiExchangeDollarFill className='navbar-icon' />
          Profile Details
        </h1>
      </header>
    );
  }
}