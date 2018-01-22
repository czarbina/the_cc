var db = require("../../models");
var router = require("express").Router();


router.get("/all", function(req, res) {
    db.Events.findAll({}).then(function(results) {
      res.json(results);
    });
  });


router.get("artistname/:artistName", function(req, res) {
    if (req.params.artistName) {
      db.Events.findAll({
        where: {
          artistName: req.params.artistName
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

router.get("username/:username", function(req, res) {
    if (req.params.username) {
      db.Events.findAll({
        where: {
          username: req.params.username
        }
      }).then(function(results) {
        res.json(results);
      });
    }
});

router.get("id/:id", function(req, res) {
    if (req.params.id) {
      db.Events.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
      });
    }
});
  

  router.post("/newEvent", function(req, res) {
    console.log(req.body);
    db.Events.create({
      
    });
  });

  router.post("/deleteEvent", function(req, res) {
    console.log(req.body);
    db.Events.destroy({
      where: {
        id: req.body.id
      }
    });
  });

module.exports = router;
