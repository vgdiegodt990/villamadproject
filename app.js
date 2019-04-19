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

app.get("/testimonials", function(req, res){
    res.render("testimonials");
});

app.get("/admissions", function(req, res){
    res.render("admissions");
});

//STAR
app.get("*", function(req, res){
    res.render("star");
})

app.listen(3000, function(){
    console.log("Server is running.");
});