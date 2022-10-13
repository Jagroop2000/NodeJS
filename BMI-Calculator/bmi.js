const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function(){
    console.log("Express Server Started with 3000 Port");
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html")
});

app.post('/', function(req, res){
    console.log(req.body);
    let result  = Number(req.body.weight) / (Number(req.body.height *  req.body.height))
    res.send("Your Body Mass Index Is : " + result)
});