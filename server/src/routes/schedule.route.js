const express = require("express");
const router = express.Router();
const { getSchedule, postSchedule, putSchedule } = require("../controllers/schedule.controller");

router.get("/", getSchedule);
router.post("/", postSchedule);
router.delete("/", putSchedule);

module.exports = router;
