const Address = require('../models//address');

exports.getAddressById = async (req,res,next,id) => {
    try {
        const address = await Address.findOne({_id:id});
        console.log(address);
        if(address.length === 0) {
            res.json({
                error:"Category Not Found",
                success:false,
                statusCode:400
            })
        }
        req.address = address;
        next();
    } catch (error) {
        res.json({
            error:"Internal Server Error Occured",
            success:false,
            statusCode:500
        })
    }
}