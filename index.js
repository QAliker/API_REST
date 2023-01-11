//ajouter ville et code postal dans la DB 
const express = require("express")
const app = express();
const cors = require("cors")

require('dotenv').config();

const Users = require('./routes/Users');
const register = require('./routes/register');
const login = require('./routes/login');
const update = require('./routes/update');
const del = require('./routes/delete');
const me = require('./routes/me');
const adminTest = require('./routes_admin/AuthTokenTest');
const adminUsers = require('./routes_admin/users');
const updateUsers = require('./routes_admin/update');
const deleteUsers = require('./routes_admin/delete');
const registeradmin= require('./routes_admin/register');
const loginadmin = require('./routes_admin/login')
const create = require('./routes/create')
const products = require('./routes/products')
const createAddress = require('./routes/Address')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use("/users", Users);

app.use("/register", register);

app.use("/login", login);

app.use("/update", update);

app.use("/delete", del);

app.use("/me", me);


// products

app.use("/products/create", create)

app.use("/products", products)

app.use("/products", update)

app.use("/products", del)


// Admin

app.use("/admin", adminTest);

app.use("/admin/users", adminUsers);

app.use("/admin/update", updateUsers);

app.use("/admin/delete", deleteUsers);

app.use("/admin/register", registeradmin);

app.use("/admin/login", loginadmin)

// address

app.use("/address", createAddress);


app.listen(3000, () => {
    console.log('ecoute sur port 3000');  
});

