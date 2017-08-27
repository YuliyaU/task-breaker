const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const port = 3000;
const url = 'mongodb://localhost:27017/tasksdb';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log('Database is created!');
    db.close();
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});