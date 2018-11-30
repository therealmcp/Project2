module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    pic: DataTypes.STRING,
    badge: DataTypes.STRING,
    bio: DataTypes.STRING,
    games: DataTypes.STRING,
    results: DataTypes.INTEGER
  });

  var posts = sequelize.define("posts", {
    user: DataTypes.STRING,
    post: DataTypes.STRING,
    pic: DataTypes.STRING,
    badge: DataTypes.STRING
  });

  var comments = sequelize.define("comments", {
    user: DataTypes.STRING,
    post: DataTypes.STRING,
    pic: DataTypes.STRING,
    badge: DataTypes.STRING
  });

  return comments, posts, User;
};
