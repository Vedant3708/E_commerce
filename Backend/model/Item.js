import mongoose from "mongoose";

// Create a schema for Item
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }, // Image URL for the item
});

const Item = mongoose.model('Item', itemSchema); // Define the model

export default Item;
