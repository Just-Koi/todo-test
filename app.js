const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

const tasks = [];
app.post("/add-task", function(req, res){
    const taskName = req.body.taskName;
    const content = req.body.taskDescription;

    let taskItem = {
        name: taskName,
        description: content
    };
    tasks.push(taskItem); 
    console.log(taskItem);

    res.redirect("/");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/todo.ejs");

    for (let i = 0; i < tasks.length; i++) {
        var checkBox = req.body.checkBox + i;
    }

    res.render('todo', {
        tasks: tasks,
        checkBox: checkBox
    });
});

app.listen(5000, () => {
    console.log("listening on local: http://localhost:5000");
});

