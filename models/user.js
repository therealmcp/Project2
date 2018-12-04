module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
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
  User.associate = function(models) {
    User.hasMany(models.posts, {
      onDelete: "cascade"
    });
  };
  return User;
};
