const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Welcome on my website")
});

app.get("/articles", function(req,res){
    res.send(`A R T I C L E S <br> 1 - How to crate an Android Apps. <br> 2 - How to use 'Node'.js <br> 3 - How to use Express`)
});

app.get("/contact", function(req,res){
    res.send(`C O N T A C T S <br> 1 - INSTRAGRAM <br> 2 - WHATSAPP <br> 3 - FACEBOOK`)
});

app.get("/articles/:id/:data", function(req,res){
    if(req.params.id == "1" && req.params.data == "18-04-2025") {
        res.send("1 - How to create apps for Androind and IOS")
    }else if(req.params.id == "2") {
        res.send("2 - How to use Node.js")
    }else {
        res.send("None articles research")
    }
});

app.listen(8081, function(){
    console.log("Server is running")
});