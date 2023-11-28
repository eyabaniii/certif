import "./Login.css";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../../JS/Action/ActionUser";
import toast, { Toaster } from "react-hot-toast";

const LoginRegister = () => {
  const [newUser, setNewUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleNewUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const nav = useNavigate();
  return (
    <div className="loginp">
      <div className="sign">
        <div className="main1">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form className="formec">
              <label htmlFor="chk" aria-hidden="true">
                Sign Up
              </label>
              <input
                type="text"
                name="username"
                onChange={(e) => handleNewUser(e)}
                placeholder="UserName"
                required=""
              />
              <input
                type="email"
                name="email"
                onChange={(e) => handleNewUser(e)}
                placeholder="Email"
                required=""
              />
              <input
                type="password"
                name="password"
                onChange={(e) => handleNewUser(e)}
                placeholder="Password"
                required=""
              />
              <Link className="LL"  id="link">
                <button
                  onClick={() => {
                    dispatch(register(newUser)).then(() => {
                      nav("/profile");
                    });
                  }}
                >
                  Sign Up
                </button>
              </Link>

              <div className="check">
                <input className="cb" type="checkbox" />
                <label>I accept the privacy policy</label>
              </div>
            </form>
          </div>

          <div className="login">
            <form className="formec">
              <label htmlFor="chk" aria-hidden="true">
                Sign In
              </label>
              <input
                name="username"
                onChange={(e) => handleUser(e)}
                placeholder="UserName"
                required=""
              />

              <input
                type="password"
                placeholder="Password"
                required=""
                name="password"
                onChange={(e) => handleUser(e)}
              />
              <Link className="LL" >
                <button
                  onClick={() => {
                    dispatch(login(user)).then(() => {
                      nav("/profile");
                    });
                  }}
                >
                  Sign In
                </button>
              </Link>
              <div className="check">
                <input className="cb" type="checkbox" />
                <label>Remember me</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default LoginRegister;
