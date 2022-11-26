const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    required: true,
    type: String,
  },
  postfix:{
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  author: {
    required: true,
    type: [String]
  }
})

module.exports = mongoose.model('Books', BookSchema)
