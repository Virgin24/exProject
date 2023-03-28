const mysql = require("mysql");


 const createDatabase = () => {
    const DB = mysql.createConnection({
            host: "locolhost",
            username: "admin",
            password: "",
            // database:
            })
 
     const db = DB.connect((err) => {
        console.log(err)
     })
 }

 
 const checkDBConnection= async () => {

    const DB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "wallet"
        })

      const db = DB.connect((err,result) => {
          if(err) throw err

          console.log(result);
        
          return db;
 })
 
 }

 module.exports = {createDatabase,checkDBConnection}
