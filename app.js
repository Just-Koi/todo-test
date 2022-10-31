const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/views/todo.ejs");

    //tasks
    let tasks = [];
    app.post("/", function(req, res){
        let taskName = req.body.taskName;
        let content = req.body.taskDescription;

        let taskItem = {
            name: taskName,
            description: content
        };
        tasks.push(taskItem); 

        console.log(taskItem);

        res.render('todo', {tasks: tasks});
    });
    
    res.render('todo', {tasks: tasks});

});

app.listen(5000, () => {
    console.log("listening on local: http://localhost:5000");
});

