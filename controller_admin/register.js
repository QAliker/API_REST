const pool = require("../models/index")
const bcrypt = require('bcrypt');
const { verify } = require("jsonwebtoken");

const registeradmin = {
register: async (req, res) => {
    try {
        const {username, password} = req.body;
        const sql1 = "SELECT username FROM admin WHERE username=?";
        const [checkIfExists] = await pool.query(sql1,[username]);
        if (checkIfExists.length >= 1){
            res.json("Admin Already exist")
            console.log(checkIfExists[0]);
        }else{
            const hash = await bcrypt.hash(password, 10);
        const sql = "insert into admin (username, password, role) values (?, ?, ?)";
        const rows = await pool.query(sql, [username, hash, 1]);
        res.status(200).json("Admin Created !");
        }
    
    }catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })


        }
    }
}

module.exports = registeradmin
