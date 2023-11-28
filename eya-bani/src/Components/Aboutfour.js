import React from 'react'
import { Link } from "react-router-dom";
import "../Components/Aboutfour.css";
const Aboutfour = () => {
  return (
    <div className='aboutfour'>
       
        <h1>Want a unique piece?</h1>
        <p>BOOK A CALL AND TELL ME YOUR STORY</p>
      <Link id="link" to={"/contact"}> 
        <button className="dbt">CONTACT US</button>
         </Link>

  
    </div>
  )
}

export default Aboutfour
