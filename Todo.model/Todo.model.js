const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    Date: {
        type: Date,
        default: Date.now
    },
    Deadline: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

const TodoModel = mongoose.model('Task', TaskSchema);

module.exports = TodoModel;