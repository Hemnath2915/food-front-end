import React from 'react';
import './Services.css'; // Import the CSS file for styling

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Fast Delivery',
      description: 'Get your food delivered to your doorstep in the shortest possible time.',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Wide Menu Selection',
      description: 'Choose from a wide variety of cuisines and dishes to satisfy your cravings.',
      icon: '🍔'
    },
    {
      id: 3,
      title: 'Easy Online Ordering',
      description: 'Place your food orders online with just a few clicks and enjoy a seamless experience.',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Secure Payment',
      description: 'Make secure payments for your food orders using various payment options.',
      icon: '💳'
    }
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service">
            <span className="service-icon">{service.icon}</span>
            <div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
