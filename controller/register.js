const pool = require("../models/index")
const bcrypt = require('bcrypt');

const register = {
register: async (req, res) => {
    try {
        const {username, password, email} = req.body;
        const sql1 = "SELECT username,email FROM users WHERE username=? OR email=?";
        const [checkIfExists] = await pool.query(sql1,[username, email]);
        if (checkIfExists.length >= 1){
            res.json("User Already exist")
            console.log(checkIfExists[0]);
        }else{
            const hash = await bcrypt.hash(password, 10);
        const sql = "insert into users (username, password, role, email) values (?, ?, ?, ?)";
        const rows = await pool.query(sql, [username, hash, 0, email]);
        res.status(200).json("User Created !");
        }
    
    }catch (error) {
            console.log(error);
            res.json({
                status: "error"
            })


        }
    }
}

module.exports = register
