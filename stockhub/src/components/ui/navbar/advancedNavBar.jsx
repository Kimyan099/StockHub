import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/AdvancedNavBar.css';
import { IconContext } from 'react-icons/lib';

function NavBar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);

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
				<Link to='/' className='navbar-logo' onClick={handleClick}>
					<RiExchangeDollarFill className='navbar-icon' />
					StockHub
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					{click ? <FaTimes size='35px' /> : <FaBars size='35px' />}
				</div>

				<ul className={click ? 'nav-menu-active' : 'nav-menu'}>
					<li className='nav-item' id='space'>Space</li>
					<li className='nav-item'>
						<Link to='/companies' className='nav-links' onClick={handleClick}>
							Companyies
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/market-news' className='nav-links' onClick={handleClick}>
							Market News
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/stocks' className='nav-links' onClick={handleClick}>
							Stocks
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/profile' className='nav-links' onClick={handleClick}>
							Profile
						</Link>
					</li>
				</ul>
			</div>
		</div>
		</IconContext.Provider>
	);
}

export default NavBar;
