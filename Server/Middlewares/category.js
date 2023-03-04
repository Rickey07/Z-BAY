const Category = require('../models/category');

exports.getCategoryById = async (req,res,next,id) => {
    try {
        const category = await Category.findById(id)
        if(!Object.keys(category).length) {
            res.json({
                error:"Category Not Found",
                success:false,
                statusCode:400
            })
        }
        req.category = category;
        next();
    } catch (error) {
        res.json({
            error:"Internal Server Error Occured",
            success:false,
            statusCode:500
        })
    }
}