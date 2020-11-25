import React, {useEffect, useState, useContext } from "react";
import { div, input } from "react-bootstrap";
import "./LoginPage.css";
import { Button } from "../../../ui/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext"
import { useForm } from "react-hook-form";
import { SmsOutlined } from "@material-ui/icons";



const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName, 
      isLoggedIn, setIsLoggedIn, 
      contextEmail, setContextEmail,
      contextAddress, setContextAddress,
      contextPhoneNumber, setContextPhoneNumber,
      contextMobileNumber, setContextMobileNumber
       ] = useContext(UserContext);
    const [route, setRoute] = useState("/login");
    const { handleSubmit, register, errors } = useForm();


    const checkIfCanLogIn = (event) => {
      if (!isLoggedIn) {
        axios.post(`http://localhost:8080/login`, {"email": email, "password": password}, {withCredentials: true})
        .then((response) => {
          console.log(response.data);
          if (response.data != ""){ 
            setName(response.data.name);
            setContextAddress(response.data.address);
            setContextPhoneNumber(response.data.phoneNumber)
            setContextMobileNumber(response.data.mobileNumber)
            setContextEmail(email);
            setIsLoggedIn(true);
          }      
        })
    }
  }

	return (
		<div className='Login'>
			<h1 className='title'>Login</h1>

			<div>
				<div controlId='email' bsSize='large'>
					<label>Email</label>
					<br />
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errors.email && errors.email.message}
				</div>

				<div controlId='password' bsSize='large'>
					<label>Password</label>
					<br />
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<br></br>
				<Link to={'/'}>
					<Button
						className='button'
						block
						buttonSize='btn--wide'
						buttonColor='blue'
						onClick={checkIfCanLogIn}
					>
						Login
					</Button>
				</Link>
			</div>
			<div className='links'>
				<Link className='link' to='/register'>
					Register
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
