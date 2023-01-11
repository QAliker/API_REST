const jwt = require("jsonwebtoken")

require('dotenv').config();

module.exports = (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1];
    const content = jwt.verify(token, process.env.TOKEN_KEY);
    const decoded = content.result2
    const role = decoded[0].role
    console.log(decoded)
    if (role === 1){
        next();
    }else{
        res.json("vous n\'avez pas l'authorisation");
        
    }
            }
        