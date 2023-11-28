import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { get_product } from "../../JS/Action/ActionProduct";
import { logOut } from "../../JS/Action/ActionUser";
import axios from "axios";
import Loading from "./Loading";
import "./Profile.css";

const Profile = () => {
  const [load, setload] = React.useState(false);
  const errors = useSelector((state) => state.userReducer.error);
  const token = localStorage.getItem("token");
  const userid = jwtDecode(token).id;
  const [user, setuser] = React.useState({
    username: "",
    email: "",
  });
  useEffect(() => {
    setload(true);
    axios
      .get("http://localhost:8000/api/user/getbyid/" + userid)
      .then((response) => {
        setuser(response.data.users);
      });
    setload(false);
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="profile">
      {load ? (
        <Loading />
      ) : (
        <div className="prof1"> <p>Heloo! <span>{user.username}</span>   welcome to your account
        </p>
   
          <Link className="LL"  to="/auth">
            <button className="dbt" onClick={() => dispatch(logOut())}>logout</button>
          </Link>
       
        </div>
      )}
             <Link className="LL"  to="/addproduct">
            <button className="dbt" >Add Product</button>
          </Link>
    </div>
  );
};

export default Profile;
