const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comicsSchema = new Schema({
  title:  String,
  description:  String,
  Personnages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Personnage"
    }
  ]
  });

const Comics = mongoose.model('Comics', comicsSchema)

module.exports = Comics