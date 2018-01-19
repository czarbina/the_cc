var UserBio = require("../../models/userBio.js");

module.exports = function(app) {

  app.get("/bio/all", function(req, res) {
    UserBio.findAll({}).then(function(results) {
      res.json(results);
    });
  });


  app.get("/bio/:artistName", function(req, res) {
    if (req.params.artistName) {
      UserBio.findAll({
        where: {
          artistName: req.params.artistName
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/bio/:bio", function(req, res) {
    if (req.params.bio) {
      UserBio.findAll({
        where: {
          bio: req.params.bio
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/bio/:tag", function(req, res) {
    if (req.params.tag) {
      UserBio.findAll({
        where: {
          tag: req.params.tag
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.post("/bio/newUser", function(req, res) {
    console.log(req.body);
    UserBio.create({
      artistName: req.body.artistName,
      bio: req.body.bio,
      tags: req.body.tags,
      links: req.body.links,
      coverphoto: req.body.coverphoto
    });
  });

  app.post("/bio/delete", function(req, res) {
    console.log(req.body);
    UserBio.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
