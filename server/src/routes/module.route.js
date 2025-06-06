const express = require("express");
const router = express.Router();
const { getModules, postModule } = require("../controllers/module.controller");

router.get("/", getModules);
router.post("/", postModule);

module.exports = router;
