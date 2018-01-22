var db = require("../../models");
var express = require('express');
var router = require("express").Router();

// GET /register
router.get('/register', function(req, res, next) {
console.log("heeyy");
  // return res.send("register today!");
});

router.get("/", function(req, res) {
  console.log("heeeyyy222");
});
// POST /register
router.post('/register', function(req, res, next) {
  return res.send("User!");
});

module.exports = router;
