const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut } = require("../controllers/auth");
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("firstName", "First Name should be more than 6 characters").isLength({
      min: 6,
    }),
    body("lastName", "Last Name should be more than 4 characters").isLength({
      min: 4,
    }),
    body("email", "Correct Email Address is required").isEmail(),
    body(
      "encry_password",
      "Password should include at least 8 characters"
    ).isLength({ min: 8 }),
  ],
  signUp
);

router.post(
  "/login",
  [
    body("email", "Please Provide Valid Email Address")
      .isEmail()
      .normalizeEmail(),
    body("password", "Password Should be More than 8 characters").isLength({
      min: 8,
    }),
  ],
  signIn
);

router.get("/logout", signOut);

module.exports = router;
