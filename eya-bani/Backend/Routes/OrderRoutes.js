const { Router } = require("express");
const {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../Controllers/OrderController");

const orderrouter = Router();

orderrouter.get("/", getOrders);
orderrouter.get("/:id", getOrderById);
orderrouter.post("/", createOrder);
orderrouter.put("/:id", updateOrder);
orderrouter.delete("/:id", deleteOrder);

module.exports = orderrouter;
