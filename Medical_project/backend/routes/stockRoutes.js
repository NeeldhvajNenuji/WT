const express = require('express');
const router = express.Router();
const { createStock, getStocks, getStockById, updateStock, deleteStock } = require('../controllers/stockController');

const app = express();


// router.post('/', createStock);
// router.get('/', getStocks);

app.get('/', async (req, res) => {
    try {
      const stocks = await Stock.find();
      res.json(stocks);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // @route   POST /api/stocks
  // @desc    Add new stock
  app.post('/api/stocks', async (req, res) => {
    const { name, quantity, price, description } = req.body;
  
    try {
      const newStock = new Stock({
        name,
        quantity,
        price,
        description
      });
  
      const savedStock = await newStock.save();
      res.json(savedStock);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
app.get('/:id', getStockById);
app.put('/:id', updateStock);
app.delete('/:id', deleteStock);

module.exports = app;