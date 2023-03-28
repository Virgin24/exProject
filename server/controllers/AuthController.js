const  User = require('../model/User')
const Wallet = require('../model/Wallet')

const jwt = require("jsonwebtoken")


 const Login = async(req,res,next) => {
    
    try {
        const {email, password} = req.body

        // const user = await User.findOne({
    
        //     attributes : ['email','username'],
        //     where : {
        //         email : email
        //     }
        // })
        const accessToken  = jwt.sign( { "UserInfo" :{"useremail" : email}},"ab2c32cs4342343454534566", {expiresIn: "1d"})

        res.cookie('jwt', accessToken, {httpOnly:true, maxAge:24*60*60*1000,sameSite:"None", secure:true}) 


        res.status(200).json({
            email,
            password
        })
        
    } catch (error) {
        res.status(500).json({
            msg : error.message
        })
    }

}

const Register = async(req,res,next) => {
    try {
        const {email,password,username} = req.body

        const user = await User.create({
       
           email : email,
           password : password,
           username : username
        })
        if(user){
            await Wallet.create({
                coin : 'btc',
                address : 'fbfbfbfbbfbf',
                AppUserId : user.id 

            })
        }
        res.status(200).json({
            user
        })
        
    } catch (error) {
        res.status(500).json({
            msg : error.message
        })
    }

}



module.exports = {Login,Register}