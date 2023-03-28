const sequelize = require('../config/db')
const { DataTypes } = require('sequelize');


const User = sequelize.define('AppUser', {
  // Model attributes are defined here
   email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true
  },
  password: {
    type: DataTypes.STRING,
     allowNull : false
  },
  username : {
    type: DataTypes.STRING,
    allowNull : false,
    defaultValue : "yes"
  }
}, {
  // Other model options go here
  
});



module.exports = User