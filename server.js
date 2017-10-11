const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser'); 

const app = express();
const jsonParser = bodyParser.json();

const port = 3000;
const url = 'mongodb://localhost:27017/tasksdb';

app.use(express.static(__dirname + '/src'));

app.get("/api/tasks", function(req, res){    
  MongoClient.connect(url, function(err, db){
      db.collection("tasks").find({}).toArray(function(err, tasks){
          res.send(tasks)
          db.close();
      });
  });
});

app.post("/api/tasks", jsonParser, function (req, res) {    
    if (!req.body) { 
        return res.sendStatus(400);
    }
    var _taskName = req.body.taskName;
    var _featureName = req.body.featureName;
    var task = {taskName: _taskName, featureName: _featureName};
    console.log(task);

    MongoClient.connect(url, function(err, db) {
        db.collection("tasks").insertOne(task, function(err, result) {
            if (err) {
                return res.status(400).send();
            }
            res.send(task);
            db.close();
        });        
    });
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});