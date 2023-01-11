const pool = require("../models/index");
const jwt = require("jsonwebtoken")

    exports.delete = async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const content = jwt.verify(token, process.env.TOKEN_KEY)
            const id = content.id
            const [rows, fields] = await pool.query("delete from users where id = ? ", [id]);
            res.json({
                data: "users deleted !"
            })
        
    }catch (error){
        console.log(error)
        res.json({
            state: "error"
        })
    }
}

exports.deleteProducts = async (req,res) => {
    try {
        const name = req.body
        const sql = "delete from products where ?"
         const [rows, fields] = await pool.query(sql,[name]);
        res.json({
            data: "products deleted !"
        })
    
}catch (error){
    console.log(error)
    res.json({
        state: "error"
    })
}   
}


