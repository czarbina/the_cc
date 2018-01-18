var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Userbio = sequelize.define("userbio", {
  artistName: Sequelize.STRING,
  // person's name (a string)
  bio: Sequelize.STRING,
  // valid email address for confirmation
  tags: Sequelize.STRING,
  
  links: Sequelize.STRING,
  // geographic area importante
  coverphoto: Sequelize.STRING
  // validate they are of legal age to use our service
}, {
  timestamps: true
});

Userbio.sync();

module.exports = Userbio; 

//artistName
//snippet/description of self
//tags
//links
//coverphoto
//
