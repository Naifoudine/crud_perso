const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnageSchema = new Schema({
    firstName:  String,
    lastName: String,
    genre: String,
    Comics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comics"
      }
    ]
  });

const Personnage = mongoose.model('Personnage', personnageSchema)

module.exports = Personnage