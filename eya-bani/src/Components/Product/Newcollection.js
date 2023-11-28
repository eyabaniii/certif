import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Product/ProductList.css";
import { getlast3 } from "../../JS/Action/ActionProduct";
import ProductCard from "./ProductCard";

const Newcollection = () => {
  const products = useSelector((state) => state.ProductReducer.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getlast3());
  }, [dispatch]);
  console.log(products);
  return (
    <div>
      <div className="Productlist">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Newcollection;
