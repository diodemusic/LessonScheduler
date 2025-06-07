const express = require("express");
const router = express.Router();
const { getSchedule, postSchedule, putSchedule, deleteSchedule } = require("../controllers/schedule.controller");

router.get("/:week", getSchedule);
router.post("/", postSchedule);
// router.put("/:id", putSchedule);
router.delete("/:id/:moduleName/:lessonName", deleteSchedule);

module.exports = router;
