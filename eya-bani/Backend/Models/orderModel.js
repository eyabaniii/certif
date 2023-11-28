const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    orderStatus: {
      type: String,
      default: "Pending",
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    shippingDeadline: {
      type: Date,
      default: function () {
        const threeDaysFromNow = new Date();
        threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
        return threeDaysFromNow;
      },
    },
    total: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
