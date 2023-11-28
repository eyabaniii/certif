const product = require("../Models/ProductModel");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

cloudinary.config({
  cloud_name: "drxdmkbe3",
  api_key: "381854711392789",
  api_secret: "PbPxQGLNk_FIwV3E8s9Q0-lx-nI",
});
exports.addProduct = async (req, res) => {
  try {
    const { name, description, category, price } = req.body;
    let streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    async function upload(req) {
      let result = await streamUpload(req);
      return result;
    }

    result = await upload(req);
    const newProduct = new product({
      name,
      description,
      photo: result.url,
      price,
      category,
    });
    await newProduct.save();
    res.status(200).send({ msg: "product added successfuly", newProduct });
  } catch (error) {
    res.status(400).send({ msg: "cannot add product", error }); // erreur client
  }
};

exports.getProducts = async (req, res) => {
  // appel tous les products
  try {
    const products = await product.find();
    res.status(200).send({ msg: "product found successfuly", products });
  } catch (error) {
    res.status(500).send({ msg: "error on getting all product", error }); // erreur client
  }
};

exports.getProductsbycate = async (req, res) => {
  // appel tous les products
  try {
    const products = await product.find({ category: req.params.category });
    res.status(200).send({ msg: "product found successfuly", products });
  } catch (error) {
    res.status(500).send({ msg: "error on getting all product", error }); // erreur client
  }
};

exports.getById = async (req, res) => {
  // appel par id
  try {
    const { _id } = req.params; //  lien de id

    const products = await product.findById({ _id });
    if (!products) {
      res.status(500).send({ msg: "error non valide " }); // erreur client
    } else {
      res.status(200).send({ msg: "product found successfuly", products });
    }
  } catch (error) {
    res.status(500).send({ msg: "error on getting  product id", error }); // erreur client
  }
};

exports.deleteProduct = async (req, res) => {
  // appel tous les products
  try {
    const { _id } = req.params; //  lien de id
    await product.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "deleted successfuly" });
  } catch (error) {
    res.status(500).send({ msg: "error on delete product", error }); // erreur client
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const newProduct = req.body;

    const products = await product.updateOne({ _id }, { $set: newProduct });
    // product.getByIdAndEdit({_id},newProduct)   ou bien
    res.status(200).send({ msg: "product updated successfuly", newProduct });
  } catch (error) {
    res.status(400).send({ msg: "cannot add product", error }); // erreur client
  }
};

exports.getLastThreeAddedProducts = async (req, res) => {
  try {
    const products = await product
      .find()
      .sort({ createdAt: -1 })
      .limit(3)
      .exec();

    return res.send({ products });
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
