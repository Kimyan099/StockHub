import React, { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import "./LoginPage.css";
import { Button } from "../../../ui/Button";
import { Link } from "react-router-dom";
import axios from "axios";




const RegisterPage = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [isExist, setIsExist] = useState(false)

    const isUserExist = (email) => {
      axios.post(`http://localhost:8080/user`, null, {params:{email}})
        .then(response => {
          console.log(response.data)
          setIsExist(response.data);
        });
    }

    const register = () => {
      if (password === passwordAgain && password.length > 0 && email.length > 0 && name.length > 0){
        isUserExist(email)
        if(!isExist){
          axios.post('http://localhost:8080/add', {name : name, email : email, password : password})
          .then(response => console.log(200));
        }
      }
    }




    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Login">
          <h1 className="title" >Register</h1>
        <form onSubmit={handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
            <label>Name</label>
            <br/>
            <FormControl
              type="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
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
          <Link to={"/login"} onClick={() => register()}>
          <Button className="button" block buttonSize='btn--wide' buttonColor='blue'>
            Register
          </Button>
          </Link>
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