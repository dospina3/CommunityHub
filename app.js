//EMAIL (Gmail)
// Username: swamphackscommunityhub@gmail.com
//Password: C0mmun1tyHub


const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mongoose = require('mongoose');
var mailText;
var charityChosen  = "John Doe"; //This will be used to keep track of who you're going to donate to


var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'swamphackscommunityhub@gmail.com',
		pass: 'C0mmun1tyHub'
	}
});



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
app.get('/BillyJeffords', function(req, res){
    res.sendFile(path.join(__dirname+'/charity6.html'));
    charityChosen = "Billy Jeffords";
    //document.getElementById("name").innerHTML = charityChosen;
});

app.listen(3000, function () {
  console.log('Server started on port 3000!');
})

app.get('/payment', function(req, res){
	res.sendFile(path.join(__dirname+'/payment.html'))
})

app.get('/donate', function(req, res){
    console.log()
    var amount = req.query.amount;//swamphackscommunityhub@gmail.com
    var firstName = req.query.firstname;//C0mmun1tyHub
    var lastName = req.query.lastname;
    var accountNumber = req.query.accountNumber;
    var CVV = req.query.cvv;
    var billingAdress = req.query.addy;
    console.log('amount = ', amount);
})
app.get('/donateT', function(req, res){
    console.log()
    mailText = req.query.myTextBox;
    console.log('amount = ', mailText);
    var mailOptions = {
	from: 'swamphackscommunityhub@gmail.com',
	to: 'swamphackscommunityhub@gmail.com',
	subject: 'New Question/Donation',
	text: mailText
};

    transporter.sendMail(mailOptions, function(error, info){});
})
    //transporter.sendMail(mailOptions, function(error, info){});

app.use('/', router);
