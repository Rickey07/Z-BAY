const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut } = require("../controllers/auth");
const {getUserById} = require('../Middlewares/user')
const {getAllUsers,getUser,deleteUser,updateUser} = require('../controllers/user')
const {isSignedIn, isAuthenticated, isAdmin} = require('../Middlewares/auth')
const { body } = require("express-validator");


router.param(":userId",getUserById)

router.post(
  "/register",
  [
    body("firstname", "First Name should be more than 6 characters").isLength({
      min: 6,
    }),
    body("lastname", "Last Name should be more than 4 characters").isLength({
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


router.put('/update/:userId',isSignedIn,isAuthenticated,updateUser)

router.delete('/delete/:userId',isSignedIn,deleteUser)

router.get('/getAll/:userId',isAdmin,getAllUsers)

router.get("/user/:userId",getUser)

router.get("/logout", signOut);

module.exports = router;
