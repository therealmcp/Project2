module.exports = function(sequelize, DataTypes) {
  var posts = sequelize.define("posts", {
    user: DataTypes.STRING,
    name: DataTypes.STRING,
    post: DataTypes.STRING,
    pic: DataTypes.STRING,
    badge: DataTypes.STRING
  });
  return posts;
};
