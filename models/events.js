var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Events = sequelize.define("events", {
  eventname: Sequelize.STRING,

  location: Sequelize.STRING,

  date: Sequelize.INTEGER,
  
  description: Sequelize.STRING,

  photo: Sequelize.STRING
 
}, {
  timestamps: true
});

Events.sync();

module.exports = Events; 

