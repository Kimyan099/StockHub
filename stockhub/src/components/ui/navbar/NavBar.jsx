import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function NavBar() {
    
	return (
		<div id='navbar'>
			<ul>
				<Link to='/companies'>
					<li>
						<Button
							className='nav-button'
							variant='contained'
							color='Primary'
						>
							<div>Companies</div>
						</Button>
					</li>
				</Link>
				<Link to='/market-news'>
					<li>
						<Button
							className='nav-button'
							variant='contained'
							color='Primary'
						>
							<div>Market News</div>
						</Button>
					</li>
				</Link>
                <Link to='/stocks'>
					<li>
						<Button
							className='nav-button'
							variant='contained'
							color='Primary'
						>
							<div>Stocks</div>
						</Button>
					</li>
				</Link>
                <Link to='/profile'>
					<li>
						<Button
							className='nav-button'
							variant='contained'
							color='Primary'
						>
							<div>Profile</div>
						</Button>
					</li>
				</Link>
			</ul>

		</div>
        
	);
}

export default NavBar;
