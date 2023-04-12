const Todo = require('../models/todo');

module.exports = {
    post: (req, res) => {
        const todo = new Todo({
            todo: req.body.todoValue
        })
        todo.save()
            .then(result => {
                res.send({ success: true, data: result, message: 'Record Added Successfully' })
            }).catch(err=>{
                console.log("=======",err);
            })
    },
    get: (req, res) => {
        Todo.find()
        .then(result => {
                res.send({ success: true, data: result, message: 'Record Fetch Successfully' })
            })
    },
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