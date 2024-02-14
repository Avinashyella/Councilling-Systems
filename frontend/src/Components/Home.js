import React, { useState } from 'react';
import ProductList from './ProductList';
import TodoList from './TodoList';
import Link from '@mui/material/Link';
import DataFetch from './Datafetch';

// Sample logos (replace with your own logo URLs)
const todoListLogo = 'https://example.com/todo-list-logo.png';
const productListLogo = 'https://example.com/product-list-logo.png';
const contactFormLogo = 'https://example.com/contact-form-logo.png';

const Home = () => {
  const products = [
    { name: 'Mobile Phone', price: 10 },
    { name: 'Soundbar', price: 15 },
    { name: 'Adapter', price: 20 },
  ];

  const todoItems = [
    { title: 'Complete React project', completed: false },
    { title: 'Read a book', completed: true },
    // Add more todo items as needed
  ];

  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to a server
    console.log('Contact Form Data:', contactFormData);
    // Reset the form after submission
    setContactFormData({ name: '', email: '', message: '' });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  };

  const columnStyle = {
    flex: 1,
  };

  const formStyle = {
    width: '50%',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: 'blue',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    backgroundColor: 'blue',
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const checkboxStyle = {
    marginRight: '8px',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  return (
    <div>
      <DataFetch/>
      {/* <div style={containerStyle}>
        <div style={columnStyle}>
          <img src={todoListLogo} alt="Todo List Logo" style={logoStyle} />
          <TodoList todos={todoItems} />
        </div>
        <div style={columnStyle}>
          <img src={productListLogo} alt="Product List Logo" style={logoStyle} />
          <ProductList products={products} />
        </div>
      </div>

      <Link href="/ContactForm" variant="body2">
      contact us</Link> */}
    </div>
  );
};

export default Home;