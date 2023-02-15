const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        ref:'category',
        required:true
    },
    saleprice:{
        type:Number,
        required:true
    },
    discountPercentage:{
        type:String
    },
    actualPrice:{
        type:Number,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    }
})