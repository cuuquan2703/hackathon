import React, { useRef, useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Register = () => {
  const [check, setCheck] = useState(true);
  const userref = useRef();
  const passref = useRef();
  const repassref = useRef();
  const history = useNavigate()
  const checkMatch = (a, b) => {
    return a == b;
  };

  const Submit = (e) => {
    e.preventDefault();
    const username = userref.current.value;
    const password = passref.current.value;
    const repass = repassref.current.value;

    if (!checkMatch(password, repass)) {
      setCheck(false);
    } else {
      console.log({
        username: userref.current.value,
        password: passref.current.value,
        retypepassword: repassref.current.value,
      });
    }
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
          <h3>Register</h3>
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
            {!check && (
              <p className="alert">
                password and retype password aren't matching
              </p>
            )}
          </div>
          <div className="input">
            <label htmlFor="Retypepassword">password</label>
            <input
              ref={repassref}
              type="password"
              id="Retypepassword"
              className="password"
            />
            {!check && (
              <p className="alert">
                password and retype password aren't matching
              </p>
            )}
          </div>
          <button type="submit" className="Button_regis">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;