const sequelize = require('../config/db')
const { DataTypes } = require('sequelize');
const User = require('./User');


const Wallet = sequelize.define('Wallet', {
  // Model attributes are defined here
    coin: {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true
  },
   address: {
    type: DataTypes.STRING,
     allowNull : false
  },
  balance : {
    type: DataTypes.INTEGER,
    allowNull : false,
    defaultValue : 0
  }
}, {
  // Other model options go here
  
});

User.hasMany(Wallet)
Wallet.belongsTo(User)
module.exports = Wallet