const mysql = require("mysql");


const DB = mysql.createConnection({
            host: "locolhost",
            username: "admin",
            password: "",
            // database: 
})

const db = DB.connect((err) => {
    console.log(err.message)
})

var sql = "CREATE DATABASE"

let query = db.query(sql, (err)=> {
    if(err)throw err;
    consolelog(err)
})
