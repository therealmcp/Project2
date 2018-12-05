var db = require("../models");

module.exports = function(app) {
  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.posts
      .findAll({
        where: query,
        include: [db.User]
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  app.get("/api/posts/:id", function(req, res) {
    db.posts
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.User]
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  app.post("/api/posts", function(req, res) {
    db.posts.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.posts
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  app.put("/api/posts", function(req, res) {
    db.posts
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
