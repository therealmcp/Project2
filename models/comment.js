// module.exports = function(sequelize, DataTypes) {
//   var comments = sequelize.define("comments", {
//     user: DataTypes.STRING,
//     post: DataTypes.STRING,
//     pic: DataTypes.STRING,
//     badge: DataTypes.STRING
//   });

//   return comments;
// };

module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define("comment", {
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

  comment.associate = function(models) {
    comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return comment;
};
