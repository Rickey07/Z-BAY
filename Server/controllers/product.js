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
    let imagesArray = []
    if(req.files) {
      imagesArray = req.files.map((eachImage) =>  {
        return  {
          imageName:eachImage.filename
        }
      })
    }
    const product = new Product({ ...req.body, images: imagesArray });
    product.Price = req.body.saleprice;
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

exports.getProduct = async (req, res) => {
  try {
    return res.status(201).json(req.product);
  } catch (error) {
    return res.status(500).json({
      error: error,
      success: false,
      statusCode: 500,
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const allProducts = await Product.find({}).populate({path:"category",select:"category_name"});
    if (allProducts.length === 0) {
      return res.status(200).json({
        error: "No Items Found",
        success: true,
        statusCode: 200,
        products:allProducts
      });
    }
    return res.status(200).json({
      products: allProducts,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
      success: false,
      statusCode: 500,
    });
  }
};

exports.updateProduct = async (req,res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      {_id:req.body._id},
      {$set:req.body},
      {new:true}
    )

    return res.status(200).json({
      updatedProduct:updatedProduct,
      message:"Product Has been Updated Successfully",
      success:true,
      statusCode:200
    })
  } catch (error) {
    return res.status(500).json({
      error: error,
      success: false,
      statusCode: 500,
    });
  }
}

exports.deleteProduct = async (req,res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.body._id);
    console.log(deletedProduct)
    return res.status(200).json({
      message:"Product has been deleted Successfully",
      statusCode:200,
      success:true
    })
  } catch (error) {
    return res.status(500).json({
      error:error,
      statusCode:500,
      success:false
    })
  }
}
