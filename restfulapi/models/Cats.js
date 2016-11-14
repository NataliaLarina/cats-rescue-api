var mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
  id: Number,
  name: String,
  note: String,
  img: String
});

module.exports = mongoose.model("Cat", catSchema)
