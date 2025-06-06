const express = require("express");
const router = express.Router();
const { getModules, postModule, deleteModule } = require("../controllers/module.controller");

router.get("/", getModules);
router.post("/", postModule);
router.delete("/:id", deleteModule);

module.exports = router;
