const cart = require("../Models/cartModel");

module.exports.getCartItemsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userCart = await cart.findOne({ user: userId }).populate({
      path: "items.product",
      select: "name description photo price category",
    });

    if (!userCart) {
      return res.json([]);
    }

    return res.status(200).json(userCart.items);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.addItemToCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId } = req.body;

    let userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      userCart = new cart({ user: userId, items: [] });
    }

    const productIndex = userCart.items.findIndex(
      (item) => String(item.product) === productId
    );

    if (productIndex !== -1) {
      userCart.items[productIndex].quantity += 1;
    } else {
      userCart.items.push({ product: productId, quantity: 1 });
    }

    await userCart.save();

    return res.status(200).json(userCart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.updateCartItemQuantity = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    const userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = userCart.items.findIndex(
      (item) => String(item.product) === productId
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in the cart" });
    }

    userCart.items[productIndex].quantity = quantity;

    await userCart.save();

    return res.status(200).json(userCart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.deleteCartItem = async (req, res) => {
  try {
    const userId = req.params.userId; // Get user ID from route params
    const { productId } = req.body;
    const userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove the product from the cart items array
    userCart.items = userCart.items.filter(
      (item) => String(item.product) !== productId
    );

    await userCart.save();

    return res.status(200).json(userCart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.clearCart = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    userCart.items = [];

    await userCart.save();

    return res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
