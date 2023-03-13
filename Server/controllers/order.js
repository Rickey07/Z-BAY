const Order = require('../models/order');

exports.getAllOrders = async () => {
    try {
        const allOrders = await Order.find({})
            return res.status(200).json({
                allOrders,
                success:true,
                statusCode:200
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            statusCode:500,
            error:`Internal Server Error Occured ${error.slice(0,1)}`
        })
    }
    
}


exports.placeOrder = async () => {
    try {
        req.body.order = req.profile
        const newOrder = new Order(req.body.order)
        const savedOrder = await newOrder.save();
        return res.status(200).json({
            order:savedOrder,
            statusCode:200,
            success:false
        })
    } catch (error) {
        return res.status(500).json({
            error:"Internal Server Error Occured",
            success:false,
            statusCode:500
        })
    }
}


// exports.updateOrderStatus = async () => {
//     try {
//         const updatedOrder = Order.findByIdAndUpdate(req.body._id,)
//     } catch (error) {
        
//     }
// }