const express = require('express');
const router = express.Router();
const controller = require('../controllers/TodoController');
const todoSchema = require('../schemas/TodoSchemas');
const middleware = require('../middlewares/TodoMiddleware');

router.post('/',middleware(todoSchema),controller.post);
router.get('/',controller.get);
router.put('/:id',controller.put);
router.delete('/:id',controller.delete);
//  (req, res) => {
//     Todo.find()
//         .then(result => {
//             res.send({success:true,data:result,message:'Record Fetch Successfully'})
//         })
// })

// router.post('/', (req, res) => {
//     const todo = new Todo({
//         todo: req.body.todoValue
//     })
//     todo.save()
//         .then(result => {
//             res.send({success:true,data:result,message:'Record Added Successfully'})
//         })
// });

// router.delete('/:id', (req, res) => {
//     Todo.findByIdAndDelete(req.params.id)
//         .then(result => {
//             res.send({success:true,message:'Record Deleted Successfully'})
//         })
// });
// router.put('/:id', (req, res) => {
//     Todo.findByIdAndUpdate(req.params.id,{todo : req.body.todoValue})
//         .then(result => {
//             res.send({success:true,data:result,message:'Record Updated Successfully'})
//         })
// });

module.exports = router;