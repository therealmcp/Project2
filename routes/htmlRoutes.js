var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log(req.session);
    res.render("index");
  });

  app.get("/profile", function(req, res) {
    var user = req.session.user;
    db.users
      .findOne({
        where: {
          id: user.id
        }
      })
      .then(function(user) {
        res.render("profile", {
          msg: "hey guys",
          userData: user
        });
      });
  });

  // Load example page and pass in an example by id
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
