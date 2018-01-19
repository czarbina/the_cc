module.exports = function(sequelize, DataTypes) {
  
var Userbio = sequelize.define("userbio", {
  artistName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  // person's name (a string)
  bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  // valid email address for confirmation
  tags: {type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

  links: {
    type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  // geographic area importante
  coverphoto: {
  type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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
