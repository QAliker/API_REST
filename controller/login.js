const pool = require("../models/index")
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();



exports.login= async function logg(req,res)  {
    try{
        const {username ,password} = req.body
        const sql1 = 'SELECT username FROM users WHERE username=?';
        const sql2 = "SELECT * FROM users WHERE username=?";
        //requete sur ce que l'on stock dans le token
        const [result1] = await pool.query(sql1,[username]);
        console.log('RESULT 1 : ', result1);
        //comparer avec le password crypté en database
    const [result2] = await pool.query(sql2,[username]); 
    console.log('RESULT 2 : ',result2);
       const mdp = await bcrypt.compareSync(req.body.password, result2[0].password);  
        console.log("pass : ", mdp);
        if (result1.length === 1 && mdp === true) {
            let id = result2[0].id;
            let username = result2[0].username;
            let role = result2[0].role;
            let email = result2[0].email;
            let adresse = result2[0].Adresse;
            let token = jsonwebtoken.sign({id, username, role, email, adresse}, process.env.TOKEN_KEY,{
                expiresIn: process.env.TOKEN_EXPIRES_IN});
                console.log(token)
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

exports.test = (req,res) => {
    res.status(200).json({message : "Vous êtes bien authentifié"});
}

exports.testAdmin = (req,res) => {
    res.status(200).json({message: "Bienvenue chez vous"})
}


