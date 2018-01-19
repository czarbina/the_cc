var Events = require("../../models/Events.js");

module.exports = function(app) {

app.get("/events/all", function(req, res) {
    Events.findAll({}).then(function(results) {
      res.json(results);
    });
  });


app.get("/events/:artistName", function(req, res) {
    if (req.params.artistName) {
      Events.findAll({
        where: {
          artistName: req.params.artistName
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

app.get("/events/:username", function(req, res) {
    if (req.params.username) {
      Events.findAll({
        where: {
          username: req.params.username
        }
      }).then(function(results) {
        res.json(results);
      });
    }
});

app.get("/events/:id", function(req, res) {
    if (req.params.id) {
      Events.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
      });
    }
});
  

  app.post("/events/newUser", function(req, res) {
    console.log(req.body);
    Events.create({
      
    });
  });

  app.post("/events/delete", function(req, res) {
    console.log(req.body);
    Events.destroy({
      where: {
        id: req.body.id
      }
    });
  });
}; 
