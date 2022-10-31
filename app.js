const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/views/todo.ejs");

    //taks
    let tasks = [];
    app.post("/", function(req, res){
        let taskName = req.body.taskName;
        let content = req.body.taskDescription;

        let taskItem = {
            name: taskName,
            description: content
        };
        console.log(taskItem);
        tasks.push(taskItem);

        res.render('todo', {
            tasks: tasks,
            taskname: taskItem.name,
            taskdescription: taskItem.description
        });
    });

    console.log(tasks);
    res.render('todo');

});

app.listen(5000, () => {
    console.log("listening on local: http://localhost:5000");
});

