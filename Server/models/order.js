const mongoose =  require('mongoose');
const {Schema}  = mongoose
const {ObjectId} = Schema
const orderSchema = new Schema({
    products:{
        type:Array
    },
    transaction_id:{
        type:String
    },
    order_id:{
        type:String
    },
    amount:{
        type:Number
    },
    status:{
        type:String,
        default:"",
        enum:["Cancelled","Delivered","Shipped","Recieved"]
    },
    updated:{
        type:Date
    },
    user:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Order = mongoose.Schema("Order",orderSchema)

module.exports = Order;