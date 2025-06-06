const mongoose = require('mongoose');

const LessonSchema = mongoose.Schema(
    {
        moduleRef: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        finished: {
            type: Boolean,
            required: true
        }
    }
);

const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
