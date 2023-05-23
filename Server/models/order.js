const mongoose =  require('mongoose');
const {Schema}  = mongoose
const {ObjectId} = Schema
const orderSchema = new Schema({
    products:{
        type:Array,
        default:[]
    },
    transaction_id:{
        type:String
    },
    address:{
        type:ObjectId,
        ref:'Address'
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

const Order = mongoose.model("Order",orderSchema)

module.exports = Order;