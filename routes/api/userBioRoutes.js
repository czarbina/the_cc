var db = require("../../models");
var router = require("express").Router();


  router.get("/all", function(req, res) {
    db.Userbio.findAll({}).then(function(results) {
      res.json(results);
    });
  });


  router.get("artistname/:artistName", function(req, res) {
    if (req.params.artistName) {
      db.Userbio.findAll({
        where: {
          artistName: req.params.artistName
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("bio/:bio", function(req, res) {
    if (req.params.bio) {
      db.Userbio.findAll({
        where: {
          bio: req.params.bio
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("tag/:tag", function(req, res) {
    if (req.params.tag) {
      db.Userbio.findAll({
        where: {
          tag: req.params.tag
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.post("/newBio", function(req, res) {
    var username = req.body.username;
    console.log(`USERNAME: ${username}`);
    db.Userbio.create({
      username: username
    });
  });

  router.post("/deleteBio", function(req, res) {
    console.log(req.body);
    db.Userbio.destroy({
      where: {
        id: req.body.id
      }
    });
  });

  module.exports = router;
