import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

const MenuList = () => {
  const [cart, setCart] = useState([]); 

  const menus = [
    {
      id: 1,
      name: 'Menu A',
      rating: 4.5,
      stars: 4,
      image: 'https://th.bing.com/th/id/OIP.W5A88VvmwibfNW2EqDynwwHaE0?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      quantity: 0
    },
    {
      id: 2,
      name: 'Menu B',
      rating: 4.2,
      stars: 4,
      image: 'https://th.bing.com/th/id/OIP.nBcFtEM0IYBH7-UXAS0vcQHaE9?w=290&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      quantity: 0
    },
    {
      id: 3,
      name: 'Menu C',
      rating: 4.8,
      stars: 5,
      image: 'https://th.bing.com/th/id/OIP.yxgiSBAO7bBILGSMUv3REgHaFj?w=193&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      quantity: 0
    },
    {
      id: 4,
      name: 'Menu D',
      rating: 4.3,
      stars: 4,
      image: 'https://th.bing.com/th/id/OIP.j48RjAU2Clcsr2Sep-4pBgHaJC?w=186&h=227&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      quantity: 0
    },
    {
      id: 5,
      name: 'Menu E',
      rating: 4.6,
      stars: 5,
      image: 'data:image/jpeg;base64,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',
      quantity: 0
    },
    {
        id: 6,
        name: 'Menu E',
        rating: 4.6,
        stars: 5,
        image: 'https://th.bing.com/th/id/OIP.PJ4Ds_OxyIOLqxQHveG8HQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        quantity: 0
    }
  ];

  // Function to handle the quantity adjustment
  const handleQuantityAdjustment = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(action === 'add' ? item.quantity + 1 : item.quantity - 1, 0) }
          : item
      )
    );
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = (menu) => {
    const existingItem = cart.find((item) => item.id === menu.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item))
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...menu, quantity: 1 }]);
    }
  };

  // Function to calculate the total number of items in the cart
  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="menu-list-container">
      <h2>Menu List</h2>
      <div className="menu-cards">
        {menus.map((menu) => (
          <div key={menu.id} className="menu-card">
            <img src={menu.image} alt={menu.name} className="menu-image" />
            <div className="menu-details">
              <h3 className="menu-name">{menu.name}</h3>
              <div className="menu-rating">
                {Array(menu.stars).fill().map((_, index) => (
                  <span key={index} className="menu-star">&#9733;</span>
                ))}
              </div>
              <p className="menu-rating-value">Rating: {menu.rating}</p>
              <div className="menu-quantity">
                <button
                  className="quantity-button"
                  disabled={menu.quantity === 0}
                  onClick={() => handleQuantityAdjustment(menu.id, 'subtract')}
                >
                  -
                </button>
                <span className="quantity-value">{menu.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityAdjustment(menu.id, 'add')}
                >
                  +
                </button>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(menu)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="cart"> <button className="view-cart-button">View Cart ({getTotalCartItems()})</button></Link>
    </div>
  );
};

export default MenuList;
