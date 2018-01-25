module.exports = function(sequelize, DataTypes) {

var Userbio = sequelize.define("Userbio", {
  artistName: {
      type: DataTypes.STRING,
      allowNull: true
    },

  username: {
      type: DataTypes.STRING,
      allowNull: false
    },

  image: {
      type: DataTypes.STRING,
      allowNull: true,
      isUrl: true

  },

  bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },

  tags: {
      type: DataTypes.STRING,
      allowNull: true
    },

  links: {
    type: DataTypes.STRING,
      allowNull: true,
      isUrl: true
    },
    links2: {
      type: DataTypes.STRING,
        allowNull: true,
        isUrl: true
      },
      links3: {
        type: DataTypes.STRING,
          allowNull: true,
          isUrl: true
        },
        facebook: {
          type: DataTypes.STRING,
            allowNull: true,
            isUrl: true
          },
          soundcloud: {
            type: DataTypes.STRING,
              allowNull: true,
              isUrl: true
            },
  coverphoto: {
      type: DataTypes.STRING,
      allowNull: true,
      isUrl: true

  },

  authToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
}, {
  timestamps: false
});
return Userbio;
};
