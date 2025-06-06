const express = require("express");
const router = express.Router();
const { getModules } = require("../controllers/module.controller");

router.get("/", getModules);

module.exports = router;
