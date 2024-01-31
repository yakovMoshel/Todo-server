const express = require('express')
const router = express.Router()

const TodoService = require('../Todo.service/Todo.service')

// get tasks
router.get('/', (req, res) => {
    try {
        res.send(TodoService.getTasks())
    } catch (error) {
        res.status(404).send(error)
    }
})

// post tasks
router.post('/', async (req, res) => {
    try {
        let newTask = await TodoService.createTask(req.body)
        res.send(newTask)
    } catch (error) {
        res.status(401).send(error)
    }
})

//put tasks
router.put('/:id', async (req, res) => {
    try {
        let updateTask = await TodoService.updateTask(req)
        res.send(updateTask)
    } catch (error) {
        res.status(401).send(error)
    }
})

//update isDone
router.post('/:id', async (req, res) => {
    try {
        let updateIsDoneTask = await TodoService.updateIsDone(req)
        res.send(updateIsDoneTask)
    } catch (error) {
        res.status(401).send(error)
    }
})

// update all
router.put('/', async (req, res) => {
    try {
        let updateAll = await TodoService.updateAll(req)
        res.send(updateAll)
    } catch (error) {
        res.status(401).send(error)
    }
})


//delete all
router.delete('/', async (req, res) => {
    try {
        let deleteTask = await TodoService.deleteSingelTask(req)
        res.send(deleteTask)
    } catch (error) {
        res.status(401).send(error)
    }
})


// delete singel
router.delete('/:id', async (req, res) => {
    try {
        let deleteSingelTask = await TodoService.deleteSingelTask(req)
res.send(deleteSingelTask)
    } catch (err) {
        res.status(500).send(err)
    }
})
