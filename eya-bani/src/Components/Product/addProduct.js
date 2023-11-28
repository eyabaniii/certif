import React, { useState } from "react";
import "./addproduct.css";
import { useDispatch } from "react-redux";
import { add_product } from "../../JS/Action/ActionProduct";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const nav = useNavigate();
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProduct({
      ...product,
      image: imageFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("photo", product.image);
    dispatch(add_product(formData))
      .then(() => {
        toast.success("Product added");
        nav("/productList");
      })
      .catch((err) => {
        toast.error("error");
      });
  };

  return (
    <div className="addprod">
    <div className="product-form">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            value={product.category}
            id="category"
            name="category"
            onChange={handleChange}
          >
          <option value="category">Category</option>
            <option value="rings">Rings</option>
            <option value="earring">Earring</option>
            <option value="necklaces">Necklaces</option>    <option value="decor">Decor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input 
            type="file"
            id="image"
            name="image"
            accept="image/*" // Allow only image files
            onChange={handleImageChange}
          />
        </div>

        <button className="dbt" type="submit">Add Product</button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div> </div>
  );
};

export default AddProduct;
