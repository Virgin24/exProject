const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require('./config/db')
const router = require('./route')


// const {checkDBConnection} = require('./config/dbConnect')

// console.log(checkDBConnection());
const app = express();


app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',router)
app.use((req,res,next) => {
    res.send('Not found')
    next()
})
// app.use("/api/users/", require("./routes/api/users"))
// app.use("/api/accounts/login/auth", require("./routes/api/login"))
// app.use("/api/accounts/registration/auth", require("./routes/api/registration"))











app.listen(3001, ()=> {console.log("Server listeng on port 3001")})