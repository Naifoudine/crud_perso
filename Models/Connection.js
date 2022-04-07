require('dotenv').config();
const mongoose = require('mongoose');

//Connexion à la bdd
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose");
});

module.exports = mongoose