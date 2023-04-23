const User = require("../models/user");

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}).populate("addresses");
    if (allUsers.length === 0) {
      return res.json({
        error: "No Users Found In DB",
        statusCode: 201,
        success: false,
      });
    }
    return res.status(200).json({
      users: allUsers,
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    return res.json({
      error: "Internal Server Error Occurred",
      statusCode: 500,
      success: true,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    if (req?.files?.fileName) {
      req.body.profilePic = req.files.fileName;
    }
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {
      $set: req.body,
    },{new:true});

    return res.status(200).json({
        updatedUser,
        message:"Account Updated Successfully",
        statusCode:200,
        success:true
    })

  } catch (error) {
    return res.status(500).json({
        error:`Internal Server Error Occured`,
        statusCode:500,
        success:false
    })
  }
};

exports.deleteUser = async (req,res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user._id)
        return res.status(201).json({
            messsage:"User Deleted Successfully",
            statusCode:201,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            error:"Internal Server Error Occured",
            statusCode:500,
            success:false
        })
    }
}

exports.getUser = async (req,res) => {
   return res.status(200).json({
    user:req.user,
    success:false,
    statusCode:200
    })
}
