var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUsers
      });
      console.log(dbUsers);
    });
  });

  // Load user page and pass in an user by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  app.get("/newUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newUser.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
