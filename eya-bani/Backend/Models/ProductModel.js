const mongoose = require("mongoose");
//create shema
const schema = mongoose.Schema; //schema : chemain

const productSchema = new schema(
  {
    name: {
      type: String,
      required: true, // chine obligatoir}
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
      required: true, // chaine obligatoir}
    },
    price: {
      type: Number,
      required: true, // chaine obligatoir}
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("product", productSchema); // nouveau nom product pour exporter  productSchema
