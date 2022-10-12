const express = require('express')

const app = express();

app.get("/", function(request , response){
    response.send("<h1>Hello Worls</h1>");
})
app.get("/contact", function(request , response){
    response.send("<h1>Contact Me at jagroop@gmail.com</h1>");
})

app.get("/about", function(request , response){
    response.send("<h1>Hi I am Jagroop and I Love BTS</h1>");
})
app.listen(3000 , function() {
    console.log("Express is Called");
});