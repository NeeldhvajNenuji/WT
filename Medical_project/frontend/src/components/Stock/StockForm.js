import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockForm = ({ fetchStocks, editingStock, setEditingStock }) => {
  const [formData, setFormData] = useState({ name: '', quantity: '', price: '', description: '' });

  useEffect(() => {
    if (editingStock) {
      setFormData(editingStock);
    }
  }, [editingStock]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStock) {
        await axios.put(`/api/stocks/${editingStock._id}`, formData);
        setEditingStock(null);
      } else {
        await axios.post('/api/stocks', formData);
      }
      fetchStocks(); // Refresh the stock list
      setFormData({ name: '', quantity: '', price: '', description: '' });
    } catch (error) {
      console.error('Error saving stock:', error);
      alert(error.response? error.response.data.message : 'an error occurred')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark text-light p-4 rounded mt-4">
      <h4>{editingStock ? 'Edit Stock' : 'Add Stock'}</h4>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="form-control"
          placeholder="Quantity"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="form-control"
          placeholder="Price"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          placeholder="Description"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingStock ? 'Update Stock' : 'Add Stock'}
      </button>
      {editingStock && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => {
            setEditingStock(null);
            setFormData({ name: '', quantity: '', price: '', description: '' });
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default StockForm;