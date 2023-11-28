
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import "../Components/Six.css";

import { Link, useNavigate } from "react-router-dom";
import { register } from "../JS/Action/ActionUser.js";


const Six = () => {
  const [newUser, setNewUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });


  const dispatch = useDispatch();
  const handleNewUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const nav = useNavigate();
  return (
    <div className="Six">
<h1>JOIN MY LIST!

</h1>
<p>
WE SHARE YOU EXCLUSIVE CONTENT EVERY WEEK</p>
<div className="join2">  <input
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
                <button className="dbt"
                  onClick={() => {
                    dispatch(register(newUser)).then(() => {
                      nav("/profile");
                    });
                  }}
                >
                  Sign Up
                </button>
              </Link>
</div>
            
            <p>Join our list to receive exclusive information about our new products and services, as well as special offers and member-only discounts!</p>

          </div>

        
  );
};
export default Six;
