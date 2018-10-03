var express = require('express');

var app = express();

var PORT = 7000;

app.get('/',function(req, res){
    res.send("HELLO WORLD");
});

app.listen(PORT, function(){
    console.log("App running on port " + PORT);
});
0
2