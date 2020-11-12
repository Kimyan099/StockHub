import React, { useState } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import './LoginPage.css';
import { Button } from '../../../ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const RegisterPage = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordAgain, setPasswordAgain] = useState('');
	const [isExist, setIsExist] = useState(false);
	const { handleSubmit, register, errors } = useForm();
	const [route, setRoute] = useState('/register');

	const regist = () => {
		if (
			password === passwordAgain &&
			password.length > 0 &&
			email.length > 0 &&
			name.length > 0
		) {
			axios
				.post('http://localhost:8080/user', null, { params: { email: email } })
				.then((response) => {
					if (!response.data) {
						axios
							.post('http://localhost:8080/add', {
								name: name,
								email: email,
								password: password,
							})
							.then((response) => console.log(200));

						setRoute('/login');
					}
				});
		}
	};

	return (
		<div className='Login'>
			<h1 className='title'>Register</h1>
			<form onSubmit={handleSubmit}>
				<FormGroup controlId='name' bsSize='large'>
					<label>Name</label>
					<br />
					<FormControl
						type='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</FormGroup>
				{errors.username && errors.username.message}
				<FormGroup controlId='email' bsSize='large'>
					<label>Email</label>
					<br />
					<FormControl
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormGroup>
				{errors.email && errors.email.message}
				<FormGroup controlId='password' bsSize='large'>
					<label>Password</label>
					<br />
					<FormControl
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type='password'
					/>
				</FormGroup>
				<FormGroup controlId='password' bsSize='large'>
					<label>Password Again</label>
					<br />
					<FormControl
						value={passwordAgain}
						onChange={(e) => setPasswordAgain(e.target.value)}
						type='password'
					/>
				</FormGroup>
				<br></br>
				<Link to={route} onClick={() => regist()}>
					<Button
						className='button'
						block
						buttonSize='btn--wide'
						buttonColor='blue'
						type='submit'
					>
						Register
					</Button>
				</Link>
			</form>
			<div className='links'>
				<Link className='link' to='/login'>
					Login
				</Link>
			</div>
		</div>
	);
};

export default RegisterPage;
