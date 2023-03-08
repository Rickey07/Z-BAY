const Product = require('../models/product');


exports.getProductById = async (req,res,next,id) => {
    try {
        const product = await Product.findById(id).populate('category',"category_name")
        if(product.error) {
            return res.status(400).json({
                error:"Product Not Found! :(",
                success:false,
                statusCode:500
            })
        }
        req.product =  product
        next() 
    } catch (error) {
        return res.status(500).json({
            error:error,
            message:"Product Not Found",
            success:false,
            statusCode:500
        })
    }
}