const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const jeanSchema = new mongoose.Schema({
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
},
  {
    timestamps: true,
    collection: 'jean',
  }
);

const Jean = mongoose.model('jean', jeanSchema, 'jean');

module.exports = Jean;