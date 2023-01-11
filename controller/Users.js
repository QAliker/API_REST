 const pool = require("../models/index");
 const postsController = {
    getAll: async (req, res) => {
        try { 
            const rows = await pool.query("select * from users");
         res.json({
            data: rows[0]
        });   
        }catch (error){
            console.log(error);
        }
    }
}
 module.exports = postsController;