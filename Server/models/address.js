const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    fullName:{
        type:String,
    },
    email:{
        type:String
    },
    addressType:{
        type:String,
        unique:true
    },
    addressLine1:{
        type:String
    },
    contactNo:{
        type:String
    },
    addressLine2:{
        type:String
    },
    country:{
        type:String
    },
    zipcode:{
        type:String
    },
    city:{
        type:String
    },
    landmark:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

const Address = mongoose.model("Address",addressSchema)

module.exports = Address