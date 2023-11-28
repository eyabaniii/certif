const order = require("../Models/orderModel"); // Assuming you have a model for orders

module.exports.getOrders = async (req, res) => {
  try {
    const orders = await order
      .find()
      .populate({
        path: "products.product", // Assuming 'products' is the field and 'product' is the reference in each object
        model: "product", // Replace 'product' with your Product model name
        select: "name description price", // Fields to select from the Product model
      })
      .exec();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.createOrder = async (req, res) => {
  const orderData = req.body;
  try {
    const newOrder = new order(orderData);
    await newOrder.save();
    return res.status(201).json({ message: "Order created", order: newOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const orderData = req.body; // Updated order data
  try {
    const updatedOrder = await order.findByIdAndUpdate(id, orderData, {
      new: true,
    });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res
      .status(200)
      .json({ message: "Order updated", order: updatedOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
