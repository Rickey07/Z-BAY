const Order = require("../models/order");
const User = require("../models/user");

exports.getOverAllStats = async (req, res) => {
  const totalSoldItems = (await Order.find({ status: "Delivered" })).length;
  const totalUser = (await User.find({})).length;
  const totalOrders = await Order.find({});
  const totalPayments = await Order.aggregate([
    { $group: { _id: null, amount: { $sum: "$amount" } } },
  ]);
  res.status(200).json({
    statusCode: 200,
    status: true,
    data: {
      totalSoldItems,
      totalOrders: totalOrders.length,
      totalPayments,
      totalUser,
    },
  });
};
