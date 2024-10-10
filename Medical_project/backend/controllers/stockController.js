const Stock = require('../models/Stock');


// Create Stock
exports.createStock = async (req, res) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ message: 'Error creating stock', error });
  }
};

// Get All Stocks
exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving stocks', error });
  }
};

// Get Stock by ID
exports.getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving stock', error });
  }
};

// Update Stock
exports.updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: 'Error updating stock', error });
  }
};

// Delete Stock
exports.deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json({ message: 'Stock deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting stock', error });
  }
};