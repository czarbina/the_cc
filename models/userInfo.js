var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the `character` (a string)
  name: Sequelize.STRING,
  // the character's role (a string)
  role: Sequelize.STRING,
  // the character's age (a string)
  age: Sequelize.INTEGER,
  // and the character's force points (an int)
  forcePoints: Sequelize.INTEGER
}, {
  timestamps: true
});

User.sync();

module.exports = User; 