import React from "react";
import four1 from "../Assets/four1.jpeg";
import four2 from "../Assets/four2.jpeg";
import four3 from "../Assets/four3.jpeg";
import "../Components/Four.css";
import { Link } from "react-router-dom";

const Four = () => {
  return (
    <div className='four'>
   
        <div className='four1'> 
        <h2>Give a gift card!
</h2>
<p>Gift cards are a popular gift choice for many people. They are convenient and versatile, and they allow the recipient to choose their own gift. However, it is important to be aware of the potential drawbacks of gift cards before giving one.</p>
<Link id="link" to={"/contact"}> 
        <button className="dbt">CONTACT US</button>
         </Link>
        
</div>
<div className='four2'> 
<div className="fouri">
        <img src={four2}></img>
      </div>
      <div className="fouri">
        <img src={four1}></img>
      </div>
      <div className="fouri">
        <img src={four3}></img>
      </div>
</div>

    </div>
  )
}

export default Four
