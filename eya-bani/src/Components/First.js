import Carousel from "react-bootstrap/Carousel";
import f1 from "../Assets/f1.jpeg";
import f2 from "../Assets/f2.jpeg";
import f3 from "../Assets/f3.jpeg";
import f4 from "../Assets/f4.jpg";
import "../Components/First.css";
import { Link } from "react-router-dom";

function First() {
  return (
    <div className="first">
      <div className="fcc">
        <Carousel id="carousel">
          <Carousel.Item className="ci" interval={1000}>
            <img src={f1} />
          </Carousel.Item>
          <Carousel.Item className="ci" interval={1000}>
            <img src={f2} />
          </Carousel.Item>
          <Carousel.Item className="ci">
            <img src={f3} />
          </Carousel.Item>
        </Carousel>
        <div className="fim">
          <img src={f4}></img>
        </div>
      </div>

      <div className="firstdes">
        <h1>FINE STONE JEWELRY AND TALISMANS</h1>
        <p>AYOUTA,JEWELRY DESIGNER IN TUNIS </p>
        <p>
          Fine stone jewelry and talismans are objects that are believed to
          bring good luck, to the wearer.they are two beautiful and meaningful
          ways to express your personal style and beliefs.
        </p>
        <Link id="link" to={"/Productlist"}> 
         <button className="dbt">VIEW Collection</button>
         </Link>
  
      </div>
    </div>
  );
}

export default First;
