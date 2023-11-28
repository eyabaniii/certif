import React, { useEffect, useState } from "react";
import "./addproduct.css";
import { useDispatch, useSelector } from "react-redux";
import { editproduct, get_byId, get_product } from "../../JS/Action/ActionProduct";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditProduct = () => {


  const nav = useNavigate();
  const { _id } = useParams();
  const oldprod = useSelector((state) => state.ProductReducer.product);
  console.log(oldprod);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_byId(_id));
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   await dispatch(editproduct(_id, product))
 
      .then(() => {
        toast.success("Product edited");

      })
      .catch((err) => {
        toast.error("error");

      });
      await dispatch(get_product());
      nav("/productList")
    
  };
console.log(product)
  return (
    <div className="product-form">
      <h2>Edit a Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            defaultValue={oldprod.name}
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            defaultValue={oldprod.description}
            id="description"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            defaultValue={oldprod.price}
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">category</label>
          <select
            defaultValue={oldprod.category}
            id="category"
            name="category"
            onChange={handleChange}
          >
            <option value="decor">decor</option>
            <option value="rings">rings</option>
            <option value="earring">earring</option>
            <option value="necklaces">necklaces</option>
          </select>
        </div>

        <Link className="LL"  >
          
        <button  className="dbt" onClick={(e)=>handleSubmit(e)}>Edit Product</button>
        </Link>

      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default EditProduct;
