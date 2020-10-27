import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';
import { IconContext } from 'react-icons/lib';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {

    try {
      if (document.querySelector(".home__hero-text-wrapper") !== null) {
        const text = document.querySelector(".home__hero-text-wrapper");
        text.classList.toggle("active");
      }
    } catch (error) {
      
    }
    setClick(!click)
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <RiExchangeDollarFill className='navbar-icon' />
            StockHub
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes size='35px' /> : <FaBars size='35px' />}
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <div className='nav-item' id='space'>
              Space
            </div>
            <div className='nav-item'>
              <Link
                to='/companies'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Companies
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                to='/market-news'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Market News
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                to='/stocks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Stocks
              </Link>
            </div>
            <div className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;