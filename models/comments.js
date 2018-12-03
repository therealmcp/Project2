module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define("comments", {
    user: DataTypes.STRING,
    name: DataTypes.STRING,
    post: DataTypes.STRING,
    pic: DataTypes.STRING,
    badge: DataTypes.STRING
  });
  return comments;
};
