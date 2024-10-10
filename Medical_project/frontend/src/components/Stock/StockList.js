import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockForm from './StockForm';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [editingStock, setEditingStock] = useState(null);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get('/api/stocks');
      setStocks(response.data);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/stocks/${id}`);
      fetchStocks(); // Refresh the stock list
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Stock Management</h2>
      <StockForm fetchStocks={fetchStocks} editingStock={editingStock} setEditingStock={setEditingStock} />
      <table className="table table-dark table-striped mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock._id}>
              <td>{stock.name}</td>
              <td>{stock.quantity}</td>
              <td>{stock.price}</td>
              <td>{stock.description}</td>
              <td>
                <button className="btn btn-primary m-1" onClick={() => setEditingStock(stock)}>Edit</button>
                <button className="btn btn-danger m-1" onClick={() => handleDelete(stock._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;