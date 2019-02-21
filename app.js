//REQUIREMENTS
const express = require("express"),
      app     = express();

//SETTING AND USING
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//ROUTES
app.get("/", function(req, res){
    res.render("landing");
});

app.listen(3000, function(){
    console.log("Server is running.");
});