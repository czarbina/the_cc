const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

var bodyParser = require("body-parser");
var logger = require("morgan");
var db = require("./models");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("public"));
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production")
//  {
//   app.use(express.static("client/build"));
// }

// ================ API ROUTES ==============
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
    });
  });
