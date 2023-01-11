const pool = require("../models/index")
const jwt = require("jsonwebtoken")


    exports.create= async (req, res) => {
        try {
            const {name, price} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const content = jwt.verify(token, process.env.TOKEN_KEY)
            const result = content.result2
            const id = result[0].id
            const sql = "insert into products (name, price, userID) values (?, ?, ?)";
            const rows = await pool.query(sql, [name, price, id]);
            res.status(200).json("Product Created !");
            
        
        }catch (error) {
                console.log(error);
                res.json({
                    status: "error"
                })
    
    
            }
        }
    
