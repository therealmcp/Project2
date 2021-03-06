var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log(req.session);
    res.render("index");
  });

  app.get("/profile", function(req, res) {
    var user = req.session.user;
    // console.log(req.session);
    db.Users.findOne({
      where: {
        id: user.id
      },
      include: [db.posts]
    }).then(function(user) {
      res.render("profile", {
        msg: "hey guys",
        userData: user,
        posts: user.posts
      });
      // console.log("USER INFO: ", user);
    });
  });

  // Load example page and pass in an example by id
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  //Load survey page
  app.get("/survey", function(req, res) {
    res.render("survey");
  });

  app.get("/post", function(req, res) {
    res.render("post");
  });

  app.get("/message", function(req, res) {
    db.posts
      .findAll({
        include: [db.comments],
        order: [["id", "DESC"]]
      })
      .then(function(post) {
        res.render("message", {
          posts: post,
          comments: post.comments
        });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
