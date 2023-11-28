import React, { useEffect, useState } from "react";
import Orderdetails from "./Orderdetails";
import axios from "axios";

const Myshops = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/order").then((res) => {
      setOrders(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Your Orders</h1>
      <Orderdetails orders={orders} />
    </div>
  );
};

export default Myshops;
