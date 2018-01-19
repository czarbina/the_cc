var db = require("../../models");
var router = require("express").Router();


router.get("/all", function(req, res) {
    db.Events.findAll({}).then(function(results) {
      res.json(results);
    });
  });


router.get("/:artistName", function(req, res) {
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

router.get("/:username", function(req, res) {
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

router.get("/:id", function(req, res) {
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
  

  router.post("/newUser", function(req, res) {
    console.log(req.body);
    db.Events.create({
      
    });
  });

  router.post("/delete", function(req, res) {
    console.log(req.body);
    db.Events.destroy({
      where: {
        id: req.body.id
      }
    });
  });

module.exports = router;
