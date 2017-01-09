var mongoose = require('mongoose');
var songSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  lyrics: String,
  artist: String
});

var Song = mongoose.model('Song', songSchema);
module.exports = Song;
