const mongoose = require('mongoose');
const Lesson = require('./lesson.model');

const ScheduleSchema = mongoose.Schema(
    {
        week: {
            type: Number,
            required: true
        },
        lessons: {
            type: [Lesson],
            required: true
        }
    }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema)

module.exports = Schedule;
