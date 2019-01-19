const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mongoose = require('mongoose');
var charityChosen  = "John Doe"; //This will be used to keep track of who you're going to donate to

app.use(express.static("public"));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/JillRoberts', function(req, res){
    res.sendFile(path.join(__dirname+'/charity1.html'));
    charityChosen = "Jill Roberts";
});
app.get('/JohnnyCash', function(req, res){
    res.sendFile(path.join(__dirname+'/charity2.html'));
    charityChosen = "Johnny Cash";
});
app.get('/VanessaToblerone', function(req, res){
    res.sendFile(path.join(__dirname+'/charity3.html'));
    charityChosen = "Vanessa Toblerone";
});
app.get('/MikeMiller', function(req, res){
    res.sendFile(path.join(__dirname+'/charity4.html'));
    charityChosen = "Mike Miller";
});
app.get('/JakeBosch', function(req, res){
    res.sendFile(path.join(__dirname+'/charity5.html'));
    charityChosen = "Jake Bosch";
});
app.get('/TheWho', function(req, res){
    res.sendFile(path.join(__dirname+'/charity6.html'));
    charityChosen = "The Who";
    //document.getElementById("name").innerHTML = charityChosen;
});

function switchPage(){
	console.log("Got hit");
}


app.listen(3000, function () {
  console.log('Server started on port 3000!');
})

app.get('/donatePage', function(req, res){
	res.sendFile(path.join(__dirname+'/donatePage.html'))
	var charityName = charityChosen;
	document.getElementById("name").innerHTML = charityName;
})

app.get('/donate', function(req, res){
    console.log()
    var amount = req.query.amount;
    console.log('amount = ', amount);


    // mongoose.db.insert({table: 'donations' innerHTML: amount});
    //database.insert()
})

app.use('/', router);
