const Schedule = require("../models/schedule.model");

async function getSchedule(req, res) {
    try {
        const schedule = await Schedule.find({ weekNumber: req.params.week });

        return res.status(200).send({ schedule });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

async function postSchedule(req, res) {
    try {
        const schedule = new Schedule(req.body);

        await schedule.save();

        res.status(201).send({ schedule });
    } catch (error) {
        res.status(400).end({ message: error.message });
    }
};

async function deleteSchedule(req, res) {
    try {
        const schedule = await Schedule.findById(req.params.id);

        if (schedule == null) {
            return res.status(404).send({ message: "Bad request" })
        }

        console.log(req.params.moduleName);
        console.log(req.params.lessonName);

        const updatedSchedule = schedule.lessons.filter(item =>
            !(item.moduleRef === req.params.moduleName && item.title === req.params.lessonName)
        );

        schedule.lessons = updatedSchedule;

        await schedule.save();

        res.status(204).end();
    } catch (error) {
        res.status(400).end({ message: error.message });
    }
};

module.exports = {
    getSchedule,
    postSchedule,
    deleteSchedule
};
