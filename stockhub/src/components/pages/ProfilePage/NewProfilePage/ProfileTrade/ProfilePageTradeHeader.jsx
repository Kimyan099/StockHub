import React from 'react';
import { RiExchangeDollarFill } from 'react-icons/ri';

 
export default class ProfilePageTradeHeader extends React.Component {
  render(){
    return (
      <header className="Header">
        <h1 className="Branding">
        <RiExchangeDollarFill className='navbar-icon' />
          Trades
        </h1>
      </header>
    );
  }
}