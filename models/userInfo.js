var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
  name: Sequelize.STRING,
  // person's name (a string)
  emailAddress: Sequelize.STRING,
  // valid email address for confirmation
  password: Sequelize.STRING,
  
  zipcode: Sequelize.INTEGER,
  // geographic area importante
  birthday: Sequelize.INTEGER,

  photo: Sequelize.INTEGER,

  // validate they are of legal age to use our service
}, {
  timestamps: true
});

User.sync();

module.exports = User; 


// Name (first, last?)
// (id)
// email address
//password
//zipcode
//birthday
//profile photo