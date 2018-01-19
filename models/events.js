module.exports = function(sequelize, DataTypes) {

var Events = sequelize.define("events", {
  eventname: {
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

  location: {
  		type: DataTypes.STRING,
     	allowNull: false,
     	validate: {
        len: [1]
      }
  },

  date: {
  		type: DataTypes.INTEGER,
     	allowNull: false,
     	validate: {
        len: [1]
      }
  },

  description: {
  		type: DataTypes.TEXT,
     	allowNull: false,
     	validate: {
        len: [1]
      }
  },

  photo: {
  		type: DataTypes.STRING,
     	allowNull: true,
     	isUrl: true,
     	validate: {
        len: [1]
      }

}, {
  timestamps: true
});

return Events
};
