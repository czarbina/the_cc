var db = require("../../models");
var router = require("express").Router();


  router.get("/all", function(req, res) {
    db.UserBio.findAll({}).then(function(results) {
      res.json(results);
    });
  });


  router.get("/:artistName", function(req, res) {
    if (req.params.artistName) {
      db.UserBio.findAll({
        where: {
          artistName: req.params.artistName
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("/:bio", function(req, res) {
    if (req.params.bio) {
      db.UserBio.findAll({
        where: {
          bio: req.params.bio
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("/:tag", function(req, res) {
    if (req.params.tag) {
      db.UserBio.findAll({
        where: {
          tag: req.params.tag
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.post("/newUser", function(req, res) {
    console.log(req.body);
    db.UserBio.create({
      artistName: req.body.artistName,
      bio: req.body.bio,
      tags: req.body.tags,
      links: req.body.links,
      coverphoto: req.body.coverphoto
    });
  });

  router.post("/delete", function(req, res) {
    console.log(req.body);
    db.UserBio.destroy({
      where: {
        id: req.body.id
      }
    });
  });

  module.exports = router;
