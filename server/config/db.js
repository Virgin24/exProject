const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('wallet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' ,
  logging: false,   
});

async  function auth(){
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter : true });
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
// auth()

  module.exports = sequelize