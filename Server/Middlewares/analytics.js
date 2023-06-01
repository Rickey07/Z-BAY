const Order = require("../models/order");

exports.getOverAllStats = async (req, res) => {
  const totalSoldItems = (await Order.find({ status: "Delivered" })).length;
  const totalOrders = (await Order.find({})).length;
  const totalPayments = await Order.aggregate([
    { $group: {_id:null,amount: {$sum: "$amount" } } },
  ]);
  console.log(totalSoldItems, totalOrders, "Prabadya", totalPayments);
  res.status(200).json({
    statusCode: 200,
    status: true,
    data: [
      { totalSoldItems: totalSoldItems },
      { totalOrders: totalOrders },
      { totalPayments: totalPayments },
    ],
  });
};
