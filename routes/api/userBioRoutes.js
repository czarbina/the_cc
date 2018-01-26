var db = require("../../models");
var router = require("express").Router();
var Op = require("sequelize").Op;


  router.get("/all", function(req, res) {
    db.Userbio.findAll({}).then(function(results) {
      res.json(results)
      ;
    }).catch(function(err) {
      console.log(err);
    });
  });

  router.get("/search", function(req, res) {
    db.Userbio.findAll({
      where: {
        tags: "Musician"
      }
    }).then(function(results) {
      res.json(results)
          console.log(results);
      ;
    }).catch(function(err) {
      console.log(err);
    });

  });

  router.get("/artists", function(req, res) {
    db.Userbio.findAll({
      where: {
        image: {
          [Op.ne]: null
          }
        }
      }).then(function(results){
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
    db.Userbio.create({
      username: username
    });
  });

  router.post("/deleteBio", function(req, res) {
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
      var updateValues = {};

  if(req.body.image.length > 0){updateValues.image = req.body.image};
      if(req.body.artistName.length > 0){updateValues.artistName = req.body.artistName};
      if(req.body.bio.length > 0){updateValues.bio = req.body.bio};
      if(req.body.tags.length > 0){updateValues.tags = req.body.tags};
      if(req.body.links.length > 0){updateValues.links = req.body.links};
      if(req.body.links2.length > 0){updateValues.links2 = req.body.links2};
      if(req.body.links3.length > 0){updateValues.links3 = req.body.links3};
      if(req.body.soundcloud.length > 0){updateValues.soundcloud = req.body.soundcloud};
      if(req.body.facebook.length > 0){updateValues.facebook = req.body.facebook};
      if(req.body.coverphoto.length > 0){updateValues.coverphoto = req.body.coverphoto};

    db.Userbio.update(updateValues,
    {
     where: {
      authToken: authToken
    }
    }).then(function(results){
      res.json(results);
    });

  }else{
    res.send("false");
  }
  });

  router.get("/profile", function(req, res) {
    var authToken = req.headers.cookie.slice(10, req.headers.cookie.length);
      db.Userbio.findOne({
        where: {
        authToken: authToken
        }
      }).then(function(results) {
        res.json(results);
      });
  });

  router.get("/artistprofile/:id", function(req, res) {
    var id = req.params.id;
      db.Userbio.findOne({
        where: {
        id: id
        }
      }).then(function(results) {
        res.json(results);
      });
  });


  module.exports = router;
