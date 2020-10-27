import React from 'react';
import '../ProfilePage/Profile.css';

function Profile() {
	return (
		<div class='container emp-profile'>
			<div class='row'>
				<div class='col-1'>
					<div class='profile-img'>
						<img src={require('../../../img/bird.jpg')} />
					</div>
					<div class='col-2'>
						<br />
						<ul class='profile-work'>
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
						</ul>
					</div>
				</div>
				<div class='col-3'>
					<div class='profile-head'>
						<h5>Duckee Duu</h5>
						<h6>Web Developer and Designer</h6>
						<p class='proile-rating'>
							RANKINGS : <span>8/10</span>
						</p>
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
