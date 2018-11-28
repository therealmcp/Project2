var db = require("../models");

module.exports = function(app) {
  //This is our route for user log in
  app.post("/api/login", login);
  //This is our function to use the session npm package to run a session when a user logs
  //in and is found in the database
  function login(req, res) {
    db.users
      .findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      })
      .then(function(user) {
        req.session.user = user.dataValues;
        req.session.authenticated = true;
        console.log(req.session);
        res.json(user);
      });
  }

  app.post("/api/newuser", function(req, res) {
    db.users
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate,
        pic: req.body.pic,
        bio: req.body.userBio,
        games: req.body.games
      })
      .then(function(user) {
        req.session.user = user.dataValues;
        req.session.authenticated = true;
        console.log(req.session);
        res.json(user);
      });
  });
};
