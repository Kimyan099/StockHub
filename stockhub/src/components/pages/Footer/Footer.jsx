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
						<a href='https://www.instagram.com/' target='_blank'>Instagram</a>
						<a href='https://www.facebook.com/' target='_blank'>Facebook</a>
						<a href='https://www.youtube.com/' target='_blank'>Youtube</a>
						<a href='https://www.twitter.com/' target='_blank'>Twitter</a>
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
						<a
							className='social-icon-link'
							href='https://www.facebook.com/'
							target='_blank'
							aria-label='Facebook'
						>
							<FaFacebook />
						</a>
						<a
							className='social-icon-link'
							href='https://www.instagram.com/'
							target='_blank'
							aria-label='Instagram'
						>
							<FaInstagram />
						</a>
						<a
							className='social-icon-link'
							href={'https://www.youtube.com/'}
							target='_blank'
							aria-label='Youtube'
						>
							<FaYoutube />
						</a>
						<a
							className='social-icon-link'
							href='https://www.twitter.com/'
							target='_blank'
							aria-label='Twitter'
						>
							<FaTwitter />
						</a>
						<a
							className='social-icon-link'
							href='https://www.linkedin.com/'
							target='_blank'
							aria-label='LinkedIn'
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;