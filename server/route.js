const express = require("express");
const router = express.Router()
const authRoutes = require('./Router/authRoute')
const walletRoutes = require('./Router/walletRoute')

router.use((req,res,next) => {
    console.log(req.url,new Date().getHours());
    next()
})

router.use('/auth',authRoutes)
router.use('/wallet',walletRoutes)

module.exports = router

