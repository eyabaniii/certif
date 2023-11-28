import Carousel from "react-bootstrap/Carousel";
import ab1 from "../Assets/ab1.jpeg";
import ab2 from "../Assets/ab2.jpeg";
import ab3 from "../Assets/ab3.jpeg";
import ab from "../Assets/ab.jpeg";
import "../Components/About.css";

function About() {
  return (
    <div className="about">
    

      <div className="firstdes">
        <h1>
The AYOUTA JEWELRY STORE WORKSHOP</h1>
        <p>DESIGNER OF FINE STONE JEWELRY</p>
        <p>
        A fine stone jewelry designer is a master of their craft, combining creativity, technical expertise, and attention to detail to create truly stunning pieces of jewelry. From the selection of the perfect gemstones to the intricate setting of each stone, every detail is carefully considered to create a finished product that is both fashionable and timeless.


        </p>

  
      </div>  <div className="fcc">
        <Carousel id="carousel">
          <Carousel.Item className="ci" interval={1000}>
            <img src={ab1} />
          </Carousel.Item>
          <Carousel.Item className="ci" interval={1000}>
            <img src={ab2} />
          </Carousel.Item>
          <Carousel.Item className="ci">
            <img src={ab3} />
          </Carousel.Item>
        </Carousel>
        <div className="fim">
          <img src={ab}></img>
        </div>
      </div>
    </div>
  );
}

export default About;
