const expressJwt = require('express-jwt');

exports.isSignedIn = expressJwt.expressjwt({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    requestProperty:"auth"
})

exports.isAuthenticated  = (req,res,next) => {
    // Check if the User ID and Auth ID are same.
    console.log(req.user,req.auth)
    let checker =  req.user &&  req.auth && req.user._id === req.auth._id;
    if(!checker) {
        return res.status(403).json({
            error:"Access Denied! You're not authenticated to perform this operation",
            statusCode:403,
            success:false
        })
    }
    next();
}

exports.isAdmin = (req,res,next) => {
    // Check if the User is Admin or not
    if(req.user.role === 0) {
        return res.status(403).json({
            error:"Access Denied! You're not authorized to perform this operation",
            statusCode:403,
            success:false
        })
    }
    next();
}