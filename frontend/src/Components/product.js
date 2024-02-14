import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productName) => {
    // Update the cart with the selected product
    setCart([...cart, productName]);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <button onClick={() => handleAddToCart(product.name)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h3>Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;