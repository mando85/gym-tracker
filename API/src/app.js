import fs from 'fs';
import path from 'path';
import express from 'express';

import exerciseRoutes from '$/routes/exerciseRoutes'
import userRoutes from '$/routes/userRoutes'
import workoutRoutes from '$/routes/workoutRoutes'

let app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
  next();
});

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

exerciseRoutes(app)
userRoutes(app)
workoutRoutes(app)

let MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {
  app.set('myDb', client.db('gymtrackerDB'));
})

app.listen(3002);

console.log('Gym Tracker API running on http://localhost:3002/api/');