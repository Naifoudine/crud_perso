const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RoutePersonnages = require('./Router/Personnage')
const RouteComics = require('./Router/Comics')

//Connexion à la bdd
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(RoutePersonnages);
app.use(RouteComics);

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

/*app.get('/', (req, res) => {

  res.render('pages/home.ejs', {})
})*/
/*/ index page
app.get('/', function(req, res) {
  var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
      mascots: mascots,
      tagline: tagline
  });
});*/

module.exports = app;