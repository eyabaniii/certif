import React from "react";

const Orderdetails = ({ orders }) => {
  return (
    <div>
      <h2>Order Details</h2>
      {orders?.map((order) => (
        <div key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <p>Date: {new Date(order.orderDate).toLocaleString()}</p>
          <p>Status: {order.orderStatus}</p>
          <ul>
            {order.products?.map((item) => (
              <li key={item._id}>
                <a>{item.product.name}</a> - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <p>Total Price: {order.total} TND </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Orderdetails;
