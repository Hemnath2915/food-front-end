import React from 'react';
import './cart.css'; 
import { Link } from 'react-router-dom';


const ViewCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Menu A',
      quantity: 2,
      price: 250,
      image: 'https://th.bing.com/th/id/OIP.W5A88VvmwibfNW2EqDynwwHaE0?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 2,
      name: 'Menu B',
      quantity: 1,
      price: 350,
      image: 'https://th.bing.com/th/id/OIP.nBcFtEM0IYBH7-UXAS0vcQHaE9?w=290&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      id: 3,
      name: 'Menu C',
      quantity: 3,
      price: 200,
      image: 'https://th.bing.com/th/id/OIP.PJ4Ds_OxyIOLqxQHveG8HQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    }
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="view-cart-container">
      <h2>View Cart</h2>
      <table className="cart-items-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><img src={item.image} alt={item.name} className="menu-image" /></td>
              <td>{item.quantity}</td>
              <td>₹{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <h3>Total: ₹{totalPrice}</h3>
      </div>
      <Link to='/payment'><button className="payment-button">Proceed to Payment</button></Link>
    </div>
  );
};

export default ViewCart;
