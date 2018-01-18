module.exports = function(sequelize, DataTypes) {

var User = sequelize.define("user", {
  name: DataTypes.STRING,
  // person's name (a string)
  emailAddress: DataTypes.STRING,
  // valid email address for confirmation
  password: DataTypes.STRING,

  zipcode: DataTypes.INTEGER,
  // geographic area importante
  birthday: DataTypes.INTEGER,

  photo: DataTypes.INTEGER,

  // validate they are of legal age to use our service
}, {
  timestamps: true
});

return User;

};


// Name (first, last?)
// (id)
// email address
//password
//zipcode
//birthday
//profile photo
