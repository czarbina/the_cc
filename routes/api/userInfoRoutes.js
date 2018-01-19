var UserInfo = require("../../models/userInfo.js");

module.exports = function(app) {

  app.get("/api/all", function(req, res) {
    UserInfo.findAll({}).then(function(results) {
      res.json(results);
    });
  });


  app.get("/api/:username", function(req, res) {
    if (req.params.username) {
      UserInfo.findAll({
        where: {
          username: req.params.username
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/name/:name", function(req, res) {
    if (req.params.name) {
      UserInfo.findAll({
        where: {
          name: req.params.name
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/emailAddress/:emailAddress", function(req, res) {
    if (req.params.emailAddress) {
      UserInfo.findAll({
        where: {
          emailAddress: req.params.emailAddress
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/birthday/:birthday", function(req, res) {
    if (req.params.birthday) {
      UserInfo.findAll({
        where: {
          birthday: req.params.birthday
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

    app.get("/api/id/:id", function(req, res) {
    if (req.params.id) {
      UserInfo.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/zipcode/:zipcode", function(req, res) {
    if (req.params.zipcode) {
      UserInfo.findAll({
        where: {
          zipcode: req.params.zipcode
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.post("/api/newUser", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    UserInfo.create({
      name: req.body.name,
      emailAddress: req.body.emailAddress,
      password: req.body.password,
      zipcode: req.body.zipcode,
      birthday; req.body.birthday,
      photo: req.body.photo
     
    });
  });

  app.post("/api/delete", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    UserInfo.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
