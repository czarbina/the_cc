module.exports = function(sequelize, DataTypes) {

var Userbio = sequelize.define("Userbio", {
  artistName: {
      type: DataTypes.STRING,
      allowNull: true,
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

  image: {
      type: DataTypes.STRING,
      allowNull: true,
      isUrl: true

  },

  bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1,950]
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
    links2: {
      type: DataTypes.STRING,
        allowNull: true,
        isUrl: true,
        validate: {
          len: [1]
        }
      },
      links3: {
        type: DataTypes.STRING,
          allowNull: true,
          isUrl: true,
          validate: {
            len: [1]
          }
        },
        facebook: {
          type: DataTypes.STRING,
            allowNull: true,
            isUrl: true,
            validate: {
              len: [1]
            }
          },
          soundcloud: {
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

  },

  authToken: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
}, {
  timestamps: false
});
return Userbio;
};
<<<<<<< HEAD


=======
>>>>>>> profileredo
