import React from "react";
import f6 from "../Assets/f6.jpeg";
import "../Components/Second.css";
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="second">
      <div className="sf">
        <img src={f6}></img>
      </div>
      <div className="seconddes">
        <h1>HANDMADE JEWELRY</h1>

        <p>
          Handcrafted jewelry is a symphony of art and craft, a delicate dance
          of metal, stone, and bead. Each piece is a unique creation, born from
          the vision and skill of the artist's hands.Handcrafted jewelry is more
          than just an adornment. It is a statement of personal style, a
          conversation starter, and a cherished heirloom. When you wear
          handcrafted jewelry, you are not just wearing a piece of metal or
          stone. You are wearing a piece of art, a piece of history, and a piece
          of the artist's soul.
        </p>        <Link id="link" to={"/about"}> 
        <button className="dbt">ABOUT US</button></Link>

      </div>
    </div>
  );
};

export default Second;
