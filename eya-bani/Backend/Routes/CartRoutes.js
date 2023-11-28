const { Router } = require("express");
const {
  getCartItemsByUserId,
  addItemToCart,
  updateCartItemQuantity,
  deleteCartItem,
  clearCart,
} = require("../Controllers/CartController");

const cartrouter = Router();

cartrouter.get("/:userId", getCartItemsByUserId);
cartrouter.post("/add/:userId", addItemToCart);
cartrouter.put("/update/:userId", updateCartItemQuantity);
cartrouter.put("/delete/:userId", deleteCartItem);
cartrouter.delete("/clear/:userId", clearCart);

module.exports = cartrouter;
