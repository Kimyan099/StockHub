import React, { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import "./LoginPage.css";
import { Button } from "../../../ui/Button";
import { Link } from "react-router-dom";
import axios from "axios";




const RegisterPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const register = () => {
      if (password === passwordAgain){
        console.log(200)
        axios.post('http://localhost:8080/add', {name : "test", email : email, password : password})
            .then(response => console.log(response.data));
      }
    }

    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Login">
          <h1 className="title" >Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <label>Email</label>
            <br/>
            <FormControl
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <label>Password</label>
            <br/>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <label>Password Again</label>
            <br/>
            <FormControl
              value={passwordAgain}
              onChange={e => setPasswordAgain(e.target.value)}
              type="password"
            />
          </FormGroup>
          <br></br>
          <Button className="button" block buttonSize='btn--wide' buttonColor='blue'  onClick={register}>
            Register
          </Button>
        </form>
        <div className="links">
            <Link className="link" to="/login">
                Login
            </Link>
        </div>
      </div>
    );
}


export default RegisterPage;