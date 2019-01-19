const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mongoose = require('mongoose');
var mongodb = require('mongoose');
var bodyParser = require('body-parser');

//DATABASE SETUP BEGINS
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
arrayPeople.push({name: 'john'}, {name:'john2'});
 
 peopleWithNeed.find({},function( err, documents){
    if(err) throw err;
    console.log(documents);
    for(x in documents){
    	console.log('documents[x].name');
		console.log(documents[x].name);    	
		arrayPeople[x] = documents[x].name;
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


app.get('/charities', function(req, res){
    res.sendFile(path.join(__dirname+'/charities.html'))
})

app.listen(3000, function () {
  console.log('Server started on port 3000!');
})



app.get('/donate', function(req, res){
    console.log()
    var amount = req.query.amount;
    console.log('amount = ', amount);
    // mongoose.db.insert({table: 'donations' value: amount});
    //database.insert()
})

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


