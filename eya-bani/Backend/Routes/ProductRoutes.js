const express = require("express");
const multer = require("multer");
const {
  addProduct,
  getProducts,
  getById,
  deleteProduct,
  updateProduct,
  getProductsbycate,
  getLastThreeAddedProducts,
} = require("../Controllers/ProductControllers");
const fileUpload = multer();

// require router
const router = express.Router();
// add new product
router.post("/addproduct", fileUpload.single("photo"), addProduct);
// get all product

router.get("/get_products", getProducts);
router.get("/get_products/last3", getLastThreeAddedProducts);
router.get("/get_products/:category", getProductsbycate);

//  get product by id
router.get("/get_byId/:_id", getById); // _id de url de page
// delete

router.delete("/deleteproduct/:_id", deleteProduct);

// get by id and edit put: modification
router.put("/editproduct/:_id", updateProduct);

module.exports = router;
