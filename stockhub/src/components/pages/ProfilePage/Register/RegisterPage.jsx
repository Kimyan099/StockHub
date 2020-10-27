import React, { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import "./RegisterPage.css";
import { Button } from "../../../ui/Button";


const RegisterPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Login">
          <h1 className="title" >Registration / Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <label>Email</label>
            <br/>
            <FormControl
              autoFocus
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
          <br></br>
          <Button className="button" block buttonSize='btn--wide' buttonColor='blue'  type="submit">
            Login
          </Button>
        </form>
      </div>
    );
}


export default RegisterPage;