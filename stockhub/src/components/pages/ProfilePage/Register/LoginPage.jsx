import React, {useEffect, useState, useContext } from "react";
import { div, input } from "react-bootstrap";
import "./LoginPage.css";
import { Button } from "../../../ui/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext"



const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("test");
    const [name, setName] = useContext(UserContext);



    function handleSubmit(event) {
      event.preventDefault();
    }

    const checkIfCanLogIn = () => {
      axios.post(`http://localhost:8080/login`, null, {params: {email, password}})
      .then((response) => {
        console.log(response.data);
        setUserName(response.data);
        setName(response.data);
        //props.changeLonggedInUser().bind(userName);
      })
  }

  
    return (
      <div className="Login">
          <h1 className="title" >Login</h1>
          
        <form onSubmit={handleSubmit}>
          <div controlId="email" bsSize="large">
            <label>Email</label>
            <br/>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div controlId="password" bsSize="large">
            <label>Password</label>
            <br/>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <br></br>
          <Link to={"/login"} >
          <Button className="button" block buttonSize='btn--wide' buttonColor='blue' onClick={() => checkIfCanLogIn()}>
            Login
          </Button>
          </Link>
        </form>
        <div className="links">
            <Link className="link" to="/register">
                Register
            </Link>
        </div>
      </div>
    );
}


export default LoginPage;