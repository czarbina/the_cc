var router = require("express").Router();
var db = require("../../models");
var randToken = require("rand-token");

  router.get("/all", function(req, res) {
    db.User.findAll({}).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });


  router.get("/username/:username", function(req, res) {
    console.log("HIT ROUTE!!!");
    if (req.params.username) {
      db.User.findAll({
        where: {
          username: req.params.username
        }
      }).then(function(results) {
        console.log(results);
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
    db.User.create({
      name: req.body.name,
      username: req.body.username,
      emailAddress: req.body.email,
      password: req.body.password,
      zipcode: req.body.zipcode,
      birthday: req.body.dob
    }).then(function(results){
      res.json(results);
    });
  });

  router.post("/deleteUser", function(req, res) {
    db.User.destroy({
      where: {
        id: req.body.id
      }
    });
  });

  router.get("/login", function(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    db.User.findAll({
      where: {
        username: username
      }
    }).then(function(loginCredentials) {
      if(loginCredentials[0]){
        if(password === loginCredentials[0].password){
          var token = randToken.generate(16);
          var userId = loginCredentials[0].id;
          var putQuery = "authToken/" + userId;

          // ========= Add authToken to user info in DB ========
          db.User.update({
            authToken: token
          },
          {
            where: {
              id: userId
            }
          });

           db.Userbio.update({
            authToken: token
          },
          {
            where: {
            username: username
            }
          });

          res.cookie('authToken', token);
          res.json(loginCredentials);
        } else{
          res.end();
        };

      } else {
        res.json(loginCredentials);

      }
    });
    });


  router.get("/checkLogin", function(req, res) {
    if(req.headers.cookie !== undefined){
      var authToken = req.headers.cookie.slice(10, req.headers.cookie.length);
    }else {
    }

    db.User.findAll({
      where: {
        authToken: authToken
      }
    }).then(function(response) {
      res.send(response);
      });
    });


      router.get("/profileCard", function(req, res) {
    var authToken = req.headers.cookie.slice(10, req.headers.cookie.length);
          db.User.findOne({
            where: {
            authToken: authToken
            }
          }).then(function(results) {
            res.json(results);
          });
      });


  module.exports  = router;
