var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/newpp',{
    useNewUrlParser : true
});

//=======creating an array ==========//
var list = ["cleaning home","laundary"];
 
//============ default route=============//

app.get("/",function(req,res){
    res.render("index.ejs", {list : list});

});

//============ Adding new Elements ========//
app.post("/newtodo",function(req,res){
     console.log("item submitted");
     var item = req.body.item;
     list.push(item);
     res.redirect("/");

});


//=========app listen=========//
app.listen(3000,"localhost",function(){
    console.log("The server is listening");

});