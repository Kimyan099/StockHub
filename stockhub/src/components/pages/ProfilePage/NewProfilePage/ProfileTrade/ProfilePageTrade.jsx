import React from 'react';
import ProfilePageHeader from './ProfilePageTradeHeader';
import '..//ProfileDetails/DetailsStyle.css';
import Trades from './Trades';

const ProfileDetails = (props) => {
	let content = (
		<div className='App'>
			<div className='Wrapper'>
				<ProfilePageHeader />
				<Trades />
			</div>
		</div>
	);

	return content;
};

export default ProfileDetails;
