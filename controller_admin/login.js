const pool = require("../models/index")
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();



exports.loginadmin= async function login(req,res)  {
    try{
        const {username ,password} = req.body
        const sql1 = 'SELECT username FROM admin WHERE username=?';
        const sql2 = "SELECT * FROM admin WHERE username=?";
        //requete sur ce que l'on stock dans le token
        const [result1] = await pool.query(sql1,[username]);
        console.log('RESULT 1 : ', result1);
        //comparer avec le password crypté en database
    const [result2] = await pool.query(sql2,[username]); 
    console.log('RESULT 2 : ',result2);
       const mdp = await bcrypt.compareSync(req.body.password, result2[0].password);  
        console.log("pass : ", mdp);
        if (result1.length === 1 && mdp === true) {
            let token = jsonwebtoken.sign({result2}, process.env.TOKEN_KEY,{
                expiresIn: process.env.TOKEN_EXPIRES_IN});
            res.status(200).json(token)
            
        }else{
            res.status(401).json({message: "Login ou mot de passe incorrect"})
            
        }
    }catch (error){console.log(error);
        res.json({
            status: "error"
        });
    }
}