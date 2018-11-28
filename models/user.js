module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
      score: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return User;
};
