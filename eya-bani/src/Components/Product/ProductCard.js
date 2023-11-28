import { get_byId } from "../../JS/Action/ActionProduct";
import { useDispatch } from "react-redux";
import "../Product/ProductCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function ProductCard({ product }) {
  const userid = jwtDecode(localStorage.getItem("token")).id;
  const dispatch = useDispatch();
  const addtocart = (user, product) => {
    axios
      .post("http://localhost:8000/api/cart/add/" + user, {
        productId: product._id,
      })
      .then(() => {
        console.log("ok");
      });
  };
  return (
    <div className="card">
      <div className="sf">
        <img className="card-p" src={product.photo} />
      </div>
      <div className="card-countent">
        <h5>{product.name}</h5>
        <h6> {product.price} TND</h6>
        <Link className="LL" to={`/Details/${product._id}`}>
          <button
            className="dbt"
            onClick={() => dispatch(get_byId(product._id))}
          >
            Details
          </button>
        </Link>
        <button onClick={() => addtocart(userid, product)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
