import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get_byId } from "../../JS/Action/ActionProduct";
import "../Product/Details.css";
import {
  deleteproduct,

  get_product,
} from "../../JS/Action/ActionProduct";
import { Link } from "react-router-dom";
const Detail = () => {
  const nav=useNavigate()
  const { _id } = useParams();
  const product = useSelector((state) => state.ProductReducer.product);
  const dispatch = useDispatch();
  const handleDeleteProduct = async (_id) => { 
     await dispatch(deleteproduct(_id));
 
    await dispatch(get_product());window.location.reload();
        nav("/productList");
  };

  useEffect(() => {
    dispatch(get_byId(_id));
  }, [dispatch]);
  const user = useSelector((state) => state.userReducer.user);
  console.log(product._id)
  return (
    
    <div className="cardd">
      <div className="sf"><img className="card-p" src={product.photo} /></div> 
      <div className="card-counten">
      <h5>{product.name}</h5>
      <p>{product.description}</p>
      <h6>{product.price} TND</h6>
      <Link className="LL"  to={`/editproduct/${product._id}`}>
          <button className="dbt" >  Edit  </button>
        </Link>
        <Link className="LL"  to={"/productList"}>    <button className="dbt"
          variant="primary"
          onClick={() => handleDeleteProduct(product._id)}
        >
          delete
        </button> </Link>
    </div> </div>
  );
};

export default Detail;
