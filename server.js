var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var crypto = require('crypto');

//for database
var Pool = require('pg').Pool;


var config = {
  host: 'localhost',
  user: 'danglingpointers',
  password: 'srm52sai24',
  database: 'attendancemanager'
};

var pool = new Pool(config);

var XMLHttpRequest = require('xhr2');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

app.get('/',function(req,res){
  res.send('Welcome to new app!');
});

app.post('/add-doner',function(req,res){

  var nm = req.body.name;
  var age1 = req.body.age;
  var location = req.body.place;
  var gen = req.body.gender;
  var blood_grp = req.body.blood_group;

  pool.query(`INSERT INTO "doners" ("name", "age", "place", "gender", "blood_group")
              VALUES ($1, $2, $3, $4, $5);`,[nm,age1,location,gen,blood_grp],function(err,result){
    if(err)
    {
      res.status(500).send(err.toString());
    }
    else
    {
      res.status(200).send("insert succesfull");
    }
  });

});

app.post('/get-doners',function(req,res){

  var blood_grp = req.body.blood_group;

  

});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
