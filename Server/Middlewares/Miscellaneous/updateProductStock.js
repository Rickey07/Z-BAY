const Product = require('../../models/product');

module.exports =  updateProductStock  = async (req,res,next) => {
    const operations = req.body.order.products.map((product) => {
        return {
            updateOne:{
                filter:{_id:product._id},
                update:{$inc:{quantity:-product.quantity}}
            }
        }
    })

    Product.bulkWrite(operations,{},(err,products) => {
        if(err) {
            return res.status(500).json({
                error:"Bulk Operations Failed! Internal Server Error Occured",
                success:false,
                statusCode:500
            })
        }
        next()
    })
    
}