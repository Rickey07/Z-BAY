const mongoose = require('mongoose');
const {Schema} =  mongoose;
const categorySchema = new Schema({
    category_name:{
        type:String,
        length:{max:32},
        required:true
    },
    categoryImage:{
        type:String
    }
})

const Category = mongoose.model("Category",categorySchema);


module.exports = Category;

