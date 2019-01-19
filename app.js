const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mongoose = require('mongoose');


//I commented out previous get, with a static serve that serves index.html and styles.css
app.use(express.static("public"));

/*app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})*/

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
