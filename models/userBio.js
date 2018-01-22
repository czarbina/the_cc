module.exports = function(sequelize, DataTypes) {
  
var Userbio = sequelize.define("Userbio", {
  artistName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

  bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
   
  tags: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },

  links: {
    type: DataTypes.STRING,
      allowNull: true,
      isUrl: true,
      validate: {
        len: [1]
      }
    },

  coverphoto: {
      type: DataTypes.STRING,
      allowNull: true,
      isUrl: true
  // validate they are of legal age to use our service
  }
}, {
  timestamps: false
});
return Userbio;
};

//artistName
//snippet/description of self
//tags
//links
//coverphoto
//
