const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const userRoute = require('./routes/Todo');
const Joi = require('joi');

const port = 3000;


// app.set('view engine', "ejs");
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/todo',userRoute);

const dburl = "mongodb://127.0.0.1:27017/todo-app";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(port, () => {
    console.log("server running " + port);
})
// app.get('/todo', (req, res) => {
//     Todo.find()
//         .then(result => {
//             res.send({success:true,data:result,message:'Record Fetch Successfully'})
//         })
// })

// app.post('/todo', (req, res) => {
//     const todo = new Todo({
//         todo: req.body.todoValue
//     })
//     todo.save()
//         .then(result => {
//             res.send({success:true,data:result,message:'Record Added Successfully'})
//         })
// });

// app.delete('/todo/:id', (req, res) => {
//     Todo.findByIdAndDelete(req.params.id)
//         .then(result => {
//             res.send({success:true,message:'Record Deleted Successfully'})
//         })
// });
// app.put('/todo/:id', (req, res) => {
//     Todo.findByIdAndUpdate(req.params.id,{todo : req.body.todoValue})
//         .then(result => {
//             res.send({success:true,data:result,message:'Record Updated Successfully'})
//         })
// });



