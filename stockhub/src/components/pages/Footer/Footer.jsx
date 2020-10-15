import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { RiExchangeDollarFill } from 'react-icons/ri';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';

function Footer() {
	return (
		<footer className='footer-container'>
			{/* <section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Join our exclusive membership to receive the latest news and trends
				</p>
				<p className='footer-subscription-text'>
					You can unsubscribe at any time.
				</p>
				<div className='input-areas'>
					<form>
						<input
							className='footer-input'
							name='email'
							type='email'
							placeholder='Your Email'
						/>
						<Button buttonStyle='btn--outline'>Subscribe</Button>
					</form>
				</div>
			</section> */}
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>About Us</h2>
						<Link to='/temp'>How it works</Link>
						<Link to='/temp'>Testimonials</Link>
						<Link to='/temp'>Careers</Link>
						<Link to='/temp'>Investors</Link>
						<Link to='/temp'>Terms of Service</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Contact Us</h2>
						<Link to='/temp'>Contact</Link>
						<Link to='/temp'>Support</Link>
						<Link to='/temp'>Destinations</Link>
						<Link to='/temp'>Sponsorships</Link>
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Videos</h2>
						<Link to='/temp'>Submit Video</Link>
						<Link to='/temp'>Ambassadors</Link>
						<Link to='/temp'>Agency</Link>
						<Link to='/temp'>Influencer</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Social Media</h2>
						<Link to='/'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						<Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link>
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							<RiExchangeDollarFill className='navbar-icon' />
							StockHub
						</Link>
					</div>
					<small className='website-rights'>StockHub © 2020</small>
					<div className='social-icons'>
						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='Facebook'
						>
							<FaFacebook />
						</Link>
						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='Instagram'
						>
							<FaInstagram />
						</Link>
						<Link
							className='social-icon-link'
							to={
								'/'
							}
							target='_blank'
							aria-label='Youtube'
						>
							<FaYoutube />
						</Link>
						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='Twitter'
						>
							<FaTwitter />
						</Link>
						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='LinkedIn'
						>
							<FaLinkedin />
						</Link>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
