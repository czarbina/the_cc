module.exports = function(sequelize, DataTypes) {

var Events = sequelize.define("events", {
  eventname: DataTypes.STRING,

  location: DataTypes.STRING,

  date: DataTypes.INTEGER,

  description: DataTypes.STRING,

  photo: DataTypes.STRING

}, {
  timestamps: true
});

return Events
};



