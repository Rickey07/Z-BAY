const express = require("express");
const router = express.Router();
const  {getCategoryById}  = require("../Middlewares/category");
const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

// Params

router.param("categoryId",getCategoryById)

// Create Category

router.post("/create",createCategory)

// Get All Categories

router.get("/all",getAllCategories)

// Get Individual Category

router.get("/:categoryId",getCategory)


// Update Category

router.put("/update/:categoryId",updateCategory)

// Delete Category

router.delete("/delete/:categoryId",deleteCategory)



module.exports = router;