const express = require("express");
const router = express.Router();
const { getCategoryById } = require("../Middlewares/category");
const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");
// const multer = require("multer");
const upload = require("../Utills/FileUploadHandler");
const { isAuthenticated, isSignedIn, isAdmin } = require("../Middlewares/auth");

// Params

router.param("categoryId", getCategoryById);

// Create Category

router.post(
  "/create",
  upload.single("image"),
  // isSignedIn,
  // isAuthenticated,
  // isAdmin,
  createCategory
);

// Get All Categories

router.get("/all", getAllCategories);

// Get Individual Category

router.get("/:categoryId", getCategory);

// Update Category

router.put("/update/:categoryId", updateCategory);

// Delete Category

router.delete("/delete", deleteCategory);

module.exports = router;
