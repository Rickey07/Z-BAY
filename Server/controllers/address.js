const Address = require("../models/address");
const User = require('../models/user');


exports.createAddress = async (req, res) => {
  try {
    const isAddressPresent = await Address.find({
      addressType: req.body.addressType,
    });
    console.log(isAddressPresent)
    if (Object.keys(isAddressPresent).length > 0) {
      return res
        .status(400)
        .json({ message: "The Address Already Exists", success: false });
    } else {
      const newAddress = await new Address(req.body).save();
      const address = await User.findByIdAndUpdate(req.body.userId,{$push:{addresses:newAddress?._id}},{new:true});
      return res
        .status(200)
        .json({ message: "Address Successfully Created", success: true ,newAddress});
    }
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.body.updatedDetails.id,
      req.body.updatedDetails,
      { new: true }
    );
    console.log(updatedAddress)
    return res
      .status(200)
      .json({
        message: "Address Updated Successfully!",
        success: true,
        updateAddress: updatedAddress,
      });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndDelete(req.body.id);
    return res
      .status(200)
      .json({ message: "Address Deleted Successfully!", success: true });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};

exports.getAddress = async (req, res) => {
  try {
    return res.status(200).json({address:req.address})
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};

exports.getAllAddress = async (req, res) => {
  try {
    const allAddress = await Address.find({userId:req.params.userId});
    console.log(allAddress);
    return res
      .status(200)
      .json({
        result:allAddress,
        success: true,
      });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};
