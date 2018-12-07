module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define("comments", {
    user: DataTypes.STRING,
    name: DataTypes.STRING,
    comments: DataTypes.STRING,
    pic: DataTypes.STRING,
    badge: DataTypes.STRING
  });

  comments.associate = function(models) {
    comments.belongsTo(models.posts, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return comments;
};
