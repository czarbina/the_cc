module.exports = function(sequelize, DataTypes) {

var User = sequelize.define("user", {
  name: DataTypes.STRING,
  // person's name (a string)
  emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

  },

  username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

  },
  // valid email address for confirmation
  password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,20]
      }
  },

  zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

  birthday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

  photo: {type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

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
