const pool = require("../models/index");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

    exports.update= async (req,res) => {
        try {
            const {username, password, email} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const content = jwt.verify(token, process.env.TOKEN_KEY)
            const id = content.id
            const sql = "update users set username = ?, password = ?, email = ? where id=?";
            const hash = await bcrypt.hash(password, 10);
            const [rows, fields] = await pool.query(sql, [username, hash, email, id])
            res.json({
                data : "users updated !"
            })
        } catch (error){
            console.log(error)
            res.json({
                state: "error"
            })
        }
    }



exports.updateProducts= async (req,res) => {
    try {
        const {name, newName, price} = req.body;
        const sql1 = `update products set name = ?, price = ? where name='${name}'`;
        const [rows, fields] = await pool.query(sql1, [newName, price])
        res.json({
            data : "products updated !"
        })
    } catch (error){
        console.log(error)
        res.json({
            state: "error"
        })
    }
}