const  Wallet = require('../model/Wallet')

 const createWallet = async(req,res,next) => {
    try {
        const {email} = req.body

        const user = await Wallet.create({
             
        })
        res.status(200).json({
            user
        })
        
    } catch (error) {
        res.status(500).json({
            msg : error.message
        })
    }

}
const getWallet = async(req,res,next) => {
    try {
         console.log(req.params.id);
         const id = req.params.id

        const wallet = await Wallet.findOne({
            include : ['AppUser'],
             where : {
                id : id
             }
        })
        res.status(200).json({
            wallet
        })
        
    } catch (error) {
        res.status(500).json({
            msg : error.message
        })
    }

}


module.exports = {createWallet,getWallet}