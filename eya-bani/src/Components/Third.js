import React from "react";
import f5 from "../Assets/f5.jpeg";

import "../Components/Third.css";
import { Link } from "react-router-dom";

const Third = () => {
  return (
    <div className="third">
      <div className="thirddes">
        <h1>WE ARE PASSIONATE ABOUT JEWELRY!</h1>
        <p>
          Let us help you find the perfect piece of jewelry to celebrate a
          special occasion, express your personal style, or simply add a touch
          of glamour to your everyday look. We are passionate about jewelry and
          we want to share that passion with you. We are always here to answer
          your questions and help you find the perfect piece for you
        </p>        <Link id="link" to={"/contact"}> 
        <button className="dbt">CONTACT US</button>
         </Link>
        
      </div>

      <div className="sf">
        <img src={f5}></img>
      </div>
    </div>
  );
};

export default Third;
