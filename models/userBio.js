module.exports = function(sequelize, DataTypes) {
  
var Userbio = sequelize.define("userbio", {
  artistName: DataTypes.STRING,
  // person's name (a string)
  bio: DataTypes.STRING,
  // valid email address for confirmation
  tags: DataTypes.STRING,

  links: DataTypes.STRING,
  // geographic area importante
  coverphoto: DataTypes.STRING
  // validate they are of legal age to use our service
}, {
  timestamps: true
});
 return Userbio;
};

//artistName
//snippet/description of self
//tags
//links
//coverphoto
//
