const User = require("../models/user");

exports.getUserById = async (req, res, next, id) => {
  try {
    const user = await User.findOne({ _id: id }).populate("addresses").populate({path:"purchases",populate:{
      path:"address",
      model:"Address"
    }})
    if (!Object.keys(user).length) {
      res.json({
        error: "User Not Found",
        success: false,
        statusCode: 400,
      });
    }
    let newUser = JSON.parse(JSON.stringify(user));
    newUser._id = user._id.toHexString();
    req.user = newUser;
    next();
  } catch (error) {
    res.json({
      error: "Internal Server Error Occured",
      success: false,
      statusCode: 500,
    });
  }
};
