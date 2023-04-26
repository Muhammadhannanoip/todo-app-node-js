const Todo = require('../models/todo');
const Joi = require('joi');
const todoSchema = require('../schemas/TodoSchemas');
const asyncHandler = require('express-async-handler')

module.exports = {
    post: asyncHandler(async (req, res) => {
        const todo = await new Todo({
            todo: req.body.todoValue
        })
        todo.save()
            .then(result => {
                res.send({ success: true, data: result, message: 'Record Added Successfully' })
            }).catch(err => {
                console.log("=======", err);
            })
    }),
    get: asyncHandler(async (req, res) => {
        constdata = await Todo.find()
            .then(result => {
                res.send({ success: true, data: result, message: 'Record Fetch Successfully' })
            })
    }),
    put: (req, res) => {
        Todo.findByIdAndUpdate(req.params.id, { todo: req.body.todoValue })
            .then(result => {
                res.send({ success: true, data: result, message: 'Record Updated Successfully' })
            })
    },
    delete: (req, res) => {
        Todo.findByIdAndDelete(req.params.id)
            .then(result => {
                res.send({ success: true, message: 'Record Deleted Successfully' })
            })
    }
}