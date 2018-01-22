module.exports = function(sequelize, DataTypes) {

var User = sequelize.define("User", {
  name: DataTypes.STRING,
  // person's name (a string)
  emailAddress: {
      type: DataTypes.STRING,
      isEmail: true,
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
      equals: 5
    },

  birthday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },

  photo: {
    type: DataTypes.STRING,
      allowNull: true,
      isUrl: true

    }
}, {
  timestamps: false
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
