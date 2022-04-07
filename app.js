const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
RoutePersonnages = require('./Router/Personnage')

//Connexion à la bdd
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose");
});

const app = express();


app.use(bodyParser.json());
app.use('/api/personnages/', RoutePersonnages);

module.exports = app;