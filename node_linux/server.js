var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', (req, res)=>{res.send("Welcome to the world of Chocolates ");});
app.listen(8000);
console.log("App is Listening on Port 8000");