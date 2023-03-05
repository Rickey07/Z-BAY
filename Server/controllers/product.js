const Product = require("../models/product");
const { validationResult } = require("express-validator");

exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      statusCode: 400,
      success: false,
    });
  }
  try {
    const product = new Product({ ...req.body, images: req.files.fileName });
    console.log(req.body.saleprice,req.body.discountPercentage)
    product.Price = (req.body.saleprice);
    const newProduct = await product.save();
    if (!Object.keys(newProduct).length) {
      return res.json({
        error: "Internal Server Error Occured",
        statusCode: 500,
        success: false,
      });
    }
    return res.json({
      message: `Product ${req?.body?.name} has been successfully created`,
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    return res.json({
      error: `Internal Server Error Occured ${error}`,
      statusCode: 500,
      success: false,
    });
  }
};
