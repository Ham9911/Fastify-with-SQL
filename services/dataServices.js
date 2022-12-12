const mysql = require("mysql");
const env=require("dotenv").config();
console.log(env)
const db = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.PASSWORD,
  database: "practice",
  insecureAuth: true,
});


module.exports=db;