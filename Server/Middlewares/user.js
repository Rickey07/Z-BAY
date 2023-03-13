const User = require('../models/user');

exports.getUserById = async (req,res,next,id) => {
    try {
        const user = await User.findById(id);
        if(!Object.keys(user).length) {
            res.json({
                error:"User Not Found",
                success:false,
                statusCode:400
            })
        }
        req.user = user;
        next();
    } catch (error) {
        res.json({
            error:"Internal Server Error Occured",
            success:false,
            statusCode:500
        })
    }
}