const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signOut = (req, res) => {
  res.clearCookie("token");
  res.send("User Successfully signedOut");
};

exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), statusCode: 400, success: false });
  }

  try {
    if (await User.findOne({ email: req.body.email }))
      return res.status(400).json({
        error: "User Already exists with this email",
        statusCode: 400,
        success: false,
      });
    console.log(User.securePassword);
    const user = new User(req.body);
    // Applying Virtual Setter to encryptThePassword
    user.password = req.body.encry_password;
    const newUser = await user.save();
    if (!Object.values(newUser).length)
      return res.status(500).json({
        error: "Internal Server Error Occured! Please Try again Later",
        statusCode: 500,
        success: false,
      });
    return res.status(200).json({
      message: "You're now successfully registered! Please Login",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.signIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array(), statusCode: 400, success: false });
  }
  try {
    const { email, password } = req.body;
    console.log(email);
    const user = await User.findOne({email: email}).exec();
    console.log(user);
    // Check if the User Exits with given Email Id or Not
    if (!user) {
      return res.status(400).json({
        error: "User Account Not Found with Given Email Id",
        statusCode: 400,
        success: false,
      });
    }

    // Check  if the email and password is correct
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password doesnt't match",
        statusCode: 401,
        success: false,
      });
    }

    // Create  Token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      {algorithm:"HS256"},
    );
    console.log(token);

    // Put Token In Cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    // Send response to the front-end
    const { _id, name, role } = user;
    return res.status(200).json({
      userDetails: {
        token,
        name,
        _id,
        email: user.email,
        role,
      },
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal Server Error Occured",
      statusCode: 500,
      success: false,
    });
  }
};

