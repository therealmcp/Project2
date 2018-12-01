// var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log(req.session);
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  //Load survey page
  app.get("/survey", function(req, res) {
    res.render("survey");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
