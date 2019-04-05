//REQUIREMENTS
const express = require("express"),
      app     = express(),
      nodemon = require("nodemon");

//SETTING AND USING
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//ROUTES
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/about-us", function(req, res){
    res.render("about-us");
});

app.listen(3000, function(){
    console.log("Server is running.");
});