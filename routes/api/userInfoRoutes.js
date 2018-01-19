var router = require("express").Router();
var db = require("../../models");


  router.get("/all", function(req, res) {
    db.User.findAll({}).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });


  router.get("/:username", function(req, res) {
    if (req.params.username) {
      db.User.findAll({
        where: {
          username: req.params.username
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("/name/:name", function(req, res) {
    if (req.params.name) {
      db.User.findAll({
        where: {
          name: req.params.name
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("/emailAddress/:emailAddress", function(req, res) {
    if (req.params.emailAddress) {
      db.User.findAll({
        where: {
          emailAddress: req.params.emailAddress
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("/birthday/:birthday", function(req, res) {
    if (req.params.birthday) {
      db.User.findAll({
        where: {
          birthday: req.params.birthday
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

    router.get("/id/:id", function(req, res) {
    if (req.params.id) {
      db.User.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.get("/zipcode/:zipcode", function(req, res) {
    if (req.params.zipcode) {
      db.User.findAll({
        where: {
          zipcode: req.params.zipcode
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  router.post("/newUser", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      emailAddress: req.body.emailAddress,
      password: req.body.password,
      zipcode: req.body.zipcode,
      birthday: req.body.birthday,
      photo: req.body.photo
     
    });
  });

  router.post("/delete", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    db.User.destroy({
      where: {
        id: req.body.id
      }
    });
  });

  module.exports  = router;
