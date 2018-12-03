module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // user: DataTypes.STRING,
    // post: DataTypes.STRING,
    // pic: DataTypes.STRING,
    // badge: DataTypes.STRING
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
