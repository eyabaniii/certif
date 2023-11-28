import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_product,
  get_productbycategorie,
} from "../../JS/Action/ActionProduct";
import ProductCard from "./ProductCard";
import "../Product/ProductList.css";
const ProductList = () => {
  const allproducts = useSelector((state) => state.ProductReducer.product);
  const [products, setProducts] = useState(allproducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_product());
  }, [dispatch]);
  const filter = (str) => {
    dispatch(get_productbycategorie(str));
    setProducts(allproducts);
  };
  const search = (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = allproducts.filter((product) =>
      product.name.toLowerCase().includes(searchString)
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <div className="filter">
        <span onClick={() => dispatch(get_product())}>All</span>
        <span onClick={() => filter("decor")}>Decor</span>
        <span onClick={() => filter("necklaces")}>Necklace</span>
        <span onClick={() => filter("earring")}>Earnings</span>
        <span onClick={() => filter("rings")}>Rings</span>
      </div>
      <input type="text" placeholder="search" onChange={(e) => search(e)} />
      <div className="Productlist">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
