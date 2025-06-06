const mongoose = require('mongoose');

const ModuleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
);

const Lesson = mongoose.model("Module", ModuleSchema);

module.exports = Lesson;
