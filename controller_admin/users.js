const pool = require("../models/index")
 const adminUsers = {
    adminUsers: async (req, res) => {
        try {
            const  {username} = req.body;
            const sql3 = `SELECT * FROM users where username = '${username}'`;
            const rows = await pool.query(sql3);
         res.json({
            data: rows[0]
        });   
        }catch (error){
            console.log(error)
            res.json({
                state: "error"
            })
        }
    }
}
module.exports = adminUsers

 

