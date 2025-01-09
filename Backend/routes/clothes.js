import express from "express";
const router = express.Router();
import Item from "../model/Item.js";
// CREATE: Add new item
router.post('/', async (req, res) => {
  try {
    console.log("Received data");
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem); // Send back the created item
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ: Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find(); // Get all items
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ: Get item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE: Update an item by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Delete an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
