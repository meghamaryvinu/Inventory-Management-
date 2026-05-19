import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const addProduct = async () => {
    if (!name || !quantity) {
      alert('Please enter name and quantity');
      return;
    }
    try {
      await axios.post('http://localhost:5000/products', {
        name: name,
        quantity: quantity
      });
      setName('');
      setQuantity('');
      getProducts();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      getProducts();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const updateQuantity = async (id, newQty) => {
    try {
      await axios.put(`http://localhost:5000/products/${id}`, {
        quantity: newQty
      });
      getProducts();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Inventory Manager</h1>
      
      <div className="add-product-form">
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <div className="products-list">
        <h2>Products</h2>
        {products.length === 0 ? (
          <p>No products yet</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-item">
              <span className="product-name">{product.name}</span>
              <span className="product-quantity">Qty: {product.quantity}</span>
              <div className="product-actions">
                <button 
                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  className="increase-btn">
                  +
                </button>
                <button 
                  onClick={() => updateQuantity(product.id, product.quantity - 1)}
                  className="decrease-btn">
                  -
                </button>
                <button 
                  onClick={() => deleteProduct(product.id)}
                  className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
