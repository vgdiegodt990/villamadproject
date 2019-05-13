//REQUIREMENTS
const express = require("express"),
      app     = express();
      /*
      nodemon = require("nodemon");
      */

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

app.get("/athletics", function(req, res){
    res.render("athletics");
});

app.get("/fine-arts", function(req, res){
    res.render("fine-arts");
});

app.get("/theater-department", function(req, res){
    res.render("theater-department");
});

app.get("/technology", function(req, res){
    res.render("technology");
})

app.get("/njhs", function(req, res){
    res.render("njhs");
});

app.get("/student-support", function(req, res){
    res.render("student-support");
});

app.get("/lowergrades", function(req, res){
    res.render("lowergrades");
});

app.get("/middlegrades", function(req, res){
    res.render("middlegrades");
});

app.get("/latergrades", function(req, res){
    res.render("latergrades");
});

app.get("/villa-family", function(req, res){
    res.render("villa-family");
});

app.get("/alumni", function(req, res){
    res.render("alumni");
});

//STAR
app.get("*", function(req, res){
    res.render("star");
})

//APP.LISTEN
app.listen(process.env.PORT || 3000 , process.env.IP, function(){
    console.log("Server has started."); 
});