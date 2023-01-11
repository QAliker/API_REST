const pool = require("../models/index");
const delAdmin = {
    deleteAdmin: async (req, res) => {
        try {
            const {username} = req.body
            const sql = `delete from admin where username ='${username}'`
            const [rows, fields] = await pool.query(sql);
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
}

module.exports=delAdmin