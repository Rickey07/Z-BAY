const Order = require("../models/order");
const User = require("../models/user");

exports.getAllOrders = async () => {
  try {
    const allOrders = await Order.find({});
    return res.status(200).json({
      allOrders,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      error: `Internal Server Error Occured ${error.slice(0, 1)}`,
    });
  }
};

exports.placeOrder = async (req,res) => {
  try {
    const newOrder = new Order(req.body.order);
    const savedOrder = await newOrder.save();
    const updatedOrderInUserAccount = await User.findByIdAndUpdate({_id:req.body.order.user},{$push:{purchases:savedOrder._id}},{new:true})
    return res.status(200).json({
      order: savedOrder,
      statusCode: 200,
      success: false,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: "Internal Server Error Occured",
      success: false,
      statusCode: 500,
    });
  }
};

exports.updateOrderStatus = async () => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      { _id: req.order._id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      message: "Order Updated Successfully",
      success: true,
      updatedOrder,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error Occured`,
      success: false,
      statusCode: 500,
    });
  }
};

exports.deleteOrderStatus = async () => {
    try {
        const  deletedOrder = await Order.findByIdAndDelete(req.body._id);
        return res.status(200).json({
            message:"Order Deleted Successfully",
            success:true,
            statusCode:200
        })
    } catch (error) {
        return res.status(200).json({
            message:`Internal Server Error Occured ${error}`,
            success:true,
            statusCode:200
        })
    }
}
