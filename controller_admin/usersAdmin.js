const pool = require("../models/index")

const adminAdminUsers = {
    adminAdminGetAll: async (req, res) => {
        try {
            const sql4 = 'SELECT * FROM admin';
            const rows = await pool.query(sql4);
         res.json({
            data: rows[0]
        });   
        }catch (error){
            console.log(error);
            res.json({
                state: "error"
            })
        }
    }
}
 module.exports = adminAdminUsers
