module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    pic: DataTypes.STRING,
    classPic: DataTypes.STRING,
    bio: DataTypes.STRING,
    games: DataTypes.STRING
  });
  return User;
};
