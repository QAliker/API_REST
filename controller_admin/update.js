const pool = require("../models/index");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Adminupdate = {
    update: async (req,res) => {
        try {
            const {username, newUsername, password, email, Adresse} = req.body;
            const sql = "update users set username = ?, password = ?, email = ?, Adresse = ? where username = ?";
            const hash = await bcrypt.hash(password, 10);
            const [rows, fields] = await pool.query(sql, [newUsername, hash, email, Adresse, username]);
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
}
module.exports = Adminupdate

const adminadminUpdate = {
    updateAdmin: async (req,res) => {
        try {
            const {username, newUsername, password} = req.body;
            const sql = "update admin set username = ?, password = ? where username = ?";
            const hash = await bcrypt.hash(password, 10);
            const [rows, fields] = await pool.query(sql, [newUsername, hash, username]);
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
}
module.exports=adminadminUpdate
