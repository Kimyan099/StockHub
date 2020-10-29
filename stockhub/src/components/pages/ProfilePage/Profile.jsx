import React, {useContext} from 'react';
import '../ProfilePage/Profile.css';
import { UserContext } from "../ProfilePage/Register/UserContext";


function Profile() {
	const [name, setName, isLoggedIn, setIsLoggedIn] = useContext(UserContext);


	return (
		<div className='container emp-profile'>
			<div className='row'>
				<div className='col-1'>
					<div className='profile-img'>
						<img src={require('../../../img/bird.jpg')} />
					</div>
					<div className='col-2'>
						<br />
						<ul className='profile-work'>
							<li>PROFILE</li>
							<li>
								<a href=''>Overview</a>
							</li>
							<li>
								<a href=''>Stats</a>
							</li>
							<li>
								<a href=''>Porftolio</a>
							</li>
							<li>
								<a onClick={() => setIsLoggedIn(false)} href='/'>Logout</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-3'>
					<div className='profile-head'>
						<h5>Duckee Duu</h5>
						<h6>Web Developer and Designer</h6>
						<p class='proile-rating'>
							RANKINGS : <span>8/10</span>
						</p>
					</div>
				</div>
				<ul className='personal-stock-container'>
					{/* <li>
						<p>Symbol | price | amount</p>
					</li> */}
					<li>
						<p>AAPL | 134,6 | 3</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Profile;
