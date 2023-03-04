const Category = require("../models/category");
const { isSignedIn, isAdmin, isAuthenticated } = require("../Middlewares/auth");

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const newCategory = await category.save();
    if (!Object.values(newCategory).length) {
      res.json({
        error: "Internal Server Occured! 500 Please Try Again Later",
        statusCode: 502,
        success: false,
      });
    }
    res.json({
      message: `${newCategory.category_name} Created Successfully`,
      success: true,
      statusCode: 201,
    });
  } catch (error) {
    res.json({
      error: error,
      statusCode: 500,
      success: false,
    });
  }
};

// Get All Categories
exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find({}).limit(10);
    res.json({
      categories: allCategories,
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.json({
      categories: error,
      statusCode: 500,
      success: false,
    });
  }
};

// Get Specific Category

exports.getCategory = async (req, res) => {
  res.json(req.category);
};

// Update Category
exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: req.category._id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedCategory) {
      res.json({
        error: "Unable to Update Category",
        statusCode: 500,
        success: false,
      });
    }
    res.json({
      updatedCategory: updatedCategory,
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    res.json({
      error: "Internal Server Error Occured",
      statusCode: 500,
      success: false,
    });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete({
      _id: req.category._id
    });
    if (!deleteCategory) {
      res.json({
        error: "Unable to Delete Category",
        statusCode: 500,
        success: false,
      });
    }
    res.json({
      success: true,
      statusCode: 200,
      message: "Category Successfully Deleted",
    });
  } catch (error) {
    res.json({
      error: "Internal Server Error Occured",
      statusCode: 500,
      success: false,
    });
  }
};
