var db = require("../../models");
var router = require("express").Router();


  router.get("/all", function(req, res) {
    db.Userbio.findAll({}).then(function(results) {
      res.json(results)
      ;
    }).catch(function(err) {
      console.log(err);
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
  // router.post("/createProfile", function(req, res) {
  //   console.log(req.body);
  //   db.Userbio.create({
  //     artistName: req.body.artistName,
  //     bio: req.body.bio,
  //     tags: req.body.tags,
  //     links: req.body.links,
  //     coverphoto: req.body.coverphoto
  //   });
  // });
  // router.get("/artistProfile", function(req, res) {
  //     db.Userbio.findOne({
  //       where: {
  //         artistName: req.params.artistName
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });
  router.post("/createProfile", function(req, res) {
    if(req.headers.cookie){
      var authToken = req.headers.cookie.slice(10, req.headers.cookie.length);

    console.log(req.body);
    db.Userbio.update({
      artistName: req.body.artistName,
      bio: req.body.bio,
      tags: req.body.tags,
      links: req.body.links,
      coverphoto: req.body.coverphoto
    },
    {
     where: {
      authToken: authToken
    }
    });

  }else{
    res.send("false");
  }
  });

  router.get("/artistProfile", function(req, res) {
var authToken = req.headers.cookie.slice(10, req.headers.cookie.length);
      db.Userbio.findOne({
        where: {
        authToken: authToken
        }
      }).then(function(results) {
        res.json(results);
      });
  });


  module.exports = router;
