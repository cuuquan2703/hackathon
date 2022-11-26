import React, { useRef,useContext } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {AuthContext} from "../../context/AuthContext";

const LoginForm = () => {
  const userref = useRef();
  const passref = useRef();
  const history = useNavigate()
  const auth = useContext(AuthContext);
  console.log("check:L",auth)
  const Submit = (e) => {
    e.preventDefault();
    console.log({
      username: userref.current.value,
      password: passref.current.value,
    });
    const data = auth.Login({
      username: userref.current.value,
      password: passref.current.value,
    })
    history('/home')
  };

  return (
    <div className="parent">
      <div className="header" onClick={()=>{history("/")}}>
        <b>Eco</b>Book
      </div>
      <div className="form_container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="form" onSubmit={Submit}>
          <h3>Login</h3>
          <div className="input">
            <label htmlFor="username">username</label>
            <input
              ref={userref}
              type="text"
              id="username"
              className="username"
            />
          </div>
          <div className="input">
            <label htmlFor="password">password</label>
            <input
              ref={passref}
              type="password"
              id="password"
              className="password"
            />
          </div>
          <button type="submit" className="Button">
            Sign In
          </button>
          <button className="Button_SignUp" onClick={()=>{history("/register")}}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;