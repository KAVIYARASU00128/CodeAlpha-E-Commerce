const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price required'],
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
