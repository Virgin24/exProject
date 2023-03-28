// const checkDBConnection  = require("../../")
const User = require('../../model/User')
const express = require("express");
const router = express.Router()



router.post("/", async (req, res)=> {

    console.log(req.method, req.url, req.body)


    // try {
    //     var {email, password} =  req.body
    //     const users = await User.create({
    //         email : email,
    //         password : password
    //     })
          
    //     res.json(users)
    // } catch (error) {
    //     console.log(error.message);
    //     res.status(500).json({
    //         msg : error.message
    //     })
    // }

       const user = {
        name: "Victor",
        accounts:4 
       }

       res.json(user)
})

module.exports = router;


