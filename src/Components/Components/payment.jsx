import React from 'react';
import './payment.css'; // Import the CSS file for styling

const PaymentPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Menu A',
      quantity: 2,
      price: 250
    },
    {
      id: 2,
      name: 'Menu B',
      quantity: 1,
      price: 350
    },
    {
      id: 3,
      name: 'Menu C',
      quantity: 3,
      price: 200
    }
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="payment-page-container">
      <h2>Payment Details</h2>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <table className="cart-items-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <h3>Total: ₹{totalPrice}</h3>
        </div>
      </div>
      <div className="payment-form">
        <h3>Payment Details</h3>
        <form>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" />
          </div>
          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" />
          </div>
          <button className="pay-button">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
