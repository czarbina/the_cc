const router = require("express").Router();
const userInfo = require("./userInfoRoutes.js");
const userBio = require("./userBioRoutes.js");
const events = require("./eventsApiRoutes.js");


router.use("/user", userInfo);
router.use("/bio", userBio);
router.use("/events", events);


module.exports = router;
