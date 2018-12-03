module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
  return User;
};

// User.associate = function(models) {
//   User.hasMany(models.Post, {
//     onDelete: "cascade"
//   });
// };

// >>>>>>> development
// return User;
// };

 