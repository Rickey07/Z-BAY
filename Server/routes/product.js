const express = require("express");
const router = express.Router();
const {createProduct}  = require("../controllers/product");
const { body } = require("express-validator");
const upload = require("../Utills/FileUploadHandler");


router.post(
  "/create",
//   [
//     body(
//       "name",
//       "Name should not be more than 32 characters or less than 6 characters"
//     ).isLength({ max: 32, min: 6 }),
//     body("category", "Category Should not be empty").isLength({min:1}),
//     body("saleprice","Sale Prie should not be empty").isLength({min:1}),
//     body("quantity","Quantity Should be at least 1").isLength({min:1})
//   ],
  upload.array("images"),
  createProduct
);




module.exports = router
