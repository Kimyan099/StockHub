import { Link, Route } from "react-router-dom";
import React, {useContext} from 'react';
import '../NewProfilePage/ProfilePageStyle.css';
import ProfileDetails from "./ProfilePageDetails"

const ProfilePage = (props) => {



	return (
	<React.Fragment>
	<div className="profilePage">
		<header class="header">
			<h2>Gajdos Tamás</h2>
		</header>

		<div className='profile-menu-body'>
			
			<div className="cards">	
				<div className="menu-title">
			<Link to="/newProfile/profileDetails">
					<img class="logo" src="https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"></img>
					<br></br>
					<div className="menu-text">Profile Details</div>
			</Link>
				</div>
				

			<Link>
				<div className="menu-title">
				<img class="logo" src="https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"></img>
					<br></br>
					<div className="menu-text">Trade</div>
				</div>
			</Link>

			<Link>
				<div className="menu-title">
				<img class="logo" src="https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"></img>
					<br></br>
					<div className="menu-text">Favourites</div>
				</div>
			</Link>

			<Link>
				<div className="menu-title">
				<img class="logo" src="https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"></img>
					<br></br>
					<div className="menu-text">Logout</div>
				</div>
			</Link>
			</div>
			<Route path="/newProfile/profileDetails" exact>
				<p>aaaaaaaa</p>
			</Route>
		</div>
	</div>
</React.Fragment>

	);
}

export default ProfilePage;
