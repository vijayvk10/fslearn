const express = require('express');
const connectdb = require('./config/mango');
require('dotenv').config();


const app = express();
const port =3007;
connectdb();
app.listen(port,() =>
{
    console.log("Server connected");

}
)