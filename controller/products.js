const pool = require("../models/index");
    
exports.getProductsByName= async (req, res) => {
        try { 
            const name = req.body
            const sql = "select * from products where ?"
            const rows = await pool.query(sql,[name]);
         res.json({
            data: rows[0]
        });   
        }catch (error){
            console.log(error);
        }
    }
    
exports.getAllProducts= async (req, res) => {
    try { 
        const rows = await pool.query("select * from products");
     res.json({
        data: rows[0]
    });   
    }catch (error){
        console.log(error);
    }
}

exports.getProductsByUsername= async (req, res) => {
    try {
        const username = req.body
        const sql1 = "select id from users where ?"
        const sql2 = "select * from products where userID = ?"
        const [rows] = await pool.query(sql1,[username])
        console.log(rows[0].id)
        const [fRows] = await pool.query(sql2,[rows[0].id])
        console.log(fRows)
        res.json({
            data: fRows
        })
    }catch (error){
        console.log(error)
    }
}
