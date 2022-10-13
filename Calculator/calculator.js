const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',  function(req, res){
    res.sendFile(__dirname + "/" + "index.html")
})

app.post('/',function(req, res){

    let numOne = Number(req.body.num1)
    let numTwo = Number(req.body.num2)
    let result  = numOne + numTwo
    res.send("The Result of the Calculation is: " + result)
})
app.listen(3000 , function(){
    console.log("Server is Running on Port 3000");
})