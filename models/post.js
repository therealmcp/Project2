module.exports = function(sequelize, DataTypes) {
  var posts = sequelize.define("posts", {
    user: DataTypes.STRING,
    userName: DataTypes.STRING,
    post: DataTypes.STRING,
    pic: DataTypes.STRING,
    badge: DataTypes.STRING
  });

  posts.associate = function(models) {
    posts.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  posts.associate = function(models) {
    posts.hasMany(models.comments, {
      onDelete: "cascade"
    });
  };

  return posts;
};
