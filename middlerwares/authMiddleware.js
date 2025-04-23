const jwt = require('jsonwebtoken');

exports.verifyToken = (req,res,next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(400).json({message:"Access Denied"});
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded;

        // if (user.role !== 'admin') {
        //     return res.status(403).json({ message: "Access denied, admin only." });
        // }

        next();
    } catch (error) {
        res.status(400).json({message:"Invalid token"})
    }
};

exports.checkRoles = (...roles) =>{
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:"You are unauthorized to access this role"})
        }
        next();
    };
};