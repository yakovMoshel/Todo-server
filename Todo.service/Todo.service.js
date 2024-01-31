const { default: mongoose } = require('mongoose');
const TodoController = require('../Todo.controller/Todo.controller');

async function getTasks() {
    return await TodoController.read()
}

async function updateTask(id, body) {
    // idבדיקה ל
    if (!mongoose.Types.ObjectId.isValid(id)) throw "id not valid"
    // חילוץ השדות הרלוונטים מהבאדי
    const { description, Deadline } = body
    let data = { description, Deadline }
    // עדכון המשימה במסד הנתונים
    const updatedTask = await TodoController.update(id, data);
    if (!updatedTask) throw "Task not updated"
    return updatedTask;
}


async function createTask(body) {
    // חילוץ השדות הרלוונטים מהבאדי
    const { description, Deadline } = body
    let data = { description, Deadline }
    // עדכון המשימה במסד הנתונים
    const createTask = await TodoController.create(data);
    return getTasks();
}

async function updateIsDone(id) {
    // idבדיקה ל
    if (!mongoose.Types.ObjectId.isValid(id)) throw "id not valid"
    const updatedIsDoneTask = await TodoController.update(id, { isDone: true });
    return updatedIsDoneTask
}

async function updateAll(bool) {
    const boolTask = await TodoController.updateAll(bool);
    return boolTask
}

async function deleteSingelTask(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw "id not valid"
    const deletedTask = await TodoController.del(id);
    if (!deletedTask) throw "ther is not what to delete"
    return deletedTask
}

async function deletAll() {
    return await TodoController.deletAll()
}


module.exports = {
    getTasks,
    updateTask,
    updateIsDone,
    deletAll,
    deleteSingelTask,
    updateAll,
    createTask
}