const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const port = 3000;
const url = 'mongodb://localhost:27017/tasksdb';

var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {      
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log('Database is created!');
    insertDocuments(db, function() {
        db.close();
    });
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});