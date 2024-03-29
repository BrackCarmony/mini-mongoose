var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  title: { type: String, maxlength: 120 },
  author: { type: String, maxlength: 40 },
  genre: {
    type: String,
    lowercase: true,
    enum: ['unknown', 'how-to', 'biography']
  },
  pages: { type: Number, min: 1 },
  checked_out: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', schema);
