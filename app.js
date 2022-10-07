const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/views/todo.ejs");

    //date
    let date = new Date
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let mth = months[month];

    res.render('todo');

});

app.listen(4000, () => {
    console.log("listening on http://localhost:4000");
});

