const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/views/todo.ejs");

    //There is no work without some coffee and jellys
    let coffeeBeforeWork = {
        name: 'Drink coffee',
        description: 'Remember to drink coffee before getting to work!'
    };
    let jellysBeforeWork = {
        name: 'Eat Jellys',
        description: 'Remember to eat yummy jellys before getting to work!'
    };

    //tasks
    let tasks = [coffeeBeforeWork, jellysBeforeWork];
    for (let i = 0; i < tasks.length; i++) {
        var checkBox = req.body.checkBox + i;
    }

    //add task
    app.post("/add-task", function(req, res){
        let taskName = req.body.taskName;
        let content = req.body.taskDescription;

        let taskItem = {
            name: taskName,
            description: content
        };
        tasks.push(taskItem); 
        console.log(taskItem);

        res.redirect("/app");
    });

    //clear tasks

    //app
    app.get("/app", function(req, res){
        res.render('todo', {
            tasks: tasks,
            checkBox: checkBox
        });
    });

    res.redirect("/app");

});

app.listen(5000, () => {
    console.log("listening on local: http://localhost:5000");
});

