const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema(
    {
        lessons: {
            type: [], // TODO: define what type the array holds
            required: true
        },
        weekNumber: {
            type: Number
        }
    }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;
