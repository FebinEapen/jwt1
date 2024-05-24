//user api verification
const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next)=>{
    if(!req.headers['authorization']){   //checks if authorisation header is present  
        return res.status(403)
            .json({message: 'Token is required'});
    }
    try{
        const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET);
                        //verifies jwt if header is present, through the secret key in .env
        return next();
    }catch(err){
        return res.status(403)
            .json({message: "Token is not valid, or it's expired"});
    }
}


module.exports = {
    ensureAuthenticated
}