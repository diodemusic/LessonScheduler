const mongoose = require('mongoose');

const LessonSchema = mongoose.Schema(
    {
        module: {
            type: String,
            required: true
        },
        topicNum: {
            type: Number,
            required: true
        },
        lessonNum: {
            type: Number,
            required: true
        },
        finished: {
            type: Boolean,
            required: true
        }
    }
);

const Lesson = mongoose.model("Lesson", LessonSchema)

module.exports = Lesson;
