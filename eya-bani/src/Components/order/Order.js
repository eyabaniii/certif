import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
const calculateOrderTotal = (orderItems) => {
  let orderTotal = 0;
  for (const item of orderItems) {
    const { product, quantity } = item;
    const price = parseFloat(product.price);

    if (!isNaN(price)) {
      orderTotal += price * quantity;
    } else {
      console.error(`Invalid price for product: ${product._id}`);
    }
  }

  return orderTotal;
};
const Order = () => {
  const [cart, setcart] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const userid = jwtDecode(token).id;
    axios
      .get("http://localhost:8000/api/cart/" + userid)
      .then((res) => {
        setcart(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const order = () => {
    const userid = jwtDecode(token).id;
    const transformedCartItems = cart.map(({ product, quantity }) => ({
      product: product._id,
      quantity,
    }));
    axios
      .post("http://localhost:8000/api/order/", {
        customer: userid,
        products: transformedCartItems,
        total: calculateOrderTotal(cart),
      })
      .then(() => {
        axios
          .delete("http://localhost:8000/api/cart/clear/" + userid)
          .then(() => {
            window.location.reload();
          });
      });
  };

  return (
    <div>
      {cart.map((el) => (
        <div key={el._id}>
          <img src={el.product.photo} style={{ width: "150px" }} />
          <p> {el.product.name}</p>
          <p>quantity: {el.quantity}</p>
          <p>Price total : {el.quantity * el.product.price}</p>
        </div>
      ))}
      <button onClick={() => order()}>Lauch order</button>
    </div>
  );
};

export default Order;
