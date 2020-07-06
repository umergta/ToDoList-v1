const express = require("express");
const bodyParser = require("body-parser");

 
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//setting public folder as location of static files
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, (req, res)=>{
    console.log("listening on port 3000");
});

items = [];

app.get("/", (req, res)=>{
    var today = new Date();
    var options = { weekday: 'long' , month: 'long', day: 'numeric' };
    var dayString = today.toLocaleDateString("en-US", options);

    //passing over result to tempplate file to variable kindOfDay <%= kindOfDay %>
    res.render("list", {kindOfDay: dayString, newItems: items});
});

app.post("/", function(req, res){
    items.push(req.body.newInput);
    //goes back to app.get with new item added into the array newItems, avaiable for rendering.
    res.redirect("/");
});

app.get("/about", (req,res)=>{
     res.render("about"); 
})