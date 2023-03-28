const express = require("express");
const walletroutes = express.Router()
const Wallet = require('../controllers/WalletController')

walletroutes.post('/create',Wallet.createWallet)
walletroutes.get('/:id',Wallet.getWallet)




module.exports = walletroutes