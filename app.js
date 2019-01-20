//EMAIL (Gmail)
// Username: swamphackscommunityhub@gmail.com
//Password: C0mmun1tyHub
//To run emails run this in your console npm install nodemailer

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mongoose = require('mongoose');
var mongodb = require('mongoose');
var bodyParser = require('body-parser');

//DATABASE SETUP BEGINS
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
var db = mongoose.connect('mongodb://user:password1@ds161144.mlab.com:61144/communityhub');
var nameSchema = new mongoose.Schema({
  name: String,
});
var peopleWithNeed = mongoose.model('peopleWithNeed', nameSchema);
//DATABASE SETUP ENDS

//app.use(express.static("public"));
app.set('views', './views');
app.set('view engine', 'ejs');

var arrayPeople = []
 
 peopleWithNeed.find({},function( err, documents){
    if(err) throw err;
    console.log(documents);
    for(x in documents){
    	console.log('documents[x].name');
		console.log(documents[x].name);    	
		arrayPeople[x] = documents[x].name;
    }
   });

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


app.get('/', function (req, res) {
console.log('in serve');

  peopleWithNeed.find({},function( err, documents){
  	var arrayPeople = [];
    if(err) throw err;
    console.log(documents);
    for(x in documents){
    	console.log('documents[x].name');
		console.log(documents[x].name);    	
		arrayPeople[x] = documents[x].name;
    }
   });

  console.log('In Serve');
  
  res.render('index', {arrayPeople: arrayPeople});
  
})

app.get('/JillRoberts', function(req, res){
    res.sendFile(path.join(__dirname+'/views/charity1.html'));
    charityChosen = "Jill Roberts";
});
app.get('/JohnnyCash', function(req, res){
    res.sendFile(path.join(__dirname+'/views/charity2.html'));
    charityChosen = "Johnny Cash";
});
app.get('/VanessaToblerone', function(req, res){
    res.sendFile(path.join(__dirname+'/views/charity3.html'));
    charityChosen = "Vanessa Toblerone";
});
app.get('/MikeMiller', function(req, res){
    res.sendFile(path.join(__dirname+'/views/charity4.html'));
    charityChosen = "Mike Miller";
});
app.get('/JakeBosch', function(req, res){
    res.sendFile(path.join(__dirname+'/views/charity5.html'));
    charityChosen = "Jake Bosch";
});
app.get('/BillyJeffords', function(req, res){

    res.sendFile(path.join(__dirname+'/views/charity6.html'));
    charityChosen = "Billy Jeffords";
    //document.getElementById("name").innerHTML = charityChosen;
});
app.get('/Anipso', function(req, res){
    res.sendFile(path.join(__dirname+'/views/AdminPage.html'));
    var fullName = req.query.fullName;
    var age = req.query.age;
    var message = req.query.message;
    var category = req.query.category;
    var needDescription = req.query.needDescription;
    //document.getElementById("name").innerHTML = charityChosen;
});



app.listen(3000, function () {
  console.log('Server started on port 3000!');
})



app.get('/payment', function(req, res){
	res.sendFile(path.join(__dirname+'/views/payment.html'))
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



app.post('/post-feedback', function(req,res){
	 var mySchema = new peopleWithNeed({name: req.body.person});
  	mySchema.save(function(err){
  		if (err) throw err;
  		else{
		res.send('Data received:\n' + JSON.stringify(req.body));
	}
  	})
});
app.get('/view-feedback',  function(req, res) {
      
    peopleWithNeed.find({},function( err, documents){
    if(err) throw err;
     res.send(documents);

     })
});


