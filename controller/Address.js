const pool = require("../models/index");
const jwt = require("jsonwebtoken");
    
exports.createAddress= async (req, res) => {
        try { 
            const {road, postalCode, city, country} = req.body
            const token = req.headers.authorization.split(' ')[1]
            const content = jwt.verify(token, process.env.TOKEN_KEY)
            const id = content.id
            const sql = "insert into address (road, postalCode, city, country, userId) values (?,?,?,?,?)"
            const rows = await pool.query(sql,[road, postalCode, city, country, id]);
         res.status(200).json({
            data: "Adress Created !"
        });   
        }catch (error){
            console.log(error);
        }
    }

    exports.getAddress= async (req, res) => {
        try { 
            const token = req.headers.authorization.split(' ')[1]
            const content = jwt.verify(token, process.env.TOKEN_KEY)
            const id = content.id
            const sql = "select id, road, postalCode, city, country from address where userId=?"
            const rows = await pool.query(sql,[id]);
         res.json(rows[0]);   
        }catch (error){
            console.log(error);
        }
    }
    exports.getAddressById= async (req, res) => {
        try {
            const {id} = req.params
            const [rows, fields] = await pool.query('select * from address where id=?', [id])
            res.json(rows[0])
        } catch (error) {
            console.log(error)
        }
    }
    exports.UpdateAddressById= async (req, res) => {
        try {
            const {id} = req.params
            const {road, postalCode, city, country} = req.body
            const [rows, fields] = await pool.query('update address set road = ?, postalCode = ?, city = ?, country = ? where id=?', [road, postalCode, city, country, id])
            res.json("user Updated !")
        } catch (error) {
            console.log(error)
        }
    }
    exports.deleteById = async (req, res) => {
        try {
            const {id} = req.params
            const sql = "delete from address where id=?"
            const rows = await pool.query(sql,id)
            res.json("User Deleted")
        } catch (error) {
            console.log(error)
        }
    }
    