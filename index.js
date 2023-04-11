const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./models/todo');

const port = 3000;

app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dburl = "mongodb://127.0.0.1:27017/todo-app";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    Todo.find()
        .then(result => {
            res.render('index', { data: result })
            console.log(result);
        })
    // res.render('index');
    // console.log(mongoose.connection.readyState);
})

app.post('/', (req, res) => {
    const todo = new Todo({
        todo: req.body.todoValue
    })
    todo.save()
        .then(result => {
            res.redirect("/");
        })
});

app.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(result => {
            res.redirect("/");
        })
});
app.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id,{todo : req.body.value})
        .then(result => {
            res.redirect("/");
        })
});

app.listen(port, () => {
    console.log("server running " + port);
})


