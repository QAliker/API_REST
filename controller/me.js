const pool = require("../models/index");
const jwt = require("jsonwebtoken")
 const me = {
    me: async (req, res) => {
        try { 
            const token = req.headers.authorization.split(' ')[1]
            const content = jwt.verify(token, process.env.TOKEN_KEY)
                res.send(content)
            
        }catch (error){
            console.log(error);
        }
    }
}
 module.exports = me;