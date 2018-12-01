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
  //This is the route for our new user page to post its contents into the database
  //We are also using session here at the end to automatically log the user in
  app.post("/api/newuser", function(req, res) {
    db.users
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate,
        pic: req.body.pic,
        bio: req.body.bio,
        games: req.body.games,
        results: null
      })
      .then(function(user) {
        req.session.user = user.dataValues;
        req.session.authenticated = true;
        console.log(req.session);
        res.json(user);
      });
  });

  //route to get all posts from database table posts
  // app.get("/api/posts", function(req, res) {
  //   db.posts.findAll({}).then(function(posts) {});
  // });

  // //this is the route to filter out by badge declaration
  // app.get("/api/badges", function(req, res) {
  //   db.posts
  //     .findAll({
  //       where: {
  //         classPic: searchParam
  //       }
  //     })
  //     .then(function(badgeUsers) {})
  // });

  // //route to create a new post in the database and return it onto the screen after creation
  // app.post("/api/newpost", function(req, res) {
  //   db.posts.create({}).then(function(newPost) {});
  // });

  // //route to get user information and to populate user profile page
  app.get("/api/profile", function(req, res) {
    var user = req.session.user;
    db.users
      .findOne({
        where: {
          id: user.id
        }
      })
      .then(function(user) {
        console.log(user);
        res.json(user);
      });
  });

  // app.post("/api/comment", function(req, res) {
  //   db.comments.create({}).then(function(newPost) {});
  // });

  // app.put("/logout", function(req, res) {
  //   var user = req.session.user;
  //   db.mockpeople
  //     .findOne({
  //       where: {
  //         id: user.id
  //       }
  //     })
  //     .then(function(user) {
  //       req.session.user = null;
  //       req.session.authenticated = false;
  //       res.json(user);
  //     });
  // });

  // PUT route for updating user info with badge assignment
  app.put("/api/survey", function(req, res) {
    var user = req.session.user;
    console.log(req.body.badge);
    var badge = req.body.badge;
    db.users
      .update(
        {
          badge: badge
        },
        {
          where: {
            id: user.id
          }
        }
      )
      .then(function(user) {
        console.log(user);
        res.json(user);
      });
  });
};
